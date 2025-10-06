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

export const REG0010574: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0010574
    // REQUEST:
    // """
    // #1
    // COND:
    // §VE_CM_SX = 'S1' OR §VE_CM_SX = 'S2'
    // THEN:
    // *SET §DUMMYN1 = #1
    // ELSE:
    // *SET §DUMMYN1 = #0
    // #2
    // COND:
    // §VE_CM_DX = 'S1' OR §VE_CM_DX = 'S2'
    // THEN:
    // *SET §DUMMYN2 = #1
    // ELSE:
    // *SET §DUMMYN2 = #0
    // #3
    // COND:
    // §FS_VET_SCORR = §SI
    // THEN:
    // *SET *CON-A = '0000'
    // *SET *CF = [ §DUMMYN1 + §DUMMYN2 ]
    // ELSE:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§VE_CM_SX') == 'S1' || vars.get('§VE_CM_SX') == 'S2') {
        vars.setDUMMYN1(1);
    } else {
        vars.setDUMMYN1(0);
    }
    
    //#2
    if (vars.get('§VE_CM_DX') == 'S1' || vars.get('§VE_CM_DX') == 'S2') {
        vars.setDUMMYN2(1);
    } else {
        vars.setDUMMYN2(0);
    }
    
    //#3
    if (vars.get('§FS_VET_SCORR') == vars.get('§SI')) {
        vars.setCON_A('0000');
        vars.setCF(vars.get('§DUMMYN1') + vars.get('§DUMMYN2'));
    } else {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
