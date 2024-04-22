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

export const REG0007761: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0007761
    // REQUEST:
    // """
    // #1
    // COND:
    // §P_POR_CAS_L_ACC >#0
    // THEN:
    // *SET *CON-A=§VERN_1_COM
    // *SET *CON-B=§P_POR_CAS_L_ACC
    // ELSE:
    // *SET *LG=''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§P_POR_CAS_L_ACC') > 0) {
        vars.setCON_A(vars.get('§VERN_1_COM'));
        vars.setCON_B(vars.get('§P_POR_CAS_L_ACC'));
    } else {
        vars.setLG('');
    }
    
    // GENERATED

    return vars.output;
};
