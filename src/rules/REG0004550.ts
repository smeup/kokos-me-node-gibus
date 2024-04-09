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

export const REG0004550: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0004550
    // REQUEST:
    // """
    // #1
    // COND:
    // §SPESS_VETRO_MM='10'
    // THEN:
    // *SET *CF=§VE_QGUSORM
    // *SET *CON-A='P000'
    // *SET *CON-B=#290
    // ELSE:
    // *SET *LG=''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§SPESS_VETRO_MM') == '10') {
        vars.setCF(vars.get('§VE_QGUSORM'));
        vars.setCON_A('P000');
        vars.setCON_B(290);
    } else {
        vars.setLG('');
    }
    
    // GENERATED

    return vars.output;
};
