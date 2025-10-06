/**
 * This rule represents a template implementation of a rule.
 * It takes an input value and performs some operations on it using the Variables class.
 * The result is returned as the output value.
 * 
 * @param iv The input value for the rule.
 * @returns The output value after applying the rule.
 */
import { Rule } from "../types/general";
import { Variables } from "../converter/variables";

export const REG0011001: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0011001
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET §DUMMYB1 = ''
    // *SET §DUMMYB2 = ''
    // #2
    // THEN:
    // *SET *CF = #0
    // #3
    // COND:
    // §FS_ANG_AN1_ALA = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #4
    // COND:
    // §FS_STA_MUR_ANT1 = §SI
    // THEN:
    // *SET §DUMMYB1 = ''
    // #5
    // COND:
    // §DUMMYB1 = §SI
    // THEN:
    // *SET *CF = #1
    // #6
    // COND:
    // §VER_STA_T01 = '2021'
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setDUMMYB1('');
    vars.setDUMMYB2('');
    //#2
    vars.setCF(0);
    //#3
    if (vars.get('§FS_ANG_AN1_ALA') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    //#4
    if (vars.get('§FS_STA_MUR_ANT1') == vars.get('§SI')) {
        vars.setDUMMYB1('');
    }
    //#5
    if (vars.get('§DUMMYB1') == vars.get('§SI')) {
        vars.setCF(1);
    }
    //#6
    if (vars.get('§VER_STA_T01') == '2021') {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
