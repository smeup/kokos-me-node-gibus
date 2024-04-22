import { RuleVariableMap } from "../../src/types/general";
import { REG0008606 } from "../../src/rules/REG0008606";
<<<<<<< HEAD
import * as fs from 'fs';
import { loadVariables } from "../../src/converter/utils";

describe("REG0008606 test", () => {
    it("Expected D§COEF=1", async () => {
        // define input
        const input: RuleVariableMap = loadVariables(fs.readFileSync(__dirname + "/REG0008606.1.json", "utf-8"));

        // call function
        const output = REG0008606(input);

        // check values
        expect(output["D§COEF"]).toBe(1);
    });
});


=======
import { loadVariables } from "../../src/converter/utils";
import fs from 'fs';

describe("REG0008606 test", () => {

    it("Expected { 'D§COEF': 1, '*CON-A': 'P073', 'D§DISE': 'P073' } ", async () => {
        // define input
        const input: RuleVariableMap = loadVariables(fs.readFileSync(__dirname + "/REG0008606.1.json", "utf-8"));
        // apply rule
        const output = REG0008606(input);

        const expected = { 'D§COEF': 1, '*CON-A': 'P073', 'D§DISE': 'P073' }
        console.log(output);
        // check 
        expect(output).toStrictEqual(expected);
    });


});
>>>>>>> feat/massive_conversion
