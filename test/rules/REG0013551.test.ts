import { RuleVariableMap } from "../../src/types/general";
import { REG0013551 } from "../../src/rules/REG0013551_gib";
import * as fs from 'fs';
import { loadVariables } from "../../src/converter/utils";

describe("REG0009424 test", () => {
    it("Expected Dise = 'AAKA44' & coef = 1", async () => {

        // // define input
        const input: RuleVariableMap = loadVariables(fs.readFileSync(__dirname + "/REG0013551.1.json", "utf-8"));

        // // call function
        const output = REG0013551(input);
        // // check values
        expect(output["D§DISE"]).toBe("AAKA44");
        expect(output["D§COEF"]).toBe(1);
    });
});


