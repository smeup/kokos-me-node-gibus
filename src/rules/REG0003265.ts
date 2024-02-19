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

export const REG0003265: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0003265
    // REQUEST:
    // """
    // #1
    // COND:
    // (§FS_TAP_FRO_LAM<>§NO) AND (§FS_TAP_FRO_LAM<>'')
    // THEN:
    // *SET *CON-A=§VERN_1_COM
    // ELSE:
    // *SET *LG=''
    // #2
    // COND:
    // ( §FS_TAP_FRO_LAM<>§NO ) AND (§FS_TAP_FRO_LAM<>'')
    // ELSE:
    // *SET *LG=''
    // """
    // RESPONSE:
    //#1
    if ((vars.get('§FS_TAP_FRO_LAM') != vars.get('§NO')) && (vars.get('§FS_TAP_FRO_LAM') != '')) {
        vars.setCON_A(vars.get('§VERN_1_COM'));
    } else {
        vars.setLG('');
    }
    
    //#2
    if ((vars.get('§FS_TAP_FRO_LAM') != vars.get('§NO')) && (vars.get('§FS_TAP_FRO_LAM') != '')) {
    } else {
        vars.setLG('');
    }
    
    // GENERATED

    return vars.output;
};
