/**
 * This rule represents a template implementation of a rule.
 * It takes an input value and performs some operations on it using the Variables class.
 * The result is returned as the output value.
 * 
 * @param iv The input value for the rule.
 * @returns The output value after applying the rule.
 */
import { Rule } from "../types/general.js";
import { Variables } from "../converter/variables.js";

export const REG0010998: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0010998
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET §DUMMYB1 = ''
    // *SET §DUMMYB2 = ''
    // #2
    // THEN:
    // *SET *CF = #1
    // #3
    // COND:
    // §FS_ANG_AN2_ALA = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #4
    // COND:
    // §FS_ANG_AN2_AFR = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #5
    // COND:
    // §FS_STA_MUR_ANT2 = §SI AND §VER_STA_T01 <> '2021'
    // THEN:
    // *SET §DUMMYB1 = ''
    // #6
    // COND:
    // §DUMMYB1 = §SI
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setDUMMYB1('');
    vars.setDUMMYB2('');
    //#2
    vars.setCF(1);
    //#3
    if (vars.get('§FS_ANG_AN2_ALA') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    //#4
    if (vars.get('§FS_ANG_AN2_AFR') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    //#5
    if (vars.get('§FS_STA_MUR_ANT2') == vars.get('§SI') && vars.get('§VER_STA_T01') != '2021') {
        vars.setDUMMYB1('');
    }
    //#6
    if (vars.get('§DUMMYB1') == vars.get('§SI')) {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
