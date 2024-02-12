import { RuleVariableMap } from "../types/general.js";

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
    dummy: RuleVariableMap = {};

    constructor(input: RuleVariableMap) {
        this.input = input
    }

    /**
     * Retrieves the value of the variable with the specified name.
     * If the variable name starts with "§DUMMYN" or "§DUMMYB" the value will be retrieved from the dummy object else from the input object.
     * @param key The name of the variable to retrieve.
     * @returns The value of the variable.
     */
    get(key: string): any {
        if (key.startsWith("§DUMMYN") || key.startsWith("§DUMMYB")) {
            return this.dummy[key];
        } else {
            return this.input[key];
        }
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
    getCON_A(): String {
        return this.getCOL()
    }

    /**
     * Get the characters from 4 to 9 from XCONFI property and convert to number
     */
    getCON_B(): number {
        const xconfi: String = this.input["XCONFI"] || "";
        const con_b: number = Number(xconfi.substring(4, 9).trim());
        if (isNaN(con_b)) {
            return 0;
        } else {
            return con_b;
        }
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
     * Set the first four chars of "D§DISE" and "CON-A"
     * @param con_a The value that will be set
     */
    setCON_A(con_a: String) {
        // D§DISE is a 9 chars len
        this.output["D§DISE"] = (con_a.trim().padEnd(4, " ").substring(0, 4) + (this.output["D§DISE"] as string || "").substring(4)).padEnd(D_DISE_LEN, " ");
        this.output["*CON-A"] = con_a;
    }

    /**
     * Set the last five chars of "D§DISE" and "CON-B"
     * @param con_b The value that will be set
     */
    setCON_B(con_b: Number) {
        // D§DISE is a 9 chars len
        this.output["D§DISE"] = (String(this.output["D§DISE"] || "").padEnd(4, " ") + con_b.toString()).padEnd(D_DISE_LEN, " ");
        this.output["*CON-B"] = con_b;
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