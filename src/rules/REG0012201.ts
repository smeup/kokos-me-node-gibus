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

export const REG0012201: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0012201
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = 0
    // *SET §DUMMYB1 = ''
    // *SET §DUMMYB2 = ''
    // #2
    // COND:
    // §FS_FAM2_ZENIT = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #3
    // COND:
    // §FS_ANG_PO2_ALA = §SI AND §FS_STA_MUR_POS2 <> §SI
    // THEN:
    // *SET §DUMMYB2 = §SI
    // #4
    // COND:
    // §LA_COM = 'POS'
    // THEN:
    // *SET §DUMMYB2 = ''
    // #5
    // COND:
    // §DUMMYB1 = §SI AND §DUMMYB2 = §SI
    // THEN:
    // *SET *CF = #1
    // #6
    // COND:
    // §VER_STA_T01 = '2021'
    // ELSE:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setDUMMYB1('');
    vars.setDUMMYB2('');
    //#2
    if (vars.get('§FS_FAM2_ZENIT') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    //#3
    if (vars.get('§FS_ANG_PO2_ALA') == vars.get('§SI') && vars.get('§FS_STA_MUR_POS2') != vars.get('§SI')) {
        vars.setDUMMYB2(vars.get('§SI'));
    }
    //#4
    if (vars.get('§LA_COM') == 'POS') {
        vars.setDUMMYB2('');
    }
    //#5
    if (vars.get('§DUMMYB1') == vars.get('§SI') && vars.get('§DUMMYB2') == vars.get('§SI')) {
        vars.setCF(1);
    }
    //#6
    if (vars.get('§VER_STA_T01') == '2021') {
    } else {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
