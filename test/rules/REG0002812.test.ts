import { RuleVariableMap } from "../../src/types/general";
import { REG0002812 } from "../../src/rules/REG0002812";
import { loadVariables } from "../../src/converter/utils";

describe("REG0002812 test", () => {

    it("Expected D§COMP=210332", async () => {
        // define input
        const input: RuleVariableMap = loadVariables(JSON.stringify(require(__dirname + "/REG0002812.1.json")));

        // call function
        const output = REG0002812(input);

        // check values
        expect(output["D§COMP"]).toBe("210332");
    });
});


