import { RuleConverterAppExamples } from "../../src/converter/app.examples";
import { removeUnnecessaryChars } from "./testutils";
import * as path from 'path';
import * as fs from 'fs';

const allow = (ruleId: string) => ["REG0003124", "REG0003127"].includes(ruleId);
const rootPath = path.resolve(".work", "converted-rules");
const appExamples: RuleConverterAppExamples = new RuleConverterAppExamples(allow, rootPath);

describe("RuleConverterAppExamples", () => {

    beforeAll(async () => {
        await appExamples.convertRules();
    }, 20000); // Increase timeout to 20 seconds

    describe("convertRules", () => {
        it("check REG0003124", async () => {

            expect(loadRulesFromWorkConvertedRules("REG0003124")).toBe(loadRuleFromAssetAsset("REG0003124"))
        });
        it("check REG0003127", async () => {
            expect(loadRulesFromWorkConvertedRules("REG0003127")).toBe(loadRuleFromAssetAsset("REG0003127"))
        });
    });

});

function loadRuleFromAssetAsset(ruleId: string): string {
    const filePath = path.resolve("assets", "test", "converted-rules", `${ruleId}.ts`);
    return removeUnnecessaryChars(fs.readFileSync(filePath, { encoding: "utf-8" }));
}

function loadRulesFromWorkConvertedRules(ruleId: string): string {
    const filePath = path.resolve(".work", "converted-rules", `${ruleId}.ts`);
    return removeUnnecessaryChars(fs.readFileSync(filePath, { encoding: "utf-8" }));
}