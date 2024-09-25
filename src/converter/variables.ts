import { RuleVariableMap } from "../types/general.js";
import { isNumericType } from "./utils.js";
import { CONFIG } from "./config.js";
import { setVars } from "../services/RULE.js";

const D_DISE_LEN = 9


/***
 * Lamberto Grassi documentation
 * *CF (coefficiente) inizializzata sempre a 1, diventa un moltiplicatore del campo D§COEF
 * *CM (componente), finisce nel campo D§COMP
 * *NT (nota), finisce nel campo D§NOTA 
 * *S1 (sequenza 1) finisce nel campo D§USR1
 * *S2 (sequenza 2) finisce nel campo D§USR2
 * *CON-A (cfg prima parte) va nel campo D§DISE da pos 1 x 4
 * *CON-B (cfg sec parte) va nel campo D§DISE da pos 5 x 5
 * *Q1.. *Q5 finiscono in D§QUA1..5
 * *COL colore del gruppo, inizializzata con i primi 4 caratteri della configurazione
 * *LUNG, come sopra, dal carattere 5 x 5
 * *LG legame (boleana) finisce in XFVALI per attivare/disattivare il record diba
 * 
 * Default behavior is the following:
 * - the variables starting with § are input variables
 * - the variables starting with * are output variables
 * - dummy are exceptions because used to store temporary values and never written in the output object
 * Input variables are read only variables and can be accessed by the get(key: string) method.
 * Output variables are written by setNAME(value: any) methods and can be accessed by the getNAME() methods, all the getters have in common
 * this behavior: are searched in the output object, if not found are searched in the input object.
 * @see get(key: string)
 */
class Variables {
    config: Record<string, any> = CONFIG;
    input: RuleVariableMap = {};
    output: RuleVariableMap = {};
    dummy: RuleVariableMap = {};
    cf: number = 1;
    parObj: Record<string, any> = { elemNumber: 0, objArray: [] }; //objArray ha oggetti tipo {text : '0000', idx : 1}
    CSVA: string = '';


    constructor(input: RuleVariableMap) {
        this.input = input;
        this.config = CONFIG;
        if (this.config.defaultOutput) {
            this.setDefault(this.config.defaultOutput);
        }
        if (input['*CSVA']) {
            this.CSVA = input['*CSVA'];
            if (!this.config['*CSVA'][this.CSVA]) {
                this.CSVA = '*';//la condizione per gli sconosciuti (configurazione commerciale)
            }
            this.parObj.elemNumber = this.config['*CSVA'][this.CSVA].length; //numero elementi che compongono D§DISE
            this.setDefaultDise();
        }
        setVars(this);
    }


    /**
     * Retrieves the value of the variable with the specified name.
     * If the variable name starts with "*" or "§DUMMY" the value will be retrieved from the getter method with the same name.
     * Else the value will be retrieved from the input object.
     * When variable is not provided in the input object, it returns 0 for numeric variables and an empty string for the others.
     * The definition for the numeric variables is provided in the consts.ts file.
     * @param key The name of the variable to retrieve.
     * @returns The value of the variable.
     * @see numeric_vars
     */
    get(key: string): any {
        // variables starting with * or §DUMMY are retrieved by getter methods
        if (key.startsWith("*") || key.startsWith("§DUMMY")) {
            switch (key.slice(1)) {
                case "CON-A": return this.getCON_A();
                case "CON-B": return this.getCON_B();
                default: return new Function(`return this.get${key.slice(1)}();`).bind(this)();
            }

        } else {
            return this.input[key] || (isNumericType(key) ? 0 : "");
        }

    }

    /**
     * Retrieves the *CF value.
     * @returns 1 if not available.
     */
    getCF(): number {
        return this.cf
    }

    /**
     * Retrieves the value of the "D§COMP".
     * @returns The value of the "D§COMP".
     */
    getCM(): any {
        return this.output["D§COMP"] || this.input["D§COMP"];
    }

