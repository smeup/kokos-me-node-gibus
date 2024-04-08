import { RuleVariableMap } from "../../src/types/general";
import { REG0012781 } from "../../src/rules/REG0012781";
import { loadVariables } from "../../src/converter/utils";
import fs from 'fs';

describe("REG0012781 test", () => {
    

    it("Expected D§USR2: 50000", async () => {
        // define input
        const input: RuleVariableMap = loadVariables(fs.readFileSync(__dirname + "/REG0012781.1.json", "utf-8"));
        // apply rule
        const output = REG0012781(input);
        console.log(output);
        // check 
        expect(output["D§USR2"]).toBe(50000);
    });

    it("Expected D§USR2: 0", async () => {
        // define input
        const input: RuleVariableMap = loadVariables(fs.readFileSync(__dirname + "/REG0012781.2.json", "utf-8"));
        // apply rule
        const output = REG0012781(input);
        console.log(output);
        // check 
        expect(output["D§USR2"]).toBe(0);
    });


});
