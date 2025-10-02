import { RuleVariableMap } from "../../src/types/general";
import { REG0013635 } from "../../src/rules/REG0013635";
import * as fs from 'fs';
import { loadVariables } from "../../src/converter/utils";

describe("REG0013635 test", () => {
    it("Expected D§DISE=QUALCOSA", async () => {
        // define input
        const input: RuleVariableMap = loadVariables(fs.readFileSync(__dirname + "/REG0013635.1.json", "utf-8"));

        // call function
        const output = await REG0013635(input);

        // check values
        expect(output["D§DISE"]).toBe('P07202935');
    });
});


describe("REG0013635 test", () => {
    it("Expected XFVALI = '', D§COEF = 0", async () => {
        // define input
        const input: RuleVariableMap = loadVariables(fs.readFileSync(__dirname + "/REG0013635.2.json", "utf-8"));

        // call function
        const output = await REG0013635(input);

        // check values
        expect(output["D§COEF"]).toBe(0);
        expect(output["XFVALI"]).toBe('');
    });
});


