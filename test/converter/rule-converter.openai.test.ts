import { OpenAIRuleConverter } from "../../src/converter/rule-converter.openai";
import { Rule, ConversionResult, Condition } from "../../src/converter/types";


describe("OpenAIRuleConverter", () => {
    let converter: OpenAIRuleConverter;

    beforeEach(() => {
        converter = new OpenAIRuleConverter();
    });

    if ((process.env.OPENAI_API_KEY || "").length > 0) {
        describe("convertRule", () => {
            it("should convert rule to text", async () => {
                jest.setTimeout(10000);
                // define input
                const rule: Rule = {
                    id: "REGTEST",
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
                    // RULE: REGTEST
                    // REQUEST:
                    // """
                    // #1
                    // COND:
                    // §NR_SUPP_MURO <= #0
                    // THEN:
                    // *SET *LG = ''
                    // ELSE:
                    // *SET *CF = §NR_SUPP_MURO
                    // """
                    // RESPONSE:
                    //#1
                    if (iv['§NR_SUPP_MURO'] <= 0) {
                        vars.setLG('');
                    } else {
                        vars.setCF(iv['§NR_SUPP_MURO']);
                    }
                    `
                expect(result.javaScript.replace(/\s+/g, '')).toContain(expectedJavaScript.replace(/\s+/g, ''));
            });
        });
    } else {
        console.warn("Skipping OpenAI tests because OPENAI_API_KEY is not set.");
    }

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
            expect(result).toContain("\n#1\nCOND:");
            expect(result).toContain("THEN:");
            expect(result).toContain("ELSE:");
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
            expect(result).toContain("COND:");
            expect(result).toContain("THEN:");
            expect(result).toContain("ELSE:");
        });
    });
});
