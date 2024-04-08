import { RuleVariableMap } from "../../src/types/general";
import { REG0008677 } from "../../src/rules/REG0008677";
import { loadVariables } from "../../src/converter/utils";
import fs from 'fs';

describe("REG0008677 test", () => {
    
    it("Expected D§USR2: 2980", async () => {
        // define input
        const input: RuleVariableMap = loadVariables(fs.readFileSync(__dirname + "/REG0008677.1.json", "utf-8"));
        // apply rule
        const output = REG0008677(input);
        console.log(output)
        // check 
        expect(output["D§USR2"]).toBe(2980);
    });


});
