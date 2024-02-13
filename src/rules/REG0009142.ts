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

export const REG0009142: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0009142
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF= [ §NR_BAN_FRA - §NR_FRANGI_LED - §NR_LAM_FAN]
    // #2
    // THEN:
    // *SET §DUMMYB1 = ''
    // #3
    // COND:
    // §FS_LAM_BIO = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #4
    // COND:
    // §DUMMYB1 = §SI
    // THEN:
    // *SET *CF = #1
    // #5
    // COND:
    // §DUMMYB1 = §SI AND §NR_SPO > #0
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    vars.setCF(vars.get('§NR_BAN_FRA') - vars.get('§NR_FRANGI_LED') - vars.get('§NR_LAM_FAN'));
    //#2
    vars.setDUMMYB1('');
    //#3
    if (vars.get('§FS_LAM_BIO') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    //#4
    if (vars.get('§DUMMYB1') == vars.get('§SI')) {
        vars.setCF(1);
    }
    //#5
    if (vars.get('§DUMMYB1') == vars.get('§SI') && vars.get('§NR_SPO') > 0) {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
