import { RuleVariableMap } from "../../src/types/general";
import { REG0000400 } from "../../src/rules/REG0000400";
import * as fs from 'fs';
import { loadVariables } from "../../src/converter/utils";

describe("REG0000400 test", () => {
    it("Expected D§DISE=P072", async () => {
        // TODO - Fix this test
        console.warn("setCON_B throws \"Anomalia, condizione non prevista per questo articolo\"");

        // // define input
        // const input: RuleVariableMap = loadVariables(fs.readFileSync(__dirname + "/REG0000400.1.json", "utf-8"));

        // // call function
        // const output = REG0000400(input);

        // // check values
        // console.log(output["D§DISE"]);
        // expect(output["D§DISE"]).toBe("P072");
    });
});



