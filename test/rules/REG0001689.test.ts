import { RuleVariableMap } from "../../src/types/general";
import { REG0001689 } from "../../src/rules/REG0001689";
import { loadVariables } from "../../src/converter/utils";

describe("REG0001689 test", () => {

    it("Expected D§COEF=0 e XFVALI=", async () => {
        // define input
        const input: RuleVariableMap = loadVariables(JSON.stringify(require(__dirname + "/REG0001689.1.json")));

        // call function
        const output = REG0001689(input);

        // check values
        expect(output["D§COEF"]).toBe(0);
        expect(output["XFVALI"]).toBe("");
    });
});


