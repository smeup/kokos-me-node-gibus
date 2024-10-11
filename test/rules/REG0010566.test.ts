import { RuleVariableMap } from "../../src/types/general";
import { REG0010566_NEW } from "../../src/rules/REG0010566_NEW";
import * as fs from 'fs';
import { loadVariables } from "../../src/converter/utils";

describe("REG0013551 test", () => {
    it("Expected Coef = 2 & cfg = 0051", async () => {

        // // define input
        const input: RuleVariableMap = loadVariables(fs.readFileSync(__dirname + "/REG0010566.1.json", "utf-8"));

        // // call function
        const output = REG0010566_NEW(input);
        // // check values

        expect(output["D§DISE"]).toBe("0051");
        expect(output["D§COEF"]).toBe(2);
    });
});


