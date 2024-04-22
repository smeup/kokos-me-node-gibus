import { RuleVariableMap } from "../../src/types/general";
import { REG0010098 } from "../../src/rules/REG0010098";
import { loadVariables } from "../../src/converter/utils";
import fs from 'fs';

const expected =  {
    '*CON-A': 'P072',
    'D§DISE': 'P07200450',
    '*CON-B': 45,
    'D§USR2': 450
  }

describe("REG0010098 test", () => {
    
    it("Expected: " + expected, async () => {
        // define input
        const input: RuleVariableMap = loadVariables(fs.readFileSync(__dirname + "/REG0010098.1.json", "utf-8"));
        // apply rule
        const output = REG0010098(input);
        console.log(output);
        // check 
        expect(output).toStrictEqual(expected);
    });


});
