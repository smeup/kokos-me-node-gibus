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

export const REG0003933: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0003933
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_LED=§SI
    // THEN:
    // *SET *CF= [ §NR_BAN_FRA - §NR_FRANGI_LED - §NR_LAM_FAN]
    // ELSE:
    // *SET *LG=''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_LED') == vars.get('§SI')) {
        vars.setCF(vars.get('§NR_BAN_FRA') - vars.get('§NR_FRANGI_LED') - vars.get('§NR_LAM_FAN'));
    } else {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
