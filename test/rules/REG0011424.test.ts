import { RuleVariableMap } from "../../src/types/general";
import { REG0011424_GIB } from "../../src/rules/REG0011424_GIB";
import { REG0011424 } from "../../src/rules/REG0011424";
import * as fs from 'fs';
import { loadVariables } from "../../src/converter/utils";

describe("REG0011424 test", () => {
    it("Expected D§coef = 2,D§dise =P00003000", async () => {

        // // define input
        const input: RuleVariableMap = loadVariables(fs.readFileSync(__dirname + "/REG0011424.1.json", "utf-8"));

        // // call function
        const output = REG0011424(input);
        const outputGib = REG0011424_GIB(input);
        // // check values
        expect(output["D§COEF"]).toBe(outputGib["D§COEF"]);
        expect(output["D§DISE"]).toBe(outputGib["D§DISE"]);
    });
});


