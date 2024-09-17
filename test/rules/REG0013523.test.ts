import { RuleVariableMap } from "../../src/types/general";
import { REG0013523_GIB } from "../../src/rules/REG0013523_GIB";
import * as fs from 'fs';
import { loadVariables } from "../../src/converter/utils";

describe("REG0013523 test", () => {
    it("Expected Dise = '0103'", async () => {

        // // define input
        const input: RuleVariableMap = loadVariables(fs.readFileSync(__dirname + "/REG0013523.1.json", "utf-8"));

        // // call function
        const output = REG0013523_GIB(input);
        // // check values
        expect(output["D§DISE"]).toBe("0103");
    });
});


