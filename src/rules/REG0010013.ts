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

export const REG0010013: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0010013
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET §DUMMYN1 = [ §NR_FRANGI - #1 ]
    // #2
    // COND:
    // §FINTELO_FLY = '01'
    // THEN:
    // *SET *CF = [ §DUMMYN1 * #2 ]
    // ELSE:
    // *SET *CF = [ §DUMMYN1 ]
    // """
    // RESPONSE:
    //#1
    vars.setDUMMYN1(vars.get('§NR_FRANGI') - 1);
    
    //#2
    if (vars.get('§FINTELO_FLY') == '01') {
        vars.setCF(vars.get('§DUMMYN1') * 2);
    } else {
        vars.setCF(vars.get('§DUMMYN1'));
    }
    // GENERATED

    return vars.output;
};
