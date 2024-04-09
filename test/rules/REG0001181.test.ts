import { RuleVariableMap } from "../../src/types/general";
import { REG0001181 } from "../../src/rules/REG0001181";
import { loadVariables } from "../../src/converter/utils";

describe("REG0001181 test", () => {

    it("Expected D§COEF=1", async () => {
        // define input
        const input: RuleVariableMap = loadVariables(JSON.stringify(require(__dirname + "/REG0001181.1.json")));

        // call function
        const output = REG0001181(input);

        // check values
        expect(output["D§COEF"]).toBe(1);
    });
});


