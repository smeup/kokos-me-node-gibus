import { RuleVariableMap } from "../../src/types/general";
import { REG0008918 } from "../../src/rules/REG0008918";
import * as fs from 'fs';
import { loadVariables } from "../../src/converter/utils";

describe("REG0008918 test", () => {
    it("Expected D§COEF=3.2", async () => {
        // define input
        const input: RuleVariableMap = loadVariables(fs.readFileSync(__dirname + "/REG0013220.1.json", "utf-8"));

        // call function
        const output = REG0008918(input);

        // check values
        expect(output["D§COEF"]).toBe(3.2);
    });
});


