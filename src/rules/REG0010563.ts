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

export const REG0010563: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0010563
    // REQUEST:
    // """
    // #1
    // COND:
    // §VE_PANN_SCROC > #0
    // THEN:
    // *SET §DUMMYN1 = §VE_PANN_SCROC
    // ELSE:
    // *SET §DUMMYN1 = #0
    // #2
    // COND:
    // §VE_BL_SX = 'B2'
    // THEN:
    // *SET §DUMMYN2 = #1
    // ELSE:
    // *SET §DUMMYN2 = #0
    // #3
    // COND:
    // §VE_BL_DX = 'B2'
    // THEN:
    // *SET §DUMMYN3 = #1
    // ELSE:
    // *SET §DUMMYN3 = #0
    // #4
    // COND:
    // §VE_BL_CE = 'B2'
    // THEN:
    // *SET §DUMMYN4 = #1
    // ELSE:
    // *SET §DUMMYN4 = #0
    // #5
    // COND:
    // §VE_PANN_SCROC > #0
    // THEN:
    // *SET *CF = [ §DUMMYN1 + §DUMMYN2 + §DUMMYN3 + §DUMMYN4 ]
    // *SET *CON-A = '0466'
    // ELSE:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§VE_PANN_SCROC') > 0) {
        vars.setDUMMYN1(vars.get('§VE_PANN_SCROC'));
    } else {
        vars.setDUMMYN1(0);
    }
    
    //#2
    if (vars.get('§VE_BL_SX') == 'B2') {
        vars.setDUMMYN2(1);
    } else {
        vars.setDUMMYN2(0);
    }
    
    //#3
    if (vars.get('§VE_BL_DX') == 'B2') {
        vars.setDUMMYN3(1);
    } else {
        vars.setDUMMYN3(0);
    }
    
    //#4
    if (vars.get('§VE_BL_CE') == 'B2') {
        vars.setDUMMYN4(1);
    } else {
        vars.setDUMMYN4(0);
    }
    
    //#5
    if (vars.get('§VE_PANN_SCROC') > 0) {
        vars.setCF(vars.get('§DUMMYN1') + vars.get('§DUMMYN2') + vars.get('§DUMMYN3') + vars.get('§DUMMYN4'));
        vars.setCON_A('0466');
    } else {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
