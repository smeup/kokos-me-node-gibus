import { RuleVariableMap } from "../../src/types/general";
import { SETCOLSTR } from "../../src/rules/SETCOLSTR";
import * as fs from 'fs';
import { loadVariables } from "../../src/converter/utils";

describe("SETSL01 test", () => {
    it("Expected Dise = '005106500', coef = 0.5", async () => {

        // // define input
        const input: RuleVariableMap = loadVariables(fs.readFileSync(__dirname + "/SETCOLSTR.1.json", "utf-8"));

        // // call function
        const output = await SETCOLSTR(input);
        // // check values

        expect(output["D§DISE"]).toBe("0076");
    });
    

});