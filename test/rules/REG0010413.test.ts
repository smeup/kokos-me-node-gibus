import { RuleVariableMap } from "../../src/types/general";
import { REG0010413 } from "../../src/rules/REG0010413";

describe("REG0010413 test", () => {
  it("Case 1", async () => {
    // define input
    const input: RuleVariableMap = {};
    // call function
    const output = REG0010413(input);
    // check values
    expect(output["D§COEF"]).toBe(0);
  });
});
