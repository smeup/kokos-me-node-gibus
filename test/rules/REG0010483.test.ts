import { RuleVariableMap } from "../../src/types/general";
import { REG0010483_NEW } from "../../src/rules/REG0010483_NEW";
import { loadVariables } from "../../src/converter/utils";

describe("REG0010483 test", () => {

    it("Expected D§DISE=005102498AAFME9", async () => {        

        // define input
        const input: RuleVariableMap = loadVariables(JSON.stringify(require(__dirname + "/REG0010483.1.json")));
        // call function
        const output = await REG0010483_NEW(input);

        // check values
        expect(output["D§DISE"]).toBe('005102498AAFME9');
    });
});


