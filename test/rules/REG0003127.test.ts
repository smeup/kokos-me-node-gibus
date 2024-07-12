/**
 * This file tests a rule converted from openapi.
 */
import { Rule, RuleVariableMap } from "../../src/types/general";
import * as utils from "../../src/converter/utils";


let rule: Rule;

beforeAll(async () => {
  await utils.runFunctionIfOpenAIKeySet(async () => {
    rule = await utils.convertExampleRule("REG0003127");
  });
}, 20000);


describe("REG0003172", () => {

  it(`§L_PORTANTE2 > 0 && §L_PORTANTE3 == 0 && §FS_FAM2_WALL == §SI`, () => {
    // if ((vars.get('§L_PORTANTE2') > 0) && (vars.get('§L_PORTANTE3') == 0) && (vars.get('§FS_FAM2_WALL') == vars.get('§SI'))) {
    //    vars.setCF(1);
    // }
    if (utils.isOpenAIKeySet()) {
      const input: RuleVariableMap = {
        "§SI": 0,
        "§L_PORTANTE2": 1,
        "§L_PORTANTE3": 0,
        "§FS_FAM2_WALL": 0,
        "D§COEF": 10
      };

      const output = rule(input);

      expect(output["D§COEF"]).toBe(10);
    }
  });

  it(`§L_PORTANTE2 > 0 && §L_PORTANTE3 > 0 && §FS_FAM2_WALL == §SI`, () => {
    // if ((vars.get('§L_PORTANTE2') > 0) && (vars.get('§L_PORTANTE3') > 0) && (vars.get('§FS_FAM2_WALL') == vars.get('§SI'))) {
    //   vars.setCF(2);
    // }
    if (utils.isOpenAIKeySet()) {
      const input: RuleVariableMap = {
        "§SI": 0,
        "§L_PORTANTE2": 1,
        "§L_PORTANTE3": 1,
        "§FS_FAM2_WALL": 0,
        "D§COEF": 10
      };

      const output = rule(input);

      expect(output["D§COEF"]).toBe(20);
    }
  });

  it(`nothing true`, () => {
    if (utils.isOpenAIKeySet()) {
      const input: RuleVariableMap = {
        "D§COEF": 10
      };

      const output = rule(input);

      expect(output["D§COEF"]).toBe(0);
    }
  });

});