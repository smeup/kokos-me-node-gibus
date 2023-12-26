import { REG0010413 } from "../../src/rules/REG0010413";
import { REG0012742 } from "../../src/rules/REG0012742";
import { getRule } from "../../src/services/RULE";

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
});

