import { RuleVariableMap } from "../../src/types/general";
import { REG0013660 } from "../../src/rules/REG0013660";
import * as fs from 'fs';
import { loadVariables } from "../../src/converter/utils";

describe("REG0013660 test", () => {
    it("Expected D§DISE=QUALCOSA", async () => {
        // define input
        const input: RuleVariableMap = loadVariables(fs.readFileSync(__dirname + "/REG0013660.1.json", "utf-8"));

        // call function
        const output = await REG0013660(input);

        console.log(output);
        // check values
        expect(output["D§COEF"]).toBe(2);
    });
});


