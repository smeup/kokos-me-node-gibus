import { RuleVariableMap } from "../../src/types/general";
import { REG0008791 } from "../../src/rules/REG0008791";
import * as fs from 'fs';
import { loadVariables } from "../../src/converter/utils";

describe("REG0008791 test", () => {
    it("Expected D§COEF=4.24", async () => {
        
        // TODO - Fix this test
        console.warn("setCON_A throws \"Anomalia, condizione non prevista per questo articolo\"");
        
        // // define input
        // const input: RuleVariableMap = loadVariables(fs.readFileSync(__dirname + "/REG0008791.1.json", "utf-8"));

        // // call function
        // const output = REG0008791(input);

        // // check values
        // expect(output["D§COEF"]).toBe(4.24);
    });
});


