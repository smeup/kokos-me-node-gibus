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

export const REG0006827: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0006827
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // ( §LUNG_LISTELLO > #0 )
    // THEN:
    // *SET *CF = §NR_LISTELLI
    // #3
    // COND:
    // §POS_TEL_TWI = '2' AND §_AR_MST = 'TS0103'
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (vars.get('§LUNG_LISTELLO') > 0) {
        vars.setCF(vars.get('§NR_LISTELLI'));
    }
    
    //#3
    if (vars.get('§POS_TEL_TWI') == '2' && vars.get('§_AR_MST') == 'TS0103') {
        vars.setCF(0);
    }
    
    // GENERATED

    return vars.output;
};
