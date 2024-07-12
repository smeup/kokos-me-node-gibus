import { RuleVariableMap } from "../../src/types/general";
import { REG0011347 } from "../../src/rules/REG0011347";
import * as fs from 'fs';
import { loadVariables } from "../../src/converter/utils";

describe("REG0011347 test", () => {
    it("Expected D§COEF=2.5", async () => {
        // define input
        const input: RuleVariableMap = loadVariables(fs.readFileSync(__dirname + "/REG0011347.1.json", "utf-8"));

        // call function
        const output = REG0011347(input);

        // check values
        expect(output["D§COEF"]).toBe(2.5);
    });
});


