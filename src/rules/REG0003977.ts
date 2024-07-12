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

export const REG0003977: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0003977
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // ( §FS_TIPO_LED='03' ) AND ( §NR_LED_SPO_GIB > #0 )
    // THEN:
    // *SET *CF = §NR_LED_SPO_GIB
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (vars.get('§FS_TIPO_LED') == '03' && vars.get('§NR_LED_SPO_GIB') > 0) {
        vars.setCF(vars.get('§NR_LED_SPO_GIB'));
    }
    // GENERATED

    return vars.output;
};
