import { RuleVariableMap } from "../../src/types/general";
import { SETSL01 } from "../../src/rules/SETSL01";
import * as fs from 'fs';
import { loadVariables } from "../../src/converter/utils";

describe("SETSL01 test", () => {
    it("Expected Dise = '005106500', coef = 0.5", async () => {

        // // define input
        const input: RuleVariableMap = loadVariables(fs.readFileSync(__dirname + "/SETSL01.1.json", "utf-8"));

        // // call function
        const output = await SETSL01(input);
        // // check values

        expect(output["D§DISE"]).toBe("005106500");
        expect(output["D§COEF"]).toBe(0.5);
    });
});