    /**
     * Retrieves the value of the "XCONFI" property.
     * Extracts the first four characters, trims any leading or trailing whitespace,
     * and pads the result with spaces to a length of four characters.
     * 
     * @returns The first four characters of the "XCONFI" property, padded with spaces.
     */
    getCOL(): any {
        const xconfi = this.output["XCONFI"] || this.input["XCONFI"] || "";
        const firstFourChars = xconfi.substring(0, 4).trim().padEnd(4, " ");
        return firstFourChars;
    }


    /**
     * Retrieves the value of "*CON-A" from the output object.
     * If the value is not available, it falls back to calling the getCOL() method.
     * 
     * @returns The value of "*CON-A" or the result of getCOL() if not available.
     */
    getCON_A(): String {
        return this.output["*CON-A"] || this.getCOL()
    }


    /**
     * Retrieves the value of *CON-B from the output object or calculates it based on the XCONFI input.
     * If the value is not found or is not a valid number, it returns 0.
     * @returns The value of CON-B.
     */
    getCON_B(): number {
        if (this.output["*CON-B"]) {
            return this.output["*CON-B"];
        } else {
            const xconfi: String = this.output["XCONFI"] || this.input["XCONFI"] || "";
            const con_b: number = Number(xconfi.substring(4, 9).trim());
            if (isNaN(con_b)) {
                return 0;
            } else {
                return con_b;
            }
        }
    }

    getDUMMYA1(): string {
        return this.getDUMMYString("§DUMMYA1")
    }

    getDUMMYA2(): string {
        return this.getDUMMYString("§DUMMYA2")
    }

    getDUMMYA3(): string {
        return this.getDUMMYString("§DUMMYA3")
    }

    getDUMMYA4(): string {
        return this.getDUMMYString("§DUMMYA4")
    }

    getDUMMYA5(): string {
        return this.getDUMMYString("§DUMMYA5")
    }

    getDUMMYA6(): string {
        return this.getDUMMYString("§DUMMYA6")
    }

    getDUMMYA7(): string {
        return this.getDUMMYString("§DUMMYA7")
    }

    getDUMMYA8(): string {
        return this.getDUMMYString("§DUMMYA8")
    }

    getDUMMYA9(): string {
        return this.getDUMMYString("§DUMMYA9")
    }

    getDUMMYN1(): number {
        return this.getDUMMYNumber("§DUMMYN1")
    }

    getDUMMYN2(): number {
        return this.getDUMMYNumber("§DUMMYN2")
    }

    getDUMMYN3(): number {
        return this.getDUMMYNumber("§DUMMYN3")
    }

    getDUMMYN4(): number {
        return this.getDUMMYNumber("§DUMMYN4")
    }

    getDUMMYN5(): number {
        return this.getDUMMYNumber("§DUMMYN5")
    }

    getDUMMYN6(): number {
        return this.getDUMMYNumber("§DUMMYN6")
    }

    getDUMMYN7(): number {
        return this.getDUMMYNumber("§DUMMYN7")
    }

    getDUMMYN8(): number {
        return this.getDUMMYNumber("§DUMMYN8")
    }

    getDUMMYN9(): number {
        return this.getDUMMYNumber("§DUMMYN9")
    }


    getDUMMYB1(): string {
        return this.getDUMMYString("§DUMMYB1")
    }

    getDUMMYB2(): string {
        return this.getDUMMYString("§DUMMYB2")
    }

    getDUMMYB3(): string {
        return this.getDUMMYString("§DUMMYB3")
    }

    getDUMMYB4(): string {
        return this.getDUMMYString("§DUMMYB4")
    }

    getDUMMYB5(): string {
        return this.getDUMMYString("§DUMMYB5")
    }

    getDUMMYB6(): string {
        return this.getDUMMYString("§DUMMYB6")
    }

    getDUMMYB7(): string {
        return this.getDUMMYString("§DUMMYB7")
    }

    getDUMMYB8(): string {
        return this.getDUMMYString("§DUMMYB8")
    }

    getDUMMYB9(): string {
        return this.getDUMMYString("§DUMMYB9")
    }

    private getDUMMYString(varname: string): string {
        const value = this.dummy[varname];
        if (value !== undefined && value !== null) {
            return value
        } else {
            return this.input[varname] || ""
        }
    }

