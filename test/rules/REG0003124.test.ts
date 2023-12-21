import { RuleVariableMap } from "../../src/types/general";
import { REG0003124 } from "../../src/rules/REG0003124";


describe("REG0003124", () => {
  it(`should output["XFVALI"]' undefined when §L_PORTANTE2 is greater than 0`, () => {
    const input: RuleVariableMap = {
      "§L_PORTANTE2": 1,
    };

    const output = REG0003124(input);

    expect(output["XFVALI"]).toBeUndefined();
  });

  it(`should output["XFVALI"] = '' when §L_PORTANTE2 is less or equals  0`, () => {
    const input: RuleVariableMap = {
      "§L_PORTANTE2": 0,
    };

    const output = REG0003124(input);

    expect(output["XFVALI"]).toBe('');
  });
});