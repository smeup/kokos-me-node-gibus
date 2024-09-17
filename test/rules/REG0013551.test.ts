import { RuleVariableMap } from "../../src/types/general";
import { REG0013551_GIB } from "../../src/rules/REG0013551_GIB";
import * as fs from 'fs';
import { loadVariables } from "../../src/converter/utils";

describe("REG0013551 test", () => {
    it("Expected Dise = 'AAKA44' & coef = 1", async () => {

        // // define input
        const input: RuleVariableMap = loadVariables(fs.readFileSync(__dirname + "/REG0013551.1.json", "utf-8"));

        // // call function
        const output = REG0013551_GIB(input);
        // // check values
        expect(output["D§DISE"]).toBe("AAKA44");
        expect(output["D§COEF"]).toBe(1);
    });
});


