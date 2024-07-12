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

export const REG0004110: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0004110
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF=#0
    // #2
    // COND:
    // (§FS_SCA_MON_ANT1 = §SI) AND ( §L_SPO_MON_ANT1 = #0) AND ( §L_SBA_ANT1 = #0 )
    // THEN:
    // *SET *CF=#1
    // #3
    // COND:
    // ( §L_SPO_MON_ANT1 > #0) OR ( §L_SBA_ANT1 >#0 )
    // THEN:
    // *SET *LG=''
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if ((vars.get('§FS_SCA_MON_ANT1') == vars.get('§SI')) && (vars.get('§L_SPO_MON_ANT1') == 0) && (vars.get('§L_SBA_ANT1') == 0)) {
        vars.setCF(1);
    }
    
    //#3
    if ((vars.get('§L_SPO_MON_ANT1') > 0) || (vars.get('§L_SBA_ANT1') > 0)) {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
