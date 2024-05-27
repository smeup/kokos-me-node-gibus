import { RuleVariableMap } from "../../src/types/general";
import { REG0010084 } from "../../src/rules/REG0010084";
import { loadVariables } from "../../src/converter/utils";

describe("REG0010084 test", () => {
  it("Case 1", async () => {
    // define input
    const input =  loadVariables(JSON.stringify(require(__dirname + "/REG0010084.1.json")));

    // call function
    const output = REG0010084(input);
    // check values
    expect(output["D§COEF"]).toBe(1);
    //expect(output["D§DISE"]).toBe("P07202985AAJI05");
  });
});
