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

export const REG0011076: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0011076
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET §DUMMYN1 = #0
    // #2
    // COND:
    // §VE_CM_SX = 'B1' OR §VE_CM_SX = 'B2'
    // THEN:
    // *SET §DUMMYN1 = §DUMMYN1 + #2
    // #3
    // COND:
    // §VE_CM_DX = 'B1' OR §VE_CM_DX = 'B2'
    // THEN:
    // *SET §DUMMYN1 = §DUMMYN1 + #2
    // #4
    // COND:
    // §DUMMYN1 > #0
    // THEN:
    // *SET *CF = §DUMMYN1
    // ELSE:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    vars.setDUMMYN1(0);
    
    //#2
    if (vars.get('§VE_CM_SX') == 'B1' || vars.get('§VE_CM_SX') == 'B2') {
        vars.setDUMMYN1(vars.get('§DUMMYN1') + 2);
    }
    
    //#3
    if (vars.get('§VE_CM_DX') == 'B1' || vars.get('§VE_CM_DX') == 'B2') {
        vars.setDUMMYN1(vars.get('§DUMMYN1') + 2);
    }
    
    //#4
    if (vars.get('§DUMMYN1') > 0) {
        vars.setCF(vars.get('§DUMMYN1'));
    } else {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
