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

export const REG0005698: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0005698
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §TI_ARG = '08'
    // THEN:
    // *SET *CF = #1
    // *SET *CON-A = '0073'
    // #3
    // COND:
    // (§VERN_1_COM = '0055') OR (§VERN_1_COM = '0072') OR (§VERN_1_COM = '0079') OR                                                (§VERN_1_COM = '0065') OR (§VERN_1_COM = '0070') OR                                                                          (§VERN_1_COM = '0053') OR (§VERN_1_COM = '0069')
    // THEN:
    // *SET *CON-A = §VERN_1_COM
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (vars.get('§TI_ARG') == '08') {
        vars.setCF(1);
        vars.setCON_A('0073');
    }
    
    //#3
    if (
        vars.get('§VERN_1_COM') == '0055' ||
        vars.get('§VERN_1_COM') == '0072' ||
        vars.get('§VERN_1_COM') == '0079' ||
        vars.get('§VERN_1_COM') == '0065' ||
        vars.get('§VERN_1_COM') == '0070' ||
        vars.get('§VERN_1_COM') == '0053' ||
        vars.get('§VERN_1_COM') == '0069'
    ) {
        vars.setCON_A(vars.get('§VERN_1_COM'));
    }
    
    // GENERATED

    return vars.output;
};
