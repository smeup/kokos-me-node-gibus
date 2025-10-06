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

export const REG0010584: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0010584
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_VET_SCORR = §SI AND §QVE_MANIGLIE > #0
    // THEN:
    // *SET *CF = §QVE_MANIGLIE
    // *SET *CON-A = '0051'
    // ELSE:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_VET_SCORR') == vars.get('§SI') && vars.get('§QVE_MANIGLIE') > 0) {
        vars.setCF(vars.get('§QVE_MANIGLIE'));
        vars.setCON_A('0051');
    } else {
        vars.setLG('');
    }
    
    // GENERATED

    return vars.output;
};
