import { RuleVariableMap } from "../../src/types/general";
import { REG0009364 } from "../../src/rules/REG0009364";
import { loadVariables } from "../../src/converter/utils";
import fs from 'fs';

describe("REG0009364 test", () => {

    it("REG0009364 expected D§DISE=012104918AAKA44", async () => {
        // define input
        const input: RuleVariableMap = loadVariables(fs.readFileSync(__dirname + "/REG0009364.1.json", "utf-8"));
        // apply rule
        const output = REG0009364(input);
        // check 
        expect(output["D§DISE"]).toBe("012104918AAKA44")
    });


});
