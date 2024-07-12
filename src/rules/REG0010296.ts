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

export const REG0010296: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0010296
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #1
    // *SET §DUMMYB1 = ''
    // #2
    // COND:
    // §FS_FAM2_ZENIT = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #3
    // THEN:
    // *SET §DUMMYB2 = ''
    // #4
    // COND:
    // §FS_ACC_ANT1 = §SI
    // THEN:
    // *SET §DUMMYB2 = §SI
    // #5
    // COND:
    // §FS_STA_MUR_ANT1 = §SI AND §VER_STA_T01 <> '2021'
    // THEN:
    // *SET §DUMMYB2 = ''
    // #6
    // COND:
    // §DUMMYB1 = §SI AND §DUMMYB2 = §SI
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    vars.setCF(1);
    vars.setDUMMYB1("");
    //#2
    if (vars.get('§FS_FAM2_ZENIT') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    //#3
    vars.setDUMMYB2("");
    //#4
    if (vars.get('§FS_ACC_ANT1') == vars.get('§SI')) {
        vars.setDUMMYB2(vars.get('§SI'));
    }
    //#5
    if (vars.get('§FS_STA_MUR_ANT1') == vars.get('§SI') && vars.get('§VER_STA_T01') != '2021') {
        vars.setDUMMYB2("");
    }
    //#6
    if (vars.get('§DUMMYB1') == vars.get('§SI') && vars.get('§DUMMYB2') == vars.get('§SI')) {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
