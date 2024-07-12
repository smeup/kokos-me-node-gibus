import { RuleVariableMap } from "../../src/types/general";
import { TEMPLATE } from "../../src/rules/TEMPLATE";
import { loadVariables } from "../../src/converter/utils";
import fs from 'fs';

describe("TEMPLATE test", () => {
    
    it("Feed input programmatically - Expected D§DISE: undefined ", async () => {
        // define input
        const input: RuleVariableMap = {};
        input["§L_PORTANTE2"] = 1;
        // apply rule
        const output = TEMPLATE(input);
        // check 
        expect(output["D§DISE"]).toBe(undefined);
    });

    it("Feed input by payload - Expected D§DISE: undefined ", async () => {
        // define input
        const input: RuleVariableMap = loadVariables(fs.readFileSync(__dirname + "/TEMPLATE.1.json", "utf-8"));
        // apply rule
        const output = TEMPLATE(input);
        // check 
        expect(output["D§DISE"]).toBe(undefined)
    });


});
