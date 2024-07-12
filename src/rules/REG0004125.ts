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

export const REG0004125: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0004125
    // REQUEST:
    // """
    // #1
    // COND:
    // (( §L_SPO_MON_POS2 > #0) OR (§L_SBA_POS2 >#0 )) AND (§H_POS_M2 > #0 )
    // THEN:
    // *SET *LG=''
    // #2
    // COND:
    // (( §L_SPO_MON_POS2 > #0) OR (§L_SBA_POS2 >#0 )) AND (§H_POS_M2 > #0 )
    // THEN:
    // *SET *LG=''
    // #3
    // COND:
    // (( §L_SPO_MON_ANT2 > #0) OR (§L_SBA_ANT2 >#0 )) AND (§H_ANT_M2 > #0 )
    // THEN:
    // *SET *CF=#0
    // #4
    // COND:
    // §H_ANT_M2= #0
    // THEN:
    // *SET *CF=#0
    // #5
    // COND:
    // §H_POS_M2 = #0
    // THEN:
    // *SET *CF=#0
    // """
    // RESPONSE:
    //#1
    if ((vars.get('§L_SPO_MON_POS2') > 0 || vars.get('§L_SBA_POS2') > 0) && vars.get('§H_POS_M2') > 0) {
        vars.setLG('');
    }
    
    //#2
    if ((vars.get('§L_SPO_MON_POS2') > 0 || vars.get('§L_SBA_POS2') > 0) && vars.get('§H_POS_M2') > 0) {
        vars.setLG('');
    }
    
    //#3
    if ((vars.get('§L_SPO_MON_ANT2') > 0 || vars.get('§L_SBA_ANT2') > 0) && vars.get('§H_ANT_M2') > 0) {
        vars.setCF(0);
    }
    
    //#4
    if (vars.get('§H_ANT_M2') == 0) {
        vars.setCF(0);
    }
    
    //#5
    if (vars.get('§H_POS_M2') == 0) {
        vars.setCF(0);
    }
    
    // GENERATED

    return vars.output;
};
