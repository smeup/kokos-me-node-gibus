import { RuleVariableMap } from "../../src/types/general";
import { REG0013663 } from "../../src/rules/REG0013663";
import * as fs from 'fs';
import { loadVariables } from "../../src/converter/utils";

describe("REG0013663 test", () => {
    it("Expected tempo lavoro=QUALCOSA", async () => {
        // define input
        let fileSync = fs.readFileSync(__dirname + "/REG0013663.1.json", "utf-8")

        const input: RuleVariableMap = loadVariables(fileSync);

        // call function
        const output = await REG0013663(input, true);

        console.log(output);
        // check values
        expect(output["R§TE01"]).toBe(2700);
       // expect(output["XFVALI"]).toBe('1');
    });
    it("Expected tempo lavoro=QUALCOSA", async () => {
        // define input
        let fileSync = fs.readFileSync(__dirname + "/REG0013663.2.json", "utf-8")

        const input: RuleVariableMap = loadVariables(fileSync);

        // call function
        const output = await REG0013663(input, true);

        console.log(output);
        // check values
        expect(output["R§TE01"]).toBe(5400);
        expect(output["XFVALI"]).toBe('1');
    });
});