    private getDUMMYNumber(varname: string): number {
        const value = this.dummy[varname];
        if (value !== undefined && value !== null) {
            return value
        } else {
            return this.input[varname] || 0
        }
    }

    /**
     * Retrieves the value of the "XFVALI" output.
     * If the value is not available, it falls back to the "XFVALI" input.
     * @returns The value of the "XFVALI" output or input.
     */
    getLG(): any {
        return this.getStringOrDefault("XFVALI")
    }

    /**
     * Retrieves the value of the "D§NOTA" output.
     * If the value is not available, it falls back to the "D§NOTA"" input.
     * @returns The value of the "D§NOTA" output or input.
     */
    getNT(): any {
        return this.getStringOrDefault("D§NOTA")
    }

    /**
     * retrieves the value of the "D§QUA1" output.
     * If the value is not available, it falls back to the "D§QUA1" input.
     * 
     * @returns The value of the "D§QUA1" output or input.
     */
    getQ1(): number {
        return this.getNumberOrDefault("D§QUA1")
    }

    /**
     * Same behavior as getQ1
     */
    getQ2(): number {
        return this.getNumberOrDefault("D§QUA2")
    }

    /**
     * Same behavior as getQ1
     */
    getQ3(): number {
        return this.getNumberOrDefault("D§QUA3")
    }

    /**
     * Same behavior as getQ1
     */
    getQ4(): number {
        return this.getNumberOrDefault("D§QUA4")
    }

    /**
     * Same behavior as getQ1
     */
    getQ5(): number {
        return this.getNumberOrDefault("D§QUA5")
    }

    /**
     * Retrieves the value of the "D§USR1" output.
     * If the value is not available, it falls back to the "D§USR1" input.
     * 
     * @returns The value of the "D§USR1" output or input.
     */
    getS1(): number | string {
        return this.output["D§USR1"] || this.input["D§USR1"]
    }

    /**
     * Same behavior as getS1
     */
    getS2(): number | string {
        return this.output["D§USR2"] || this.input["D§USR2"]
    }

    /**
     * @returns The value of the getCON_B
     * @see getCON_B
     */
    getLUNG(): any {
        return this.getCON_B();
    }

    getLUN(): any {
        return this.getLUNG();
    }

    setD_L(value: any) {
        throw new Error("Method not implemented.");
    }

    setD_P(value: any) {
        throw new Error("Method not implemented.");
    }

    setD_H(value: any) {
        throw new Error("Method not implemented.");
    }

    private getStringOrDefault(varname: string): string {
        const value = this.output[varname];
        if (value !== undefined && value !== null) {
            return value
        } else {
            return this.input[varname] || ""
        }
    }

    private getNumberOrDefault(varname: string): number {
        const value = this.output[varname];
        if (value !== undefined && value !== null) {
            return value
        } else {
            return this.input[varname] || 0
        }
    }

    /**
     * Set the value of cf and the output["D§COEF"] property to the product of the current value of "D§COEF" and the new value of cf.
     * @param cf The value that will be set
     */
    // setCF(cf: number|string) {
    //     if (typeof cf === 'string') {
    //         if (cf === "") cf = "";
    //         this.cf = parseFloat(cf);
    //     } else {
    //         this.cf = cf;
    //     }
    //     let dcoefResult = this.cf * this.get("D§COEF");
    //     this.output["D§COEF"] = (dcoefResult < 0) ? 0 : dcoefResult;
    // }

    setCF(cf: number | string) {
        if (typeof cf === 'string') {
            throw new Error("I don't know how to handle a string here.");
        }
        this.cf = cf
        if (this.config["D§COEF"] === "newValue") {
            this.output["D§COEF"] = cf;
        } else {
            let dcoefResult = cf * this.get("D§COEF");
            this.output["D§COEF"] = (dcoefResult < 0) ? 0 : dcoefResult;
        }
        this.chkXfVali();//faccio uno o una serie di controlli per capire se il legame è ancora valido
    }

    private chkXfVali() {//al momento controllo solo il coefficiente
        if (this.output["D§COEF"] <= 0) {
            this.output["XFVALI"] = "";
        } else {
            this.output["XFVALI"] = "1";
        }
    }

