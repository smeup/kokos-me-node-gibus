import { RuleVariableMap } from "../../src/types/general";
import { REG0010488_NEW } from "../../src/rules/REG0010488_NEW";
import { loadVariables } from "../../src/converter/utils";

describe("REG0010483 test", () => {

    it("Expected D§DISE=AAFME9", async () => {        

        // define input
        const input: RuleVariableMap = loadVariables(JSON.stringify(require(__dirname + "/REG0010488.1.json")));
        // call function
        const output = await REG0010488_NEW(input);

        // check values
        expect(output["D§DISE"]).toBe('AAFME9');
    });
});


