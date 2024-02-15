import { RuleVariableMap } from "../../src/types/general";
import { REG0009737 } from "../../src/rules/REG0009737";
import * as fs from 'fs';
import { loadVariables } from "../../src/converter/utils";

describe("REG0009737 test", () => {
    it("Expected D§COEF=0", async () => {
        // define input
        const input: RuleVariableMap = loadVariables(fs.readFileSync(__dirname + "/REG0009737.1.json", "utf-8"));

        // call function
        const output = REG0009737(input);

        // check values
        expect(output["D§COEF"]).toBe(0);
    });
});


