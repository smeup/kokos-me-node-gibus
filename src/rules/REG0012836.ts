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

export const REG0012836: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0012836
    // REQUEST:
    // """
    // #1
    // COND:
    // §LARG > #500
    // THEN:
    // *SET *CF = [ §NR_RAGGI * #4]
    // *SET *CON-A = §VERN_1_COM
    // ELSE:
    // *SET *CF = #4
    // *SET *CON-A = §VERN_1_COM
    // """
    // RESPONSE:
    //#1
    if (vars.get('§LARG') > 500) {
        vars.setCF(vars.get('§NR_RAGGI') * 4);
        vars.setCON_A(vars.get('§VERN_1_COM'));
    } else {
        vars.setCF(4);
        vars.setCON_A(vars.get('§VERN_1_COM'));
    }
    // GENERATED

    return vars.output;
};
