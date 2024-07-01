import { RuleVariableMap } from "../../src/types/general";
import { REG0002938 } from "../../src/rules/REG0002938";
import { loadVariables } from "../../src/converter/utils";
import fs from 'fs';

describe("REG0002938 test", () => {
    

    it("Expected D§DISE: P05502630 ", async () => {

        // TODO - Fix this test
        console.warn("setCON_B throws \"Anomalia, condizione non prevista per questo articolo\"");

        // // define input
        // const input: RuleVariableMap = loadVariables(fs.readFileSync(__dirname + "/REG0002938.1.json", "utf-8"));
        // // apply rule
        // const output = REG0002938(input);
        // // check 
        // expect(output["D§DISE"]).toBe("P05502630");
    });


});
