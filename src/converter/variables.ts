import { RuleVariableMap } from "../types/general.js";

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
 * Input variables are read only variables and can be accessed by the get(key: string) method.
 * Output variables are written by setNAME(value: any) methods annd can be accessed by the getNAME() methods, all the getters have in common
 * this behavior: are searched in the output object, if not found are searched in the input object.
 * @see get(key: string)
 */
class Variables {

    input: RuleVariableMap;
    output: RuleVariableMap = {};
    dummy: RuleVariableMap = {};
    cf: number = 1;

    constructor(input: RuleVariableMap) {
        this.input = input
    }

    /**
     * Retrieves the value of the variable with the specified name.
     * If the variable name starts with "§DUMMYN" or "§DUMMYB" the value will be retrieved from the dummy object else from the input object.
     * If the variable name starts with "*" the value will be retrieved from from the getter method with the same name.
     * Else the value will be retrieved from the input object.
     * @param key The name of the variable to retrieve.
     * @returns The value of the variable.
     */
    get(key: string): any {
        if (key.startsWith("§DUMMYN") || key.startsWith("§DUMMYB") || key.startsWith("§DUMMYA")) {
            return this.dummy[key];
        } else if (key.startsWith("*")) {
            switch (key.slice(1)) {
                case "CON-A": return this.getCON_A();
                case "CON-B": return this.getCON_B();
                default: return new Function(`return this.get${key.slice(1)}();`).bind(this)();
            }

        } else {
            return this.input[key];
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

    getDUMMYA1(): any {
        return this.dummy["§DUMMYA1"]
    }

    getDUMMYA2(): any {
        return this.dummy["§DUMMYA2"]
    }

    getDUMMYA3(): any {
        return this.dummy["§DUMMYA3"]
    }

    getDUMMYA4(): any {
        return this.dummy["§DUMMYA4"]
    }

    getDUMMYA5(): any {
        return this.dummy["§DUMMYA5"]
    }


    getDUMMYN1(): any {
        return this.dummy["§DUMMYN1"]
    }

    getDUMMYN2(): any {
        return this.dummy["§DUMMYN2"]
    }

    getDUMMYN3(): any {
        return this.dummy["§DUMMYN3"]
    }

    getDUMMYN4(): any {
        return this.dummy["§DUMMYN4"]
    }

    getDUMMYN5(): any {
        return this.dummy["§DUMMYN5"]
    }

    getDUMMYN6(): any {
        return this.dummy["§DUMMYN6"]
    }

    getDUMMYN7(): any {
        return this.dummy["§DUMMYN7"]
    }

    getDUMMYN8(): any {
        return this.dummy["§DUMMYN8"]
    }

    getDummyN9(): any {
        return this.dummy["§DUMMYN9"]
    }


    getDUMMYB1(): any {
        return this.dummy["§DUMMYB1"]
    }

    getDUMMYB2(): any {
        return this.dummy["§DUMMYB2"]
    }

    getDUMMYB3(): any {
        return this.dummy["§DUMMYB3"]
    }

    getDUMMYB4(): any {
        return this.dummy["§DUMMYB4"]
    }

    getDUMMYB5(): any {
        return this.dummy["§DUMMYB5"]
    }


    /**
     * Retrieves the value of the "XFVALI" output.
     * If the value is not available, it falls back to the "XFVALI" input.
     * @returns The value of the "XFVALI" output or input.
     */
    getLG(): any {
        return this.output["XFVALI"] || this.input["XFVALI"] || "";
    }

    /**
     * Retrieves the value of the "D§NOTA" output.
     * If the value is not available, it falls back to the "D§NOTA"" input.
     * @returns The value of the "D§NOTA" output or input.
     */
    getNT(): any {
        return this.output["D§NOTA"] || this.input["D§NOTA"] || ""
    }

    /**
     * retrieves the value of the "D§QUA1" output.
     * If the value is not available, it falls back to the "D§QUA1" input.
     * 
     * @returns The value of the "D§QUA1" output or input.
     */
    getQ1(): any {
        return this.output["D§QUA1"] || this.input["D§QUA1"] || 0;
    }

    /**
     * Same behavior as getQ1
     */
    getQ2(): any {
        return this.output["D§QUA2"] || this.input["D§QUA2"] || 0;
    }

    /**
     * Same behavior as getQ1
     */
    getQ3(): any {
        return this.output["D§QUA3"] || this.input["D§QUA3"] || 0;
    }

    /**
     * Same behavior as getQ1
     */
    getQ4(): any {
        return this.output["D§QUA4"] || this.input["D§QUA4"] || 0;
    }

    /**
     * Same behavior as getQ1
     */
    getQ5(): any {
        return this.output["D§QUA5"] || this.input["D§QUA5"] || 0;
    }

    /**
     * Retrieves the value of the "D§USR1" output.
     * If the value is not available, it falls back to the "D§USR1" input.
     * 
     * @returns The value of the "D§USR1" output or input.
     */
    getS1(): any {
        return this.output["D§USR1"] || this.input["D§USR1"] || ""
    }

    /**
     * Same behavior as getS1
     */
    getS2(): any {
        return this.output["D§USR2"] || this.input["D§USR2"] || ""
    }

    /**
     * @returns The value of the getCON_B
     * @see getCON_B
     */
    getLUNG(): any {
        return this.getCON_B();
    }

    /**
     * Set the value of cf and the output["D§COEF"] property to the product of the current value of "D§COEF" and the new value of cf.
     * @param cf The value that will be set
     */
    setCF(cf: number) {
        this.cf = cf
        this.output["D§COEF"] = cf * this.get("D§COEF");
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
    setCON_A(con_a: string) {
        con_a = con_a || "";
        // D§DISE is a 9 chars len
        this.output["D§DISE"] = (con_a.trim().padEnd(4, " ").substring(0, 4) + (this.output["D§DISE"] as string || "").substring(4)).padEnd(D_DISE_LEN, " ");
        this.output["*CON-A"] = con_a;
    }

    /**
     * Set the last five chars of "D§DISE" and "CON-B"
     * @param con_b The value that will be set, if undefined default is 0
     */
    setCON_B(con_b: number) {
        con_b = con_b || 0;
        // D§DISE is a 9 chars len
        this.output["D§DISE"] = (String(this.output["D§DISE"] || "").padEnd(4, " ") + con_b.toString()).padEnd(D_DISE_LEN, " ");
        this.output["*CON-B"] = con_b;
    }

    setDUMMYA1(value: any) {
        this.dummy["§DUMMYA1"] = value
    }

    setDUMMYA2(value: any) {
        this.dummy["§DUMMYA2"] = value
    }

    setDUMMYA3(value: any) {
        this.dummy["§DUMMYA3"] = value
    }

    setDUMMYA4(value: any) {
        this.dummy["§DUMMYA4"] = value
    }

    setDUMMYA5(value: any) {
        this.dummy["§DUMMYA5"] = value
    }

    setDUMMYN1(value: any) {
        this.dummy["§DUMMYN1"] = value
    }

    setDUMMYN2(value: any) {
        this.dummy["§DUMMYN2"] = value
    }

    setDUMMYN3(value: any) {
        this.dummy["§DUMMYN3"] = value
    }

    setDUMMYN4(value: any) {
        this.dummy["§DUMMYN4"] = value
    }

    setDUMMYN5(value: any) {
        this.dummy["§DUMMYN5"] = value
    }

    setDUMMYN6(value: any) {
        this.dummy["§DUMMYN6"] = value
    }

    setDUMMYN7(value: any) {
        this.dummy["§DUMMYN7"] = value
    }

    setDUMMYN8(value: any) {
        this.dummy["§DUMMYN8"] = value
    }

    setDummyN9(value: any) {
        this.dummy["§DUMMYN9"] = value
    }

    setDUMMYB1(value: any) {
        this.dummy["§DUMMYB1"] = value
    }

    setDUMMYB2(value: any) {
        this.dummy["§DUMMYB2"] = value
    }

    setDUMMYB3(value: any) {
        this.dummy["§DUMMYB3"] = value
    }

    setDUMMYB4(value: any) {
        this.dummy["§DUMMYB4"] = value
    }

    setDUMMYB5(value: any) {
        this.dummy["§DUMMYB5"] = value
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
    setQ1(q: any) {
        this.output["D§QUA1"] = q
    }

    /**
     * Set the value of "D§QUA2"
     * @param q The value that will be set
     */
    setQ2(q: any) {
        this.output["D§QUA2"] = q
    }

    /**
     * Set the value of "D§QUA3"
     * @param q The value that will be set
     */
    setQ3(q: any) {
        this.output["D§QUA3"] = q
    }

    /**
     * Set the value of "D§QUA4"
     * @param q The value that will be set
     */
    setQ4(q: any) {
        this.output["D§QUA4"] = q
    }

    /**
     * Set the value of "D§QUA5"
     * @param q The value that will be set
     */
    setQ5(q: any) {
        this.output["D§QUA5"] = q
    }

    /**
     * Set the value of "D§USR1"
     * @param usr The value that will be set
     */
    setS1(s: any) {
        this.output["D§USR1"] = s
    }

    /**
     * Set the value of "D§USR2"
     * @param usr The value that will be set
     */
    setS2(s: any) {
        this.output["D§USR2"] = s
    }

}

export { Variables }