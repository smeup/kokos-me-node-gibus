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

export const REG0011332: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0011332
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // THEN:
    // *SET §DUMMYN1 = [§L_BA_LED_TOT - #50]
    // #3
    // THEN:
    // *SET §DUMMYN2 = §L_BAN_FRA
    // #4
    // THEN:
    // *SET §DUMMYN3 = [§DUMMYN2 - §DUMMYN1]
    // #5
    // COND:
    // §DUMMYN3 > #110
    // THEN:
    // *SET *CF = §NR_FRANGI_LED
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    //#2
    vars.setDUMMYN1(vars.get('§L_BA_LED_TOT') - 50);
    //#3
    vars.setDUMMYN2(vars.get('§L_BAN_FRA'));
    //#4
    vars.setDUMMYN3(vars.get('§DUMMYN2') - vars.get('§DUMMYN1'));
    //#5
    if (vars.get('§DUMMYN3') > 110) {
        vars.setCF(vars.get('§NR_FRANGI_LED'));
    }
    // GENERATED

    return vars.output;
};
