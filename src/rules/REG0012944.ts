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

export const REG0012944: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0012944
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #8
    // *SET *CON-A = §VERN_1_COM
    // #2
    // COND:
    // §TIPO_PANNELLO = 'B'
    // THEN:
    // *SET *CF = #4
    // *SET *CON-A = §VERN_1_COM
    // """
    // RESPONSE:
    //#1
    vars.setCF(8);
    vars.setCON_A(vars.get('§VERN_1_COM'));
    
    //#2
    if (vars.get('§TIPO_PANNELLO') == 'B') {
        vars.setCF(4);
        vars.setCON_A(vars.get('§VERN_1_COM'));
    }
    // GENERATED

    return vars.output;
};
