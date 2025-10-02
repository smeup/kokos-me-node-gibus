import { RuleVariableMap } from "../../src/types/general";
import { VUOTA } from "../../src/rules/VUOTA";
import * as fs from 'fs';
import { loadVariables } from "../../src/converter/utils";

describe("VUOTA test", () => {
    it("Expected D§DISE=QUALCOSA", async () => {
        // define input
        const input: RuleVariableMap = loadVariables(fs.readFileSync(__dirname + "/VUOTA.1.json", "utf-8"));

        // call function
        const output = await VUOTA(input);

        console.log(output);
        // check values
        expect(output["D§DISE"]).toBe('AAKN8G');
    });
});


