import { RuleVariableMap } from "../../src/types/general";
import { REG0000738 } from "../../src/rules/REG0000738";
import { loadVariables } from "../../src/converter/utils";

describe("REG0000738 test", () => {

    it("Expected D§DISE=P073", async () => {
        // define input
        const input: RuleVariableMap = loadVariables(JSON.stringify(require(__dirname + "/REG0000738.1.json")));

        // call function
        const output = REG0000738(input);

        // check values
        expect(output["D§DISE"]).toBe("P073");
    });
});


