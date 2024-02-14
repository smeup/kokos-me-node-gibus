import { removeUnnecessaryChars, convertExampleRule, runFunctionIfOpenAIKeySet, loadVariables } from "../../src/converter/utils.js";
import * as fs from 'fs';
import * as path from 'path';
jest.setTimeout(20000);

describe("removeUnnecessaryChars", () => {
    it("should remove unnecessary characters from code", () => {
        // define input
        const code = `
            // This is a comment
            const a = 5;
            const b = 10;
        `;

        // call function
        const result = removeUnnecessaryChars(code);

        // check values
        expect(result).toBe("const a = 5; const b = 10;");
    });

    it("should remove unnecessary characters and trim whitespace", () => {
        // define input
        const code = `
            // This is a comment
            const a     = 5;
            const b = 10;
        `;

        // call function
        const result = removeUnnecessaryChars(code);

        // check values
        expect(result).toBe("const a = 5; const b = 10;");
    });
});

describe("convertExampleRule", () => {

    it("should convert REG0003124 example rule", async () => {
        await runFunctionIfOpenAIKeySet(async () => {
            // define input
            const ruleId = "REG0003124";
            fs.rmSync(path.resolve(process.cwd(), "src", "rules", `${ruleId}.ts`), { force: true });
            // call function
            const result = await convertExampleRule(ruleId);
            // check values
            expect(result).toBeDefined();
        });
    });
});

describe("loadVariables", () => {
    it("should load variables from funPayload", () => {
        const fun = {
            fun: "fun",
            INPUT: `{"variables": {"var1": "value1", "var2": "value2"}}`
        }
        // define input
        const funPayload = JSON.stringify(fun);

        // call function
        const result = loadVariables(funPayload);

        // check values
        expect(result).toEqual({
            var1: "value1",
            var2: "value2"
        });
    });

    it("should return an empty object if no variables are present", () => {
        // define input
        const fun = {
            fun: "fun"
        }

        const funPayload = JSON.stringify(fun);

        // call function
        const result = loadVariables(funPayload);

        // check values
        expect(result).toEqual({});
    });

    it("should return an empty object if funPayload is empty", () => {
        // define input
        const funPayload = '';

        // call function
        const result = loadVariables(funPayload);

        // check values
        expect(result).toEqual({});
    });
});