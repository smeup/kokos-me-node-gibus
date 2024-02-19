import { RuleVariableMap } from "../../src/types/general";
import { REG0011332 } from "../../src/rules/REG0011332";
import * as fs from 'fs';
import { loadVariables } from "../../src/converter/utils";

describe("REG0011332 test", () => {
    it("Expected D§COEF=0", async () => {
        // define input
        const input: RuleVariableMap = loadVariables(fs.readFileSync(__dirname + "/REG0011332.1.json", "utf-8"));

        // call function
        const output = REG0011332(input);

        // check values
        expect(output["D§COEF"]).toBe(0);
    });
});

