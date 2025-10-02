import { RuleVariableMap } from "../../src/types/general";
import { REG0013738 } from "../../src/rules/REG0013738";
import * as fs from 'fs';
import { loadVariables } from "../../src/converter/utils";

describe("REG0013738 test", () => {
    it("Expected D§COEF=6", async () => {
        // define input
        let fileSync = fs.readFileSync(__dirname + "/REG0013738.1.json", "utf-8")

        const input: RuleVariableMap = loadVariables(fileSync);

        // call function
        const output = await REG0013738(input, true);

        console.log(output);
        // check values
        expect(output["D§COEF"]).toBe(6);
    });
});


