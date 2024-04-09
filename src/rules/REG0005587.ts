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

export const REG0005587: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0005587
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
    // GENERATED

    return vars.output;
};
