import { RuleVariableMap } from "../../src/types/general";
import { REG0000461 } from "../../src/rules/REG0000461";
import * as fs from 'fs';
import { loadVariables } from "../../src/converter/utils";

describe("REG0000461 test", () => {
    it("Expected D§COEF=11.483000", async () => {
        // define input
        const input: RuleVariableMap = loadVariables(fs.readFileSync(__dirname + "/REG0000461.1.json", "utf-8"));

        // call function
        const output = REG0000461(input);

        // check values
        expect(parseFloat(output["D§COEF"]).toFixed(6)).toBe("11.483000");
    });
});


