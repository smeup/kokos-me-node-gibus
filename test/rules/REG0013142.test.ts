import { RuleVariableMap } from "../../src/types/general";
import { REG0013142 } from "../../src/rules/REG0013142";
import { loadVariables } from "../../src/converter/utils";

describe("REG0013142 test", () => {
    it("Expected D§COEF=1 and d§dise=0055", async () => {
        // define input
        const input: RuleVariableMap = loadVariables(JSON.stringify(require(__dirname + "/REG0013142.1.json")));

        // call function
        const output = REG0013142(input);

        // check values
        //attendiamo ok per capire se l'output deve avere dei default derivanti dall'input
       expect(output["D§COEF"]).toBe(1);
        expect(output["D§DISE"]).toBe("0055");
    });
});


