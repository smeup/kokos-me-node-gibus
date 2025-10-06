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

export const REG0010280: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0010280
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET §DUMMYN1 = #0
    // *SET §DUMMYN2 = #0
    // #2
    // COND:
    // §FS_MED_ACCOPP = §SI
    // THEN:
    // *SET §DUMMYN1 = #1
    // #3
    // COND:
    // §FS_MISTING_SX = §SI AND §FS_MISTING_DX = §SI
    // THEN:
    // *SET §DUMMYN2 = #1
    // #4
    // COND:
    // §FS_MISTING_ANT = §SI AND §FS_MISTING_POS = §SI
    // THEN:
    // *SET §DUMMYN2 = #1
    // #5
    // THEN:
    // *SET *CF = [§DUMMYN1 + §DUMMYN2]
    // #6
    // COND:
    // §FS_PUM_MIST = '03'
    // THEN:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setDUMMYN1(0);
    vars.setDUMMYN2(0);
    //#2
    if (vars.get('§FS_MED_ACCOPP') == vars.get('§SI')) {
        vars.setDUMMYN1(1);
    }
    //#3
    if ((vars.get('§FS_MISTING_SX') == vars.get('§SI')) && (vars.get('§FS_MISTING_DX') == vars.get('§SI'))) {
        vars.setDUMMYN2(1);
    }
    //#4
    if ((vars.get('§FS_MISTING_ANT') == vars.get('§SI')) && (vars.get('§FS_MISTING_POS') == vars.get('§SI'))) {
        vars.setDUMMYN2(1);
    }
    //#5
    vars.setCF(vars.get('§DUMMYN1') + vars.get('§DUMMYN2'));
    //#6
    if (vars.get('§FS_PUM_MIST') == '03') {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
