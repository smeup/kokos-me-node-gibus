import { RuleVariableMap } from "../../src/types/general";
import { TEMPLATE } from "../../src/rules/TEMPLATE";

describe("TEMPLATE test", () => {
    it("Case 1", async () => {
        // define input
        const input: RuleVariableMap = {};
        // set input values for instance §L_PORTANTE2
        // input["§L_PORTANTE2"] = 1;
        // call function
        const output = TEMPLATE(input);
        // check values
        expect(output["D§COEF"]).toBeUndefined();
    });
});
