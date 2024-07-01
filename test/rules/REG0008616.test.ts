import { RuleVariableMap } from "../../src/types/general";
import { REG0008616 } from "../../src/rules/REG0008616";
import * as fs from 'fs';
import { loadVariables } from "../../src/converter/utils";

describe("REG0008616 test", () => {
    it("Expected D§COEF=1", async () => {
        // define input
        const input: RuleVariableMap = loadVariables(fs.readFileSync(__dirname + "/REG0008616.1.json", "utf-8"));

        // call function
        const output = REG0008616(input);

        // check values
        expect(output["D§COEF"]).toBe(1);
    });
});


