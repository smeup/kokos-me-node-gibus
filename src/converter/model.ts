class Rule {
    id: string;
    script: string;

    constructor(id: string, script: string) {
        this.id = id;
        this.script = script;
    }
}


class ConversionResult {
    ruleId: string;
    javaScript: string;

    constructor(ruleId: string, javaScript: string) {
        this.ruleId = ruleId;
        this.javaScript = javaScript;
    }
}

export { Rule, ConversionResult };