    /**
     * Set the value of "D§COMP"
     * @param cm The value that will be set
     */
    setCM(cm: any) {
        this.output["D§COMP"] = cm
    }

    /**
     * Set the first four chars of "D§DISE" and "CON-A"
     * @param con_a The value that will be set, if undefined default is ""
     */

    private formatNumber(theNumber: number, conCsva: any): Object {
        let retString: string;
        let tmpNumber = Math.round(theNumber * 10 * conCsva.dec);
        retString = tmpNumber.toString();

        let retObj = { result: 'NOK', text: '' };

        if (retString.length > conCsva.length) {
            retObj.result = 'NOK';
        } else {
            if (conCsva.format === 'zeroPadded') {
                retString = retString.padStart(conCsva.length, '0');
            }
            retObj.result = 'OK';
            retObj.text = retString;
        }

        return retObj;
    }

    private formatString(theString: string, conCsva: Object): Object {
        let retObj = { result: 'NOK', text: '' };
        retObj.result = 'OK'
        retObj.text = theString;
        return retObj;
    }

    private setCon(value: any, label: string, posIdx: number) {
        let CSVA = this.CSVA;
        if (this.config["*CSVA"][CSVA]) {
            let conCsvaPropList = this.config["*CSVA"][CSVA];
            let conCsva = conCsvaPropList.find((elem: any) => elem.idx === posIdx);
            let retObj: any;
            let objArray = this.parObj.objArray;
            if (conCsva) {
                if (conCsva.dataType === 'string') {
                    retObj = this.formatString(value, conCsva)
                } else {
                    retObj = this.formatNumber(value, conCsva)
                }
                if (retObj.result === 'OK') {
                    let idx = objArray.findIndex(
                        (elem: any) => elem.idx === posIdx
                    );
                    let objToLoad = { idx: posIdx, text: retObj.text };
                    if (idx >= 0) {
                        objArray[idx] = objToLoad;
                    } else {
                        objArray.push(objToLoad);
                    }

                    this.setDise();
                    this.output[label] = value;
                }

            } else {//formattazione non prevista
                throw new Error("Anomalia, formattazione D§DISE non prevista");
            }
        } else {
            throw new Error("Anomalia, condizione non prevista per questo articolo");
        }
    }

    //c'è un sistema per mettere queste funzioni su un file esterno?
    //sempre se ha senso parametrizzarle
    setCON_A(value: any) {
        this.setCon(value, '*CON-A', 1);
    }

    setCON_B(value: any) {
        this.setCon(value, '*CON-B', 2);
    }

    setCON_C(value: any) {
        this.setCon(value, '*CON-C', 3);
    }

    private setDise() {
        let objArray = this.parObj.objArray;
        if (this.parObj.elemNumber === objArray.length) {//ho tutti gli elementi in canna
            let objArray = this.parObj.objArray;
            this.output["D§DISE"] = '';
            objArray.sort((a: any, b: any) => a.idx - b.idx);
            objArray.forEach((obj: any) => { this.output["D§DISE"] += obj.text });
        }
    }

    private setDefault(defaultType: string) {
        switch (defaultType) {
            case 'input':
                this.setCF(this.input["D§COEF"]);
                this.setCM(this.input["D§COMP"]);
                this.setNT(this.getNT());
                this.setS1(this.getS1());
                this.setS2(this.getS2());
                break;
        }
    }

    private setDefaultDise() {
        let defaultArray = this.config['*CSVA'][this.CSVA].filter((elem: any) => elem.default);
        let objArray = this.parObj.objArray;
        defaultArray.forEach((defElem: any) => {
            if (!objArray.find((elem: any) => defElem.idx === elem.idx)) {
                let defaultVal;
                if (defElem.default.type === 'input') {
                    let theKey = defElem.default.key;
                    defaultVal = this.input[theKey];
                }
                switch (defElem.idx) {
                    case 1:
                        this.setCON_A(defaultVal);
                        break;
                    case 2:
                        this.setCON_B(defaultVal);
                        break;
                    case 3:
                        this.setCON_C(defaultVal);
                        break;
                }
            }
        });
    }

    setDUMMYA1(value: string) {
        this.dummy["§DUMMYA1"] = value
    }

    setDUMMYA2(value: string) {
        this.dummy["§DUMMYA2"] = value
    }

    setDUMMYA3(value: string) {
        this.dummy["§DUMMYA3"] = value
    }

    setDUMMYA4(value: string) {
        this.dummy["§DUMMYA4"] = value
    }

    setDUMMYA5(value: string) {
        this.dummy["§DUMMYA5"] = value
    }

    setDUMMYN1(value: number) {
        this.dummy["§DUMMYN1"] = value
    }

    setDUMMYN2(value: number) {
        this.dummy["§DUMMYN2"] = value
    }

    setDUMMYN3(value: number) {
        this.dummy["§DUMMYN3"] = value
    }

    setDUMMYN4(value: number) {
        this.dummy["§DUMMYN4"] = value
    }

    setDUMMYN5(value: number) {
        this.dummy["§DUMMYN5"] = value
    }

    setDUMMYN6(value: number) {
        this.dummy["§DUMMYN6"] = value
    }

    setDUMMYN7(value: number) {
        this.dummy["§DUMMYN7"] = value
    }

    setDUMMYN8(value: number) {
        this.dummy["§DUMMYN8"] = value
    }

    setDummyN9(value: number) {
        this.dummy["§DUMMYN9"] = value
    }

    setDUMMYB1(value: string) {
        this.dummy["§DUMMYB1"] = value
    }

    setDUMMYB2(value: string) {
        this.dummy["§DUMMYB2"] = value
    }

    setDUMMYB3(value: string) {
        this.dummy["§DUMMYB3"] = value
    }

    setDUMMYB4(value: string) {
        this.dummy["§DUMMYB4"] = value
    }

    setDUMMYB5(value: string) {
        this.dummy["§DUMMYB5"] = value
    }

    setDUMMYB6(value: string) {
        this.dummy["§DUMMYB6"] = value
    }

    setDUMMYB7(value: string) {
        this.dummy["§DUMMYB7"] = value
    }

    setDUMMYB8(value: string) {
        this.dummy["§DUMMYB8"] = value
    }

    setDUMMYB9(value: string) {
        this.dummy["§DUMMYB9"] = value
    }

    /**
     * Set the value of XFVALI, if param is "" or "1" XVALI wull be set to ""
     * @param lg The value that will be set
     */
    setLG(lg: any) {
        if (lg == "" || lg == 1) {
            this.output["XFVALI"] = "";
        } else {
            this.output["XFVALI"] = lg
        }
    }

    /**
     * Set the value of "D§NOTA"
     * @param nt The value that will be set
     */
    setNT(nt: any) {
        this.output["D§NOTA"] = nt
    }

    /**
     * Set the value of "D§QUA1"
     * @param q The value that will be set
     */
    setQ1(q: number) {
        this.output["D§QUA1"] = q
    }

    /**
     * Set the value of "D§QUA2"
     * @param q The value that will be set
     */
    setQ2(q: number) {
        this.output["D§QUA2"] = q
    }

    /**
     * Set the value of "D§QUA3"
     * @param q The value that will be set
     */
    setQ3(q: number) {
        this.output["D§QUA3"] = q
    }

    /**
     * Set the value of "D§QUA4"
     * @param q The value that will be set
     */
    setQ4(q: number) {
        this.output["D§QUA4"] = q
    }

    /**
     * Set the value of "D§QUA5"
     * @param q The value that will be set
     */
    setQ5(q: number) {
        this.output["D§QUA5"] = q
    }

    /**
     * Set the value of "D§USR1"
     * @param usr The value that will be set
     */
    setS1(s: number | string) {
        this.output["D§USR1"] = this.calculateS(s)
    }

    /**
     * Set the value of "D§USR2"
     * @param usr The value that will be set
     */
    setS2(s: number | string) {
        this.output["D§USR2"] = this.calculateS(s)
    }

    private calculateS(s: number | string): number | string {
        if (typeof s == "string") {
            return s
        } else {
            return s * 10
        }


    }
}

export { Variables }
