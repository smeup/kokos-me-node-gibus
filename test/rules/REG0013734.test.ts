import { RuleVariableMap } from "../../src/types/general";
import { REG0013734 } from "../../src/rules/REG0013734";
import * as fs from 'fs';
import { loadVariables } from "../../src/converter/utils";

describe("REG0013734 test", () => {
    it("Expected D§DISE=QUALCOSA", async () => {
        // define input
        let fileSync = fs.readFileSync(__dirname + "/REG0013734.1.json", "utf-8")

        const input: RuleVariableMap = loadVariables(fileSync);

        // call function
        const output = await REG0013734(input, true);

        console.log(output);
        // check values
        expect(output["D§COEF"]).toBe(0);
    });
});


