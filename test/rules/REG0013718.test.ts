import { RuleVariableMap } from "../../src/types/general";
import { REG0013718 } from "../../src/rules/REG0013718";
import * as fs from 'fs';
import { loadVariables } from "../../src/converter/utils";

describe("REG0013663 test", () => {
    it("Expected D§DISE=QUALCOSA", async () => {
        // define input
        let fileSync = fs.readFileSync(__dirname + "/REG0013718.1.json", "utf-8")

        const input: RuleVariableMap = loadVariables(fileSync);

        // call function
        const output = await REG0013718(input);

        console.log(output);
        // check values
        expect(output["D§DISE"]).toBe('0000');
    });
});


