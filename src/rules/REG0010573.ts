/**
 * This rule represents a template implementation of a rule.
 * It takes an input value and performs some operations on it using the Variables class.
 * The result is returned as the output value.
 * 
 * @param iv The input value for the rule.
 * @returns The output value after applying the rule.
 */
import { Rule } from "../types/general.js";
import { Variables } from "../converter/variables.js";

export const REG0010573: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0010573
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_VET_SCORR = §SI AND §Q_PANN_LAT > #0
    // THEN:
    // *SET *CON-A = 'P051'
    // *SET *CF = §Q_PANN_LAT
    // ELSE:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_VET_SCORR') == vars.get('§SI') && vars.get('§Q_PANN_LAT') > 0) {
        vars.setCON_A('P051');
        vars.setCF(vars.get('§Q_PANN_LAT'));
    } else {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
