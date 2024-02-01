import { RuleConverterAppExamples } from "../../src/converter/app.examples";
import { removeUnnecessaryChars, runFunctionIfOpenAIKeySet } from "../../src/converter/utils";
import * as path from 'path';
import * as fs from 'fs';

const allow = (ruleId: string) => ["REG0003124", "REG0003127", "REG0008660"].includes(ruleId);
const rootPath = path.resolve(".work", "converted-rules");
const appExamples: RuleConverterAppExamples = new RuleConverterAppExamples({ allow: allow, rootPath: rootPath });
let openaiKeySet: boolean = false;

describe("RuleConverterAppExamples", () => {

    beforeAll(async () => {
        await runFunctionIfOpenAIKeySet(async () => {
            openaiKeySet = true;
            await appExamples.convertRules();
        });
    }, 60000); // Increase timeout to 60000 seconds

    describe("check if rule loaded from assets is equals to rule converted", () => {
        it("REG0003124", async () => {
            if (openaiKeySet) {
                expect(loadRulesFromWorkConvertedRules("REG0003124")).toBe(loadRuleFromAsset("REG0003124"))
            }
        });
        it("REG0003127", async () => {
            if (openaiKeySet) {
                expect(loadRulesFromWorkConvertedRules("REG0003127")).toBe(loadRuleFromAsset("REG0003127"))
            }
        });
        it("REG0008660", async () => {
            if (openaiKeySet) {
                expect(loadRulesFromWorkConvertedRules("REG0008660")).toBe(loadRuleFromAsset("REG0008660"))
            }
        });
    });

});

function loadRuleFromAsset(ruleId: string): string {
    const filePath = path.resolve("assets", "test", "converted-rules", `${ruleId}.ts`);
    return removeUnnecessaryChars(fs.readFileSync(filePath, { encoding: "utf-8" }));
}

function loadRulesFromWorkConvertedRules(ruleId: string): string {
    const filePath = path.resolve(".work", "converted-rules", `${ruleId}.ts`);
    return removeUnnecessaryChars(fs.readFileSync(filePath, { encoding: "utf-8" }));
}