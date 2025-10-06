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

export const REG0010281: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0010281
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET §DUMMYN1 = #0
    // *SET §DUMMYN2 = #0
    // #2
    // THEN:
    // *SET §DUMMYN1 = #1
    // #3
    // COND:
    // §Q_MISTING_S <= #1 AND §Q_MISTING_L <= #1
    // THEN:
    // *SET §DUMMYN1 = #2
    // #4
    // COND:
    // §Q_MISTING_S = #2 AND §Q_MISTING_L >= #1
    // THEN:
    // *SET §DUMMYN1 = #2
    // #5
    // COND:
    // §FS_MED_ACCOPP = §SI
    // THEN:
    // *SET §DUMMYN2 = #1
    // #6
    // THEN:
    // *SET *CF = [§DUMMYN1 - §DUMMYN2]
    // #7
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
    vars.setDUMMYN1(1);
    //#3
    if (vars.get('§Q_MISTING_S') <= 1 && vars.get('§Q_MISTING_L') <= 1) {
        vars.setDUMMYN1(2);
    }
    //#4
    if (vars.get('§Q_MISTING_S') == 2 && vars.get('§Q_MISTING_L') >= 1) {
        vars.setDUMMYN1(2);
    }
    //#5
    if (vars.get('§FS_MED_ACCOPP') == vars.get('§SI')) {
        vars.setDUMMYN2(1);
    }
    //#6
    vars.setCF(vars.get('§DUMMYN1') - vars.get('§DUMMYN2'));
    //#7
    if (vars.get('§FS_PUM_MIST') == '03') {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
