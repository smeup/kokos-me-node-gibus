import { RuleVariableMap } from "../../src/types/general";
import { REG0009521 } from "../../src/rules/REG0009521";
import { loadVariables } from "../../src/converter/utils";
import fs from 'fs';

describe("REG0009521 test", () => {

    it("Expected D§COEF: 0", async () => {
        // define input
        const input: RuleVariableMap = loadVariables(fs.readFileSync(__dirname + "/REG0009521.1.json", "utf-8"));
        // apply rule
        const output = REG0009521(input);
        console.log(output);
        // check
        expect(output["D§COEF"]).toBe(0);
        
    });


});
