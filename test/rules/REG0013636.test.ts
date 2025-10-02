import { RuleVariableMap } from "../../src/types/general";
import { REG0013636 } from "../../src/rules/REG0013636";
import * as fs from 'fs';
import { loadVariables } from "../../src/converter/utils";

describe("REG0013636 test", () => {
    it("Expected D§DISE=QUALCOSA", async () => {
        // define input
        const input: RuleVariableMap = loadVariables(fs.readFileSync(__dirname + "/REG0013636.1.json", "utf-8"));

        // call function
        const output = await REG0013636(input);

        // check values
        expect(output["D§DISE"]).toBe('P07202935');
    });
});


