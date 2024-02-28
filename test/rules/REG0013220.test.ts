import { RuleVariableMap } from "../../src/types/general";
import { REG0013220 } from "../../src/rules/REG0013220";
import * as fs from 'fs';
import { loadVariables } from "../../src/converter/utils";

describe("REG0013220 test", () => {
    it("Expected D§COEF=1", async () => {
        // define input
        const input: RuleVariableMap = loadVariables(fs.readFileSync(__dirname + "/REG0013220.1.json", "utf-8"));

        // call function
        const output = REG0013220(input);

        // check values
        expect(output["D§COEF"]).toBe(1);
    });
});


