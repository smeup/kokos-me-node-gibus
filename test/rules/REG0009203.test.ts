import { RuleVariableMap } from "../../src/types/general";
import { REG0009203 } from "../../src/rules/REG0009203";
import { loadVariables } from "../../src/converter/utils";
import fs from 'fs';

describe("REG0009203 test", () => {

    it("Expected D§USR2: 0", async () => {
        // define input
        const input: RuleVariableMap = loadVariables(fs.readFileSync(__dirname + "/REG0009203.1.json", "utf-8"));
        // apply rule
        const output = REG0009203(input);
        console.log(output);
        // check 
        expect(output["D§USR2"]).toBe(0);
    });

});
