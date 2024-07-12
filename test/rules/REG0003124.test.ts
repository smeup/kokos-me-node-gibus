/**
 * This file tests a rule converted from openapi.
 */
import { Rule, RuleVariableMap } from "../../src/types/general";
import * as utils from "../../src/converter/utils";

let rule: Rule

beforeAll(async () => {
  await utils.runFunctionIfOpenAIKeySet(async () => {
    rule = await utils.convertExampleRule("REG0003124");
  });
}, 20000);

describe("REG0003124", () => {
  it(`should output["XFVALI"]' undefined when §L_PORTANTE2 is greater than 0`, () => {
    if (utils.isOpenAIKeySet()) {
      const input: RuleVariableMap = {
        "§L_PORTANTE2": 1,
      };

      const output = rule(input);

      expect(output["XFVALI"]).toBe(undefined);
    }
  });

  it(`should output["XFVALI"] = '' when §L_PORTANTE2 is less or equals  0`, () => {
    if (utils.isOpenAIKeySet()) {
      const input: RuleVariableMap = {
        "§L_PORTANTE2": 0,
      };

      const output = rule(input);

      expect(output["XFVALI"]).toBe('');
    }
  });
});