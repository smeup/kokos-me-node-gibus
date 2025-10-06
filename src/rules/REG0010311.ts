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

export const REG0010311: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0010311
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // THEN:
    // *SET §DUMMYB1 = ''
    // #3
    // COND:
    // §FS_FAM2_ZENIT = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #4
    // THEN:
    // *SET §DUMMYB2 = ''
    // #5
    // COND:
    // §FS_ACC_LAT_POS = §SI
    // THEN:
    // *SET §DUMMYB2 = §SI
    // #6
    // THEN:
    // *SET §DUMMYB3 = ''
    // #7
    // COND:
    // §FS_ACC_POS2 = §SI
    // THEN:
    // *SET §DUMMYB3 = §SI
    // #8
    // COND:
    // §FS_STA_MUR_POS2 = §SI AND §VER_STA_T01 <> '2021'
    // THEN:
    // *SET §DUMMYB1 = ''
    // *SET §DUMMYB2 = ''
    // *SET §DUMMYB3 = ''
    // #9
    // COND:
    // §DUMMYB1 = §SI AND §DUMMYB2 = §SI AND §DUMMYB3 = §SI
    // THEN:
    // *SET *CF = #1
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    //#2
    vars.setDUMMYB1('');
    //#3
    if (vars.get('§FS_FAM2_ZENIT') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    //#4
    vars.setDUMMYB2('');
    //#5
    if (vars.get('§FS_ACC_LAT_POS') == vars.get('§SI')) {
        vars.setDUMMYB2(vars.get('§SI'));
    }
    //#6
    vars.setDUMMYB3('');
    //#7
    if (vars.get('§FS_ACC_POS2') == vars.get('§SI')) {
        vars.setDUMMYB3(vars.get('§SI'));
    }
    //#8
    if ((vars.get('§FS_STA_MUR_POS2') == vars.get('§SI')) && (vars.get('§VER_STA_T01') != '2021')) {
        vars.setDUMMYB1('');
        vars.setDUMMYB2('');
        vars.setDUMMYB3('');
    }
    //#9
    if ((vars.get('§DUMMYB1') == vars.get('§SI')) && (vars.get('§DUMMYB2') == vars.get('§SI')) && (vars.get('§DUMMYB3') == vars.get('§SI'))) {
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
