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

export const IMP0000009: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: IMP0000009
    // REQUEST:
    // """
    // #1
    // COND:
    // §FO_SUP_CO_AL_CI = §SI
    // THEN:
    // *SET *CON-A = §VERN_1_COM
    // ELSE:
    // *SET *LG = ''
    // #2
    // COND:
    // §FO_SUP_CO_IN_CI = §SI
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FO_SUP_CO_AL_CI') == vars.get('§SI')) {
        vars.setCON_A(vars.get('§VERN_1_COM'));
    } else {
        vars.setLG('');
    }
    
    //#2
    if (vars.get('§FO_SUP_CO_IN_CI') == vars.get('§SI')) {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
