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

export const REG0006228: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0006228
    // REQUEST:
    // """
    // #1
    // COND:
    // §INN_SX_AGG2='01'
    // THEN:
    // *SET *CON-A=§VERN_1_COM
    // *SET *CF=#1
    // #2
    // COND:
    // §INN_SX_AGG2='02'
    // THEN:
    // *SET *CF=#0
    // """
    // RESPONSE:
    //#1
    if (vars.get('§INN_SX_AGG2') == '01') {
        vars.setCON_A(vars.get('§VERN_1_COM'));
        vars.setCF(1);
    }
    
    //#2
    if (vars.get('§INN_SX_AGG2') == '02') {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
