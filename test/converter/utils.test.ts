import { removeUnnecessaryChars, convertExampleRule} from "../../src/converter/utils.js";
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
        // define input
        const ruleId = "REG0003124";
        fs.rmSync(path.resolve(process.cwd(), "src", "rules", `${ruleId}.ts`), { force: true });
        // call function
        const result = await convertExampleRule(ruleId);
        // check values
        expect(result).toBeDefined();
        // add more assertions as needed
    });
});