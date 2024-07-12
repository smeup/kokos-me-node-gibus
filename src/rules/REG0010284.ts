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

export const REG0010284: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0010284
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET §DUMMYN1 = #0
    // *SET §DUMMYN2 = #0
    // #2
    // COND:
    // §FS_PUM_MIST = '03'
    // THEN:
    // *SET *LG = ''
    // #3
    // COND:
    // §Q_MISTING_L = #2 AND §Q_MISTING_S = #2
    // THEN:
    // *SET §DUMMYN1 = #2
    // #4
    // COND:
    // §Q_MISTING_L >= #2 AND §Q_MISTING_S = #1
    // THEN:
    // *SET §DUMMYN1 = #1
    // #5
    // COND:
    // §Q_MISTING_L = #1 AND §Q_MISTING_S = #2
    // THEN:
    // *SET §DUMMYN1 = #1
    // #6
    // COND:
    // §Q_MISTING_S = #0
    // THEN:
    // *SET §DUMMYN1 = #0
    // #7
    // THEN:
    // *SET *CF = [§N_UGE_X * §Q_MISTING_L + §N_UGE_Y * §Q_MISTING_S + §DUMMYN1]
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setDUMMYN1(0);
    vars.setDUMMYN2(0);
    //#2
    if (vars.get('§FS_PUM_MIST') == '03') {
        vars.setLG('');
    }
    //#3
    if (vars.get('§Q_MISTING_L') == 2 && vars.get('§Q_MISTING_S') == 2) {
        vars.setDUMMYN1(2);
    }
    //#4
    if (vars.get('§Q_MISTING_L') >= 2 && vars.get('§Q_MISTING_S') == 1) {
        vars.setDUMMYN1(1);
    }
    //#5
    if (vars.get('§Q_MISTING_L') == 1 && vars.get('§Q_MISTING_S') == 2) {
        vars.setDUMMYN1(1);
    }
    //#6
    if (vars.get('§Q_MISTING_S') == 0) {
        vars.setDUMMYN1(0);
    }
    //#7
    vars.setCF(vars.get('§N_UGE_X') * vars.get('§Q_MISTING_L') + vars.get('§N_UGE_Y') * vars.get('§Q_MISTING_S') + vars.get('§DUMMYN1'));
    // GENERATED

    return vars.output;
};
