import { RuleVariableMap } from "../../src/types/general";
import { REG0009916 } from "../../src/rules/REG0009916";
import * as fs from 'fs';
import { loadVariables } from "../../src/converter/utils";

describe("REG0009916 test", () => {
    it("Expected D§COEF= -0.014", async () => {
        // define input
        const input: RuleVariableMap = loadVariables(
            fs.readFileSync(__dirname + "/REG0009916.1.json", "utf-8"),
            (notDefaultVars) => console.log(notDefaultVars)
        );

        // call function
        const output = REG0009916(input);

        // check values
        expect(output["D§COEF"].toFixed(3)).toBe("-0.014");
    });
});


