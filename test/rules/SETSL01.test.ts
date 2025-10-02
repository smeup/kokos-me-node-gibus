import { RuleVariableMap } from "../../src/types/general";
import { SETSL01 } from "../../src/rules/SETSL01";
import * as fs from 'fs';
import { loadVariables } from "../../src/converter/utils";

describe("SETSL01 test", () => {
    it("Expected Dise = '005106500', coef = 0.5", async () => {

        // // define input
        const input: RuleVariableMap = loadVariables(fs.readFileSync(__dirname + "/SETSL01.1.json", "utf-8"));

        // // call function
        const output = await SETSL01(input, true);
        // // check values

        expect(output["D§DISE"]).toBe("005106500");
        expect(output["D§COEF"]).toBe(0.5);
    });
    
    //questo test opta un colore diverso rispetto al precedente, sarebbe meglio trovare un test
    //con coefficiente diverso
    it("Expected Dise = '006906500', coef = 0.5", async () => {

        // // define input
        const input: RuleVariableMap = loadVariables(fs.readFileSync(__dirname + "/SETSL01.2.json", "utf-8"));

        // // call function
        const output = await SETSL01(input, true);
        // // check values

        expect(output["D§DISE"]).toBe("006906500");
        expect(output["D§COEF"]).toBe(0.5);
    });

    it("Expected Dise = '006906500', coef = 0.1666", async () => {

        // // define input
        const input: RuleVariableMap = loadVariables(fs.readFileSync(__dirname + "/SETSL01.3.json", "utf-8"));

        // // call function
        const output = await SETSL01(input, true);
        // // check values

        expect(output["D§DISE"]).toBe("006906500");
        expect(Math.trunc(output["D§COEF"]*10000) / 10000).toBe(0.1666);
    });


});