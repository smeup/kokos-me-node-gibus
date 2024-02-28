import { RuleVariableMap } from "../../src/types/general";
import { REG0009374 } from "../../src/rules/REG0009374";
import * as fs from 'fs';
import { loadVariables } from "../../src/converter/utils";

describe("REG0009374 test", () => {
    it("Expected D§USR2=2262", async () => {
        // define input
        const input: RuleVariableMap = loadVariables(fs.readFileSync(__dirname + "/REG0009374.1.json", "utf-8"));

        // call function
        const output = REG0009374(input);

        // check values
        expect(output["D§USR2"]).toBe(2262);
    });
});


