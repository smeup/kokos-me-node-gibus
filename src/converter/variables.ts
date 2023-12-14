import { RuleVariableMap } from "types/general";


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
        return this.ruleVariableMap["D§NOTA "] || ""
    }

    getQ1(): string {
        return this.ruleVariableMap["D§QUA1 "] || ""
    }

    getQ2(): string {
        return this.ruleVariableMap["D§QUA2 "] || ""
    }

    getQ3(): string {
        return this.ruleVariableMap["D§QUA3 "] || ""
    }

    getQ4(): string {
        return this.ruleVariableMap["D§QUA4 "] || ""
    }

    getQ5(): string {
        return this.ruleVariableMap["D§QUA5 "] || ""
    }

    getS1(): string {
        return this.ruleVariableMap["D§USR1 "] || ""
    }

    getS2(): string {
        return this.ruleVariableMap["D§USR2 "] || ""
    }

    getLUNG(): string {
        return this.getCON_B();
    }
}

export { RuleVariableMap }