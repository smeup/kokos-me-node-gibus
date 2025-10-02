import { RuleVariableMap } from "../../src/types/general";
import { getColPlaTsCas } from "../../src/rules/getColPlaTsCas";
import * as fs from 'fs';
import { loadVariables } from "../../src/converter/utils";

describe("get col pla ts cas test", () => {
    it("Expected VrPlst = 'P065'", async () => {

        // // define input
        const input: RuleVariableMap = loadVariables(fs.readFileSync(__dirname + "/getColPlaTsCas.1.json", "utf-8"));

        // // call function
        const vrPlast = await getColPlaTsCas(input, input.XCONFI);
        // // check values

        expect(vrPlast).toBe("P065");
    });

    it("Expected VrPlst = 'P073'", async () => {

        // // define input
        const input: RuleVariableMap = loadVariables(fs.readFileSync(__dirname + "/getColPlaTsCas.2.json", "utf-8"));

        // // call function
        const vrPlast = await getColPlaTsCas(input, input.XCONFI);
        // // check values

        expect(vrPlast).toBe("P073");
    });
    

});