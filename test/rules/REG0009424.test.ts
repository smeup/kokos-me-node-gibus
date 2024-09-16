import { RuleVariableMap } from "../../src/types/general";
import { REG0009424 } from "../../src/rules/REG0009424_gib";
import * as fs from 'fs';
import { loadVariables } from "../../src/converter/utils";

describe("REG0009424 test", () => {
    it("Expected *CF=12", async () => {

        // // define input
        const input: RuleVariableMap = loadVariables(fs.readFileSync(__dirname + "/REG0009424.1.json", "utf-8"));

        // // call function
        const output = REG0009424(input);
        // // check values
        expect(output["D§COEF"]).toBe(12);
    });
});


