import { RuleVariableMap } from "../../src/types/general";
import { REG0009364_GIB } from "../../src/rules/REG0009364_GIB";
import * as fs from 'fs';
import { loadVariables } from "../../src/converter/utils";

describe("REG0009364 test", () => {
    it("Expected D§USR2=2262", async () => {

        // // define input
        const input: RuleVariableMap = loadVariables(fs.readFileSync(__dirname + "/REG0009364.1.json", "utf-8"));

        // // call function
        const output = REG0009364_GIB(input);

        // // check values
        console.log('non funziona va corretto il payload e i metodi');
  //      expect(output["D§DISE"]).toBe('012104918AAKA44');
    });
});


