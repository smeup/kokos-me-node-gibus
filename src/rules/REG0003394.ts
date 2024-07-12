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

export const REG0003394: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0003394
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_SCA_MON_ANT2 = §SI
    // ELSE:
    // *SET *LG=''
    // #2
    // COND:
    // §FS_FAM2_LUCE=§SI
    // THEN:
    // *SET *CF=#0
    // #3
    // COND:
    // §FS_ANT2_T01 = §SI
    // THEN:
    // *SET *CF = #0
    // #4
    // COND:
    // §FS_ANT2_T02 = §SI
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_SCA_MON_ANT2') == vars.get('§SI')) {
    } else {
        vars.setLG("");
    }
    
    //#2
    if (vars.get('§FS_FAM2_LUCE') == vars.get('§SI')) {
        vars.setCF(0);
    }
    
    //#3
    if (vars.get('§FS_ANT2_T01') == vars.get('§SI')) {
        vars.setCF(0);
    }
    
    //#4
    if (vars.get('§FS_ANT2_T02') == vars.get('§SI')) {
        vars.setCF(0);
    }
    
    // GENERATED

    return vars.output;
};
