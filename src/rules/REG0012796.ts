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

export const REG0012796: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0012796
    // REQUEST:
    // """
    // #1
    // COND:
    // §LARG > #500
    // THEN:
    // *SET *CF = §NR_RAGGI
    // *SET *CON-A = §VERN_1_COM
    // ELSE:
    // *SET *CF = #0
    // #2
    // COND:
    // §COMANDO = 'NOCOM'
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    if (vars.get('§LARG') > 500) {
        vars.setCF(vars.get('§NR_RAGGI'));
        vars.setCON_A(vars.get('§VERN_1_COM'));
    } else {
        vars.setCF(0);
    }
    
    //#2
    if (vars.get('§COMANDO') == 'NOCOM') {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
