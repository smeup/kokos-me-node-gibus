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

export const REG0006138: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0006138
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_NOPTELO = §SI
    // THEN:
    // *SET *LG = ''
    // #2
    // COND:
    // §FS_NOTELO = §SI OR §_AR = 'TL0017'
    // THEN:
    // *SET *LG = ''
    // #3
    // THEN:
    // *SET §DUMMYB1 = ''
    // *SET §DUMMYB2 = ''
    // *SET *CF = #1
    // #4
    // COND:
    // §TIPO_PLANA = '01'
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #5
    // COND:
    // §TIPO_LASCO_DRI = '01'
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #6
    // COND:
    // §MATER_TESSUTO = '0017'
    // THEN:
    // *SET §DUMMYB2 = §SI
    // #7
    // COND:
    // §MATER_TESSUTO = '0119'
    // THEN:
    // *SET §DUMMYB2 = §SI
    // #8
    // COND:
    // §DUMMYB1 = §SI AND §DUMMYB2 = §SI
    // THEN:
    // *SET *CF = #0
    // #9
    // COND:
    // §X_CDL_PTE = '02'
    // THEN:
    // *SET *CF = #1
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_NOPTELO') == vars.get('§SI')) {
        vars.setLG('');
    }
    //#2
    if ((vars.get('§FS_NOTELO') == vars.get('§SI')) || (vars.get('_AR') == 'TL0017')) {
        vars.setLG('');
    }
    //#3
    vars.setDUMMYB1('');
    vars.setDUMMYB2('');
    vars.setCF(1);
    //#4
    if (vars.get('§TIPO_PLANA') == '01') {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    //#5
    if (vars.get('§TIPO_LASCO_DRI') == '01') {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    //#6
    if (vars.get('§MATER_TESSUTO') == '0017') {
        vars.setDUMMYB2(vars.get('§SI'));
    }
    //#7
    if (vars.get('§MATER_TESSUTO') == '0119') {
        vars.setDUMMYB2(vars.get('§SI'));
    }
    //#8
    if ((vars.get('§DUMMYB1') == vars.get('§SI')) && (vars.get('§DUMMYB2') == vars.get('§SI'))) {
        vars.setCF(0);
    }
    //#9
    if (vars.get('§X_CDL_PTE') == '02') {
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
