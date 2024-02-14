import { RuleVariableMap } from "../../src/types/general";
import { REG0009902 } from "../../src/rules/REG0009902";
import * as fs from 'fs';
import { loadVariables } from "../../src/converter/utils";

describe("REG0009902 test", () => {
    it("Expected D§COEF=6", async () => {
        // define input
        const input: RuleVariableMap = loadVariables(fs.readFileSync(__dirname + "/REG0009902.1.json", "utf-8"));

        // call function
        const output = REG0009902(input);

        // check values
        expect((output["D§COEF"])).toBe(6);
    });
});
