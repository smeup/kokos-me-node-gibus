import { RuleVariableMap } from "../../src/types/general";
import { REG0011275_GIB } from "../../src/rules/REG0011275_GIB";
import * as fs from 'fs';
import { loadVariables } from "../../src/converter/utils";

describe("REG0013551 test", () => {
    it("Expected Dise = 'P00003150' & coef = 1", async () => {

        // // define input
        const input: RuleVariableMap = loadVariables(fs.readFileSync(__dirname + "/REG0011275.1.json", "utf-8"));

        // // call function
        const output = REG0011275_GIB(input);
        // // check values

console.log(output['D§COMP']);
        expect(output["D§DISE"]).toBe("P00003150");
        expect(output["D§COEF"]).toBe(1);
    });
});


