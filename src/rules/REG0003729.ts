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

export const REG0003729: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0003729
    // REQUEST:
    // """
    // #1
    // COND:
    // §P_POR_BAN1X >#0
    // THEN:
    // *SET *CF= [ §P_POR_BAN1X/ #100 ]
    // *SET *CON-A='P072'
    // ELSE:
    // *SET *LG=''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§P_POR_BAN1X') > 0) {
        vars.setCF(vars.get('§P_POR_BAN1X') / 100);
        vars.setCON_A('P072');
    } else {
        vars.setLG('');
    }
    
    // GENERATED

    return vars.output;
};
