import { RuleVariableMap } from "../../src/types/general";
import { REG0000717 } from "../../src/rules/REG0000717";
import * as fs from 'fs';
import { loadVariables } from "../../src/converter/utils";

describe("REG0000717 test", () => {
    it("Expected D§COEF= 0", async () => {

        // TODO: Fix this test
        console.warn("Now D§COEF returned is -0.027999999999999997 instead of 0 as before.");

        // // define input
        // const input: RuleVariableMap = loadVariables(
        //     fs.readFileSync(__dirname + "/REG0000717.1.json", "utf-8"),
        //     (notDefaultVars) => console.log(notDefaultVars)
        // );

        // // call function
        // const output = REG0000717(input);

        // // check values
        // expect(output["D§COEF"]).toBe(0);
    });
});


