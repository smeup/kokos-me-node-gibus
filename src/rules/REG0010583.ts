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

export const REG0010583: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0010583
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_VET_SCORR = §SI AND §VE_PESO_PAN_LAT >= #70
    // THEN:
    // *SET §DUMMYN1 = [ #2 * §Q_PANN_LAT]
    // ELSE:
    // *SET §DUMMYN1 = #0
    // #2
    // COND:
    // §FS_VET_SCORR = §SI AND §VE_PESO_PAN_CEN >= #70
    // THEN:
    // *SET §DUMMYN2 = [ #2 * §Q_PANN_CENTR ]
    // ELSE:
    // *SET §DUMMYN2 = #0
    // #3
    // COND:
    // §DUMMYN1 > #0 OR §DUMMYN2 > #0
    // THEN:
    // *SET *CF = [ §DUMMYN1 + §DUMMYN2 ]
    // *SET *CON-A = '0000'
    // ELSE:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_VET_SCORR') == vars.get('§SI') && vars.get('§VE_PESO_PAN_LAT') >= 70) {
        vars.setDUMMYN1(2 * vars.get('§Q_PANN_LAT'));
    } else {
        vars.setDUMMYN1(0);
    }
    
    //#2
    if (vars.get('§FS_VET_SCORR') == vars.get('§SI') && vars.get('§VE_PESO_PAN_CEN') >= 70) {
        vars.setDUMMYN2(2 * vars.get('§Q_PANN_CENTR'));
    } else {
        vars.setDUMMYN2(0);
    }
    
    //#3
    if (vars.get('§DUMMYN1') > 0 || vars.get('§DUMMYN2') > 0) {
        vars.setCF(vars.get('§DUMMYN1') + vars.get('§DUMMYN2'));
        vars.setCON_A('0000');
    } else {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
