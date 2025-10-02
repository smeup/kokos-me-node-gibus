import { RuleVariableMap } from "../../src/types/general";
import { REG0011108_NEW } from "../../src/rules/REG0011108_NEW";
import * as fs from 'fs';
import { loadVariables } from "../../src/converter/utils";

describe("REG00111108 test", () => {
    it("Expected Dise = '0466' & coef = 2", async () => {

        // // define input
        const input: RuleVariableMap = loadVariables(fs.readFileSync(__dirname + "/REG0011108.1.json", "utf-8"));

        // // call function
        const output = REG0011108_NEW(input);
        // // check values

        expect(output["D§DISE"]).toBe("0466");
        expect(output["D§COEF"]).toBe(2);
    });
});


