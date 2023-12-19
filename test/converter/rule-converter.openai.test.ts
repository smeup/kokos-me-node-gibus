import { OpenAIRuleConverter } from "../../src/converter/rule-converter.openai";
import { Rule, ConversionResult, Condition } from "../../src/converter/types";

if ((process.env.OPENAI_API_KEY || "").length > 0) {
    describe("OpenAIRuleConverter", () => {
        let converter: OpenAIRuleConverter;

        beforeEach(() => {
            converter = new OpenAIRuleConverter();
        });

        describe("convertRule", () => {
            it("should convert rule to text", async () => {
                // define input
                const rule: Rule = {
                    id: "REG0000235",
                    conditions: [
                        {
                            ifCondition: "§NR_SUPP_MURO <= #0",
                            thenCondition: "*SET *LG = ''",
                            elseCondition: "*SET *CF = §NR_SUPP_MURO",
                        },
                    ],
                };

                // call function
                const result: ConversionResult = await converter.convertRule(rule);

                // check values
                expect(result.ruleId).toBe(rule.id);
                const expectedJavaScript = `
    //REG0000235
    if (iv['§NR_SUPP_MURO'] <= 0) {
      vars.setLG('');
    } else {
      vars.setCF(iv['§NR_SUPP_MURO']);
    }`
                expect(result.javaScript.trim()).toContain(expectedJavaScript.trim());
            });
        });

        describe("transformRuleToText", () => {
            it("should transform rule to text", () => {
                // define input
                const rule: Rule = {
                    id: "RULE001",
                    conditions: [
                        {
                            ifCondition: "A > B",
                            thenCondition: "C = D",
                            elseCondition: "C = E",
                        },
                    ],
                };

                // call function
                const result: string = converter.transformRuleToText(rule);

                // check values
                expect(result).toContain("J§REGO");
                expect(result).toContain("J§TRUE");
                expect(result).toContain("J§FALS");
            });
        });

        describe("transformConditionToText", () => {
            it("should transform condition to text", () => {
                // define input
                const condition: Condition = {
                    ifCondition: "A > B",
                    thenCondition: "C = D",
                    elseCondition: "C = E",
                };

                // call function
                const result: string = converter.transformConditionToText(condition);

                // check values
                expect(result).toContain("J§REGO");
                expect(result).toContain("J§TRUE");
                expect(result).toContain("J§FALS");
            });
        });
    });
} else {
    describe("OpenAIRuleConverter", () => {
        it("should skip tests", () => {
            expect(true).toBe(true);
        });
    });
}