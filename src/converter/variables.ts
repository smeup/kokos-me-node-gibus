import { RuleVariableMap } from "types/general";

const D_DISE_LEN = 10

/***
 * This class is a wrapper of RuleVariableMap to expose
 * the variables as methods
 */
class Variables {

    input: RuleVariableMap;
    output: RuleVariableMap = {};

    constructor(ruleVariableMap: RuleVariableMap) {
        this.input = ruleVariableMap
    }

    getCF(): string {
        return "1";
    }

    getCM(): string {
        return this.input["D§COMP"]
    }

    getCOL(): string {
        const xconfi = this.input["XCONFI"] || "";
        const firstFourChars = xconfi.substring(0, 4).trim().padEnd(4, " ");
        return firstFourChars;
    }

    getCON_A(): string {
        return this.getCOL()
    }

    getCON_B(): string {
        const xconfi = this.input["XCONFI"] || "";
        const firstFourChars = xconfi.substring(4, 9).trim().padEnd(5, " ");
        return firstFourChars;
    }

    getLG(): string {
        return "";
    }

    getNT(): string {
        return this.input["D§NOTA"] || ""
    }

    getQ1(): string {
        return this.input["D§QUA1"] || ""
    }

    getQ2(): string {
        return this.input["D§QUA2"] || ""
    }

    getQ3(): string {
        return this.input["D§QUA3"] || ""
    }

    getQ4(): string {
        return this.input["D§QUA4"] || ""
    }

    getQ5(): string {
        return this.input["D§QUA5"] || ""
    }

    getS1(): string {
        return this.input["D§USR1"] || ""
    }

    getS2(): string {
        return this.input["D§USR2"] || ""
    }

    getLUNG(): string {
        return this.getCON_B();
    }

    setCF(cf: string) {
        this.output["D§COEF"] = cf
    }

    setCM(cm: string) {
        this.output["D§COMP"] = cm
    }

    setCON_A(con_a: string) {
        // D§DISE is a 10 chars len
        this.output["D§DISE"] = (con_a.trim().padEnd(4, " ") + (this.output["D§DISE"] || "").substring(4)).padEnd(D_DISE_LEN, " ");
    }

    setCON_B(con_a: string) {
        // D§DISE is a 10 chars len
        this.output["D§DISE"] = ((this.output["D§DISE"] || "").padEnd(4, " ") + con_a.trim()).padEnd(D_DISE_LEN, " ");
    }

    setLG(lg: string) {
        if (lg.trim() === "" || lg === "1") {
            this.output["XFVALI"] = " ";
        }
    }

    setNT(nt: string) {
        this.output["D§NOTA"] = nt
    }

    setQ1(q: string) {
        this.output["D§QUA1"] = q
    }

    setQ2(q: string) {
        this.output["D§QUA2"] = q
    }

    setQ3(q: string) {
        this.output["D§QUA3"] = q
    }

    setQ4(q: string) {
        this.output["D§QUA4"] = q
    }

    setQ5(q: string) {
        this.output["D§QUA5"] = q
    }

    setUSR1(usr: string) {
        this.output["D§USR1"] = usr
    }

    setUSR2(usr: string) {
        this.output["D§USR2"] = usr
    }
}

export { Variables }