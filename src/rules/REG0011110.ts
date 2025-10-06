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

export const REG0011110: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0011110
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_VET_SCORR = §SI AND §LARG > #645 AND §N_VIE <> '2'
    // THEN:
    // *SET *CF = #1
    // *SET *CON-A = '0000'
    // ELSE:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_VET_SCORR') == vars.get('§SI') && vars.get('§LARG') > 645 && vars.get('§N_VIE') != '2') {
        vars.setCF(1);
        vars.setCON_A('0000');
    } else {
        vars.setLG('');
    }
    
    // GENERATED

    return vars.output;
};
