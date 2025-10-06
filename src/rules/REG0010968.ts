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

export const REG0010968: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0010968
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = §N_KIT_STE
    // #2
    // THEN:
    // *SET *CON-A = 'P072'
    // #3
    // COND:
    // §VERN_PLAST = 'P055'
    // THEN:
    // *SET *CON-A = §VERN_PLAST
    // """
    // RESPONSE:
    //#1
    vars.setCF(vars.get('§N_KIT_STE'));
    
    //#2
    vars.setCON_A('P072');
    
    //#3
    if (vars.get('§VERN_PLAST') == 'P055') {
        vars.setCON_A(vars.get('§VERN_PLAST'));
    }
    // GENERATED

    return vars.output;
};
