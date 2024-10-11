import { RuleVariableMap } from "../../src/types/general";
import { REG0010493_NEW } from "../../src/rules/REG0010493_NEW";
import { loadVariables } from "../../src/converter/utils";

describe("REG0010493_NEW test", () => {

    it("Expected D§DISE=006901417AAFME9 D§COEF = 2", async () => {
        // define input
        const input: RuleVariableMap = loadVariables(JSON.stringify(require(__dirname + "/REG0010493.1.json")));

        // call function
        const output = REG0010493_NEW(input);

        // check values
        expect(output["D§DISE"]).toBe("006901417AAFME9");
        expect(output["D§COEF"]).toBe(2);
    });
});


