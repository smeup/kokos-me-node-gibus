import { RuleVariableMap } from "../../src/types/general";
import { REG0009424 } from "../../src/rules/REG0009424";
import { loadVariables } from "../../src/converter/utils";
import fs from 'fs';

describe("REG0009424 test", () => {
    
    // TODO: Add description for the test case
    it("REG0009424", async () => {
        // define input
        const input: RuleVariableMap = loadVariables(fs.readFileSync(__dirname + "/REG0009424.1.json", "utf-8"));
        // apply rule
        const output = REG0009424(input);
        // check 
        expect(output["D§COEF"]).toBe(12)
    });


});
