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

export const REG0005685: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0005685
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET *CON-A = §VERN_1_COM
    // #2
    // COND:
    // §TI_ARG = '01'
    // THEN:
    // *SET *CF = #1
    // #3
    // COND:
    // §TI_ARG = '02'
    // THEN:
    // *SET *CF = #1
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setCON_A(vars.get('§VERN_1_COM'));
    
    //#2
    if (vars.get('§TI_ARG') == '01') {
        vars.setCF(1);
    }
    
    //#3
    if (vars.get('§TI_ARG') == '02') {
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
