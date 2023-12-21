import { RuleVariableMap } from "types/general";

const D_DISE_LEN = 9

/***
 * This class is a wrapper of RuleVariableMap to expose
 * the variables as methods
 * Setters and getter model *VAR
 * get(key) model §AAAA
 */
class Variables {

    input: RuleVariableMap;
    output: RuleVariableMap = {};

    constructor(input: RuleVariableMap) {
        this.input = input
    }

    /**
     * Retrieves the value of the input variables.
     * @param key The name of the variable to retrieve.
     * @returns The value of the variable.
     */
    get(key: string): any {
        return this.input[key];
    }

    /**
     * Retrieves the CF value.
     * 
     * @returns 1 fixed
     */
    getCF(): any {
        return "1";
    }

    /**
     * Retrieves the value of the "D§COMP" input.
     * @returns The value of the "D§COMP" input.
     */
    getCM(): any {
        return this.input["D§COMP"]
    }

    /**
     * Retrieves the value of the "XCONFI" property from the input object,
     * extracts the first four characters, trims any leading or trailing whitespace,
     * and pads the result with spaces to a length of four characters.
     * 
     * @returns The first four characters of the "XCONFI" property, padded with spaces.
     */
    getCOL(): any {
        const xconfi = this.input["XCONFI"] || "";
        const firstFourChars = xconfi.substring(0, 4).trim().padEnd(4, " ");
        return firstFourChars;
    }

    /**
     * Retrieves the value of CON_A. CON_A is the same of COL
     * 
     * @returns The value of CON_A.
     * @see getCOL
     */
    getCON_A(): any {
        return this.getCOL()
    }

    /**
     * Retrieves the value of the "XCONFI" property from the input object,
     * extracts the last five characters, trims any leading or trailing whitespace,
     * and pads the result with spaces to a length of five characters.
     * 
     * @returns The last five characters of the "XCONFI" property, padded with spaces.
     */
    getCON_B(): any {
        const xconfi = this.input["XCONFI"] || "";
        const firstFourChars = xconfi.substring(4, 9).trim().padEnd(5, " ");
        return firstFourChars;
    }


    /**
     * @returns ""
     */
    getLG(): any {
        return "";
    }

    /**
     * Retrieves the value of the "D§NOTA" input.
     * 
     * @returns The value of the "D§NOTA" input.
     */
    getNT(): any {
        return this.input["D§NOTA"] || ""
    }

    /**
     * Retrieves the value of the "D§QUA1" input.
     * 
     * @returns The value of the "D§QUA1" input.
     */
    getQ1(): any {
        return this.input["D§QUA1"] || 0;
    }

    /**
     * Retrieves the value of the "D§QUA2" input.
     * 
     * @returns The value of the "D§QUA2" input.
     */
    getQ2(): any {
        return this.input["D§QUA2"] || 0;
    }

    /**
     * Retrieves the value of the "D§QUA3" input.
     * 
     * @returns The value of the "D§QUA3" input.
     */
    getQ3(): any {
        return this.input["D§QUA3"] || 0;
    }

    /**
     * Retrieves the value of the "D§QUA4" input.
     * 
     * @returns The value of the "D§QUA4" input.
     */
    getQ4(): any {
        return this.input["D§QUA4"] || 0;
    }

    /**
     * Retrieves the value of the "D§QUA5" input.
     * 
     * @returns The value of the "D§QUA5" input.
     */
    getQ5(): any {
        return this.input["D§QUA5"] || 0;
    }

    /**
     * Retrieves the value of the "D§USR1" input.
     * 
     * @returns The value of the "D§USR1" input.
     */
    getS1(): any {
        return this.input["D§USR1"] || ""
    }

    /**
     * Retrieves the value of the "D§USR2" input.
     * 
     * @returns The value of the "D§USR2" input.
     */
    getS2(): any {
        return this.input["D§USR2"] || ""
    }

    /**
     * @returns The value of the getCON_B
     * @see getCON_B
     */
    getLUNG(): any {
        return this.getCON_B();
    }

    /**
     * Set the value of "D§COEF"
     * @param cf The value that will be set
     */
    setCF(cf: any) {
        this.output["D§COEF"] = cf
    }

    /**
     * Set the value of "D§COMP"
     * @param cm The value that will be set
     */
    setCM(cm: any) {
        this.output["D§COMP"] = cm
    }

    /**
     * Set the first four chars of "D§DISE"
     * @param con_a The value that will be set
     */
    setCON_A(con_a: any) {
        // D§DISE is a 9 chars len
        this.output["D§DISE"] = (con_a.trim().padEnd(4, " ").substring(0, 4) + (this.output["D§DISE"] as string || "").substring(4)).padEnd(D_DISE_LEN, " ");
    }

    /**
     * Set the last five chars of "D§DISE"
     * @param con_b The value that will be set
     */
    setCON_B(con_b: any) {
        // D§DISE is a 9 chars len
        this.output["D§DISE"] = (String(this.output["D§DISE"] || "").padEnd(4, " ") + con_b.trim()).padEnd(D_DISE_LEN, " ");
    }

    setDUMMYN1(value: any) {
        this.output["§DUMMYN1"] = value
    }

    setDUMMYN2(value: any) {
        this.output["§DUMMYN2"] = value
    }

    setDUMMYN3(value: any) {
        this.output["§DUMMYN3"] = value
    }

    setDUMMYN4(value: any) {
        this.output["§DUMMYN4"] = value
    }

    setDUMMYN5(value: any) {
        this.output["§DUMMYN5"] = value
    }

    setDUMMYB1(value: any) {
        this.output["§DUMMYB1"] = value
    }

    setDUMMYB2(value: any) {
        this.output["§DUMMYB2"] = value
    }

    setDUMMYB3(value: any) {
        this.output["§DUMMYB3"] = value
    }

    setDUMMYB4(value: any) {
        this.output["§DUMMYB4"] = value
    }

    setDUMMYB5(value: any) {
        this.output["§DUMMYB5"] = value
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
    setUSR1(usr: any) {
        this.output["D§USR1"] = usr
    }

    /**
     * Set the value of "D§USR2"
     * @param usr The value that will be set
     */
    setUSR2(usr: any) {
        this.output["D§USR2"] = usr
    }
}

export { Variables }