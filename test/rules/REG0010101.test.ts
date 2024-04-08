import { RuleVariableMap } from "../../src/types/general";
import { REG0010101 } from "../../src/rules/REG0010101";
import { loadVariables } from "../../src/converter/utils";
import fs from 'fs';



describe("REG0010101 test", () => {
    
    it("Expected D§USR2: 450", async () => {
        // define input
        const input: RuleVariableMap = loadVariables(fs.readFileSync(__dirname + "/REG0010101.1.json", "utf-8"));
        // apply rule
        const output = REG0010101(input);
        console.log(output);
        // check 
        expect(output["D§USR2"]).toBe(450);
    });


});
