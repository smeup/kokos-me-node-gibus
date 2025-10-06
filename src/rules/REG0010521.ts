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

export const REG0010521: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0010521
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET §DUMMYN1 = #0
    // #2
    // COND:
    // §QVE_MANIGLIE > #0
    // THEN:
    // *SET *CF = §QVE_MANIGLIE
    // ELSE:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    vars.setDUMMYN1(0);
    
    //#2
    if (vars.get('§QVE_MANIGLIE') > 0) {
        vars.setCF(vars.get('§QVE_MANIGLIE'));
    } else {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
