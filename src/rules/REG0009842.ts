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

export const REG0009842: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0009842
    // REQUEST:
    // """
    // #1
    // COND:
    // §W_LED <= #100
    // THEN:
    // *SET *CF=#1
    // #2
    // COND:
    // ( §W_LED > #100 ) AND (§P_POR_CAS_S < #500 )
    // THEN:
    // *SET *CF=#2
    // #3
    // COND:
    // ( §W_LED > #100 ) AND (§P_POR_CAS_S > #500 )
    // THEN:
    // *SET *CF=#3
    // #4
    // COND:
    // §FS_LAM_BIO_JOY = §SI
    // THEN:
    // *SET *CF = #0
    // #5
    // THEN:
    // *SET §DUMMYB1 = ''
    // #6
    // COND:
    // §FS_LAM_BIO = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #7
    // COND:
    // §DUMMYB1 = §SI
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    if (vars.get('§W_LED') <= 100) {
        vars.setCF(1);
    }
    //#2
    if ((vars.get('§W_LED') > 100) && (vars.get('§P_POR_CAS_S') < 500)) {
        vars.setCF(2);
    }
    //#3
    if ((vars.get('§W_LED') > 100) && (vars.get('§P_POR_CAS_S') > 500)) {
        vars.setCF(3);
    }
    //#4
    if (vars.get('§FS_LAM_BIO_JOY') == vars.get('§SI')) {
        vars.setCF(0);
    }
    //#5
    vars.setDUMMYB1('');
    //#6
    if (vars.get('§FS_LAM_BIO') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    //#7
    if (vars.get('§DUMMYB1') == vars.get('§SI')) {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
