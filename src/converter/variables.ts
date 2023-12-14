import { RuleVariableMap } from "types/general";

const D_DISE_LEN = 10

class InputVariable {
    ruleVariableMap: RuleVariableMap;


    constructor(ruleVariableMap: RuleVariableMap) {
        this.ruleVariableMap = ruleVariableMap
    }

    getCF(): string {
        return "1";
    }

    getCM(): string {
        return this.ruleVariableMap["D§COMP"]
    }

    getCOL(): string {
        const xconfi = this.ruleVariableMap["XCONFI"] || "";
        const firstFourChars = xconfi.substring(0, 4).trim().padEnd(4, " ");
        return firstFourChars;
    }

    getCON_A(): string {
        return this.getCOL()
    }

    getCON_B(): string {
        const xconfi = this.ruleVariableMap["XCONFI"] || "";
        const firstFourChars = xconfi.substring(4, 9).trim().padEnd(5, " ");
        return firstFourChars;
    }

    getLG(): string {
        return "";
    }

    getNT(): string {
        return this.ruleVariableMap["D§NOTA"] || ""
    }

    getQ1(): string {
        return this.ruleVariableMap["D§QUA1"] || ""
    }

    getQ2(): string {
        return this.ruleVariableMap["D§QUA2"] || ""
    }

    getQ3(): string {
        return this.ruleVariableMap["D§QUA3"] || ""
    }

    getQ4(): string {
        return this.ruleVariableMap["D§QUA4"] || ""
    }

    getQ5(): string {
        return this.ruleVariableMap["D§QUA5"] || ""
    }

    getS1(): string {
        return this.ruleVariableMap["D§USR1"] || ""
    }

    getS2(): string {
        return this.ruleVariableMap["D§USR2"] || ""
    }

    getLUNG(): string {
        return this.getCON_B();
    }
}

class OutputVariable {

    variables: RuleVariableMap = {};

    setCF(cf: string) {
        this.variables["D§COEF"] = cf
    }

    setCM(cm: string) {
        this.variables["D§COMP"] = cm
    }

    setCON_A(con_a: string) {
        // D§DISE is a 10 chars len
        this.variables["D§DISE"] = (con_a.trim().padEnd(4, " ") + (this.variables["D§DISE"] || "").substring(4)).padEnd(D_DISE_LEN, " ");
    }

    setCON_B(con_a: string) {
        // D§DISE is a 10 chars len
        this.variables["D§DISE"] = ((this.variables["D§DISE"] || "").padEnd(4, " ") + con_a.trim()).padEnd(D_DISE_LEN, " ");
    }

    setLG(lg: string) {
        if (lg.trim() === "" || lg === "1") {
            this.variables["XFVALI"] = " ";
        }
    }

    setNT(nt: string) {
        this.variables["D§NOTA"] = nt
    }

    setQ1(q: string) {
        this.variables["D§QUA1"] = q
    }

    setQ2(q: string) {
        this.variables["D§QUA2"] = q
    }

    setQ3(q: string) {
        this.variables["D§QUA3"] = q
    }

    setQ4(q: string) {
        this.variables["D§QUA4"] = q
    }

    setQ5(q: string) {
        this.variables["D§QUA5"] = q
    }

    setUSR1(usr: string) {
        this.variables["D§USR1"] = usr
    }

    setUSR2(usr: string) {
        this.variables["D§USR2"] = usr
    }

}

export { InputVariable, OutputVariable }