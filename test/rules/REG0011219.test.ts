import { RuleVariableMap } from "../../src/types/general";
import { REG0011219_NEW } from "../../src/rules/REG0011219_NEW";
import * as fs from 'fs';
import { loadVariables } from "../../src/converter/utils";

describe("REG0013551 test", () => {
    it("Expected Dise = 'AAFME9' & coef = 1", async () => {

        // // define input
        const input: RuleVariableMap = loadVariables(fs.readFileSync(__dirname + "/REG0011219.1.json", "utf-8"));

        // // call function
        const output = REG0011219_NEW(input);
        // // check values

        expect(output["D§DISE"]).toBe("AAFME9");
        expect(output["D§COEF"]).toBe(1);
        expect(output["XFVALI"]).toBe("1");
    });
});


