import { RuleVariableMap } from "../../src/types/general";
import { REG0003127 } from "../../src/rules/REG0003127";


describe("REG0003172", () => {

  it(`§L_PORTANTE2 > 0 && §L_PORTANTE3 == 0 && §FS_FAM2_WALL == §SI`, () => {
    // if ((vars.get('§L_PORTANTE2') > 0) && (vars.get('§L_PORTANTE3') == 0) && (vars.get('§FS_FAM2_WALL') == vars.get('§SI'))) {
    //    vars.setCF(1);
    // }

    const input: RuleVariableMap = {
      "§SI": 0,
      "§L_PORTANTE2": 1,
      "§L_PORTANTE3": 0,
      "§FS_FAM2_WALL": 0,
    };

    const output = REG0003127(input);

    expect(output["D§COEF"]).toBe(1);
  });

  it(`§L_PORTANTE2 > 0 && §L_PORTANTE3 > 0 && §FS_FAM2_WALL == §SI`, () => {
    // if ((vars.get('§L_PORTANTE2') > 0) && (vars.get('§L_PORTANTE3') > 0) && (vars.get('§FS_FAM2_WALL') == vars.get('§SI'))) {
    //   vars.setCF(2);
    // }

    const input: RuleVariableMap = {
      "§SI": 0,
      "§L_PORTANTE2": 1,
      "§L_PORTANTE3": 1,
      "§FS_FAM2_WALL": 0,
    };

    const output = REG0003127(input);

    expect(output["D§COEF"]).toBe(2);
  });

  it(`nothing true`, () => {

    const input: RuleVariableMap = {
    };

    const output = REG0003127(input);

    expect(output["D§COEF"]).toBe(0);
  });

});