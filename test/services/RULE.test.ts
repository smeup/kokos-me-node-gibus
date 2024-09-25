import { REG0010413 } from "../../src/rules/REG0010413";
import { REG0012742 } from "../../src/rules/REG0012742";
import { asyncLocalStorage, getRule, processRule } from "../../src/services/RULE.js";
import { RuleVariableMap } from "../../src/types/general"; 'async_hooks'

describe("getRule", () => {
    it(`REG0010413 is present in RULE_MAPPING`, async () => {
        process.env.NODE_ENV = "production";
        const rule = await getRule("REG0010413");
        expect(rule).toBe(REG0010413)
    });

    it(`REG0012742 is loaded from ./rules path`, async () => {
        process.env.NODE_ENV = "test";
        const rule = await getRule("REG0012742");
        expect(rule).toBe(REG0012742)
    });

    it(`Non-existent rule should return a default rule implementation`, async () => {
        // I try both production and test environment because the rule loading is a little bit different
        process.env.NODE_ENV = "production";
        const defaultRuleProd = await getRule("NON_EXISTENT_RULE");
        expect(defaultRuleProd).toBeDefined();
        process.env.NODE_ENV = "test";
        const defaultRuleTest = await getRule("NON_EXISTENT_RULE");
        expect(defaultRuleTest).toBeDefined();
    });


    it(`Default rule implementation - If payload contains §_CF, D§COEF == §_CF`, async () => {
        const store = new Map<string, any>();
        asyncLocalStorage.run(store, async () => {
            const defaultRule = await getRule("TEST_CALLBACK");
            const expected = 1;
            const input: RuleVariableMap = { "§_CF": expected };
            const output = processRule("TEST_CALLBACK", defaultRule, input);
            expect(output["D§COEF"]).toEqual(expected);
        });
    });

    it(`Default rule implementation - If payload does not contain, §_CF D§COEF == 0`, async () => {
        const store = new Map<string, any>();
        asyncLocalStorage.run(store, async () => {
            const defaultRule = await getRule("TEST_CALLBACK");
            const input: RuleVariableMap = {};
            const output = processRule("TEST_CALLBACK", defaultRule, input);
            expect(output["D§COEF"]).toEqual(0);
        });
    });

});
