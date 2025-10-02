import { RuleVariableMap } from "../../src/types/general";
import { REG0005409_NEW } from "../../src/rules/REG0005409_NEW";
import * as fs from 'fs';
import { loadVariables } from "../../src/converter/utils";

describe("REG0005409 test", () => {
    it("Expected coef = 8", async () => {

        // // define input
        const input: RuleVariableMap = loadVariables(fs.readFileSync(__dirname + "/REG0005409.1.json", "utf-8"));

        // // call function
        const output = await REG0005409_NEW(input);
        // // check values

        console.log(output);

        //expect(output["D§DISE"]).toBe("AAKA44");
        expect(output["D§COEF"]).toBe(8);
    });
});


