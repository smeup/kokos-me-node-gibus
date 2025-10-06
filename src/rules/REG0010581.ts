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

export const REG0010581: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0010581
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_APERTURA_CEN = §SI AND ( §VE_BL_CE = 'B1' OR §VE_BL_CE = 'B2' )
    // THEN:
    // *SET §DUMMYN1 = #1
    // ELSE:
    // *SET §DUMMYN1 = #0
    // #2
    // COND:
    // §FS_APERTURA_CEN = §SI
    // THEN:
    // *SET §DUMMYN2 = [ #4 - §VE_PANN_SCROC - §DUMMYN1 ]
    // ELSE:
    // *SET §DUMMYN2 = [ #2 - §VE_PANN_SCROC ]
    // #3
    // COND:
    // §FS_VET_SCORR = §SI AND §DUMMYN2 > #0
    // THEN:
    // *SET *CF = §DUMMYN2
    // *SET *CON-A = §VERN_1_COM
    // ELSE:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_APERTURA_CEN') == vars.get('§SI') && (vars.get('§VE_BL_CE') == 'B1' || vars.get('§VE_BL_CE') == 'B2')) {
        vars.setDUMMYN1(1);
    } else {
        vars.setDUMMYN1(0);
    }
    
    //#2
    if (vars.get('§FS_APERTURA_CEN') == vars.get('§SI')) {
        vars.setDUMMYN2(4 - vars.get('§VE_PANN_SCROC') - vars.get('§DUMMYN1'));
    } else {
        vars.setDUMMYN2(2 - vars.get('§VE_PANN_SCROC'));
    }
    
    //#3
    if (vars.get('§FS_VET_SCORR') == vars.get('§SI') && vars.get('§DUMMYN2') > 0) {
        vars.setCF(vars.get('§DUMMYN2'));
        vars.setCON_A(vars.get('§VERN_1_COM'));
    } else {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
