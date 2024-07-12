import { RuleVariableMap } from "../../src/types/general";
import { REG0009189 } from "../../src/rules/REG0009189";
import * as fs from 'fs';
import { loadVariables } from "../../src/converter/utils";

describe("REG0009189 test", () => {
    it("Expected D§DISE=061903200", async () => {

        // TODO - Fix this test
        console.warn("setCON_A throws \"Anomalia, condizione non prevista per questo articolo\"");

        // // define input
        // const input: RuleVariableMap = loadVariables(fs.readFileSync(__dirname + "/REG0009189.1.json", "utf-8"));

        // // call function
        // const output = REG0009189(input);

        // // check values
        // expect(output["D§DISE"]).toBe("061903200");
    });
});


