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

export const REG0008316: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0008316
    // REQUEST:
    // """
    // #1
    // COND:
    // §L_GIU_FLYR >#0
    // THEN:
    // *SET *CON-A ='0051'
    // *SET *CON-B=§L_GIU_FLYR
    // ELSE:
    // *SET *LG=''
    // #2
    // COND:
    // §VR_ABB = '01'
    // THEN:
    // *SET *CON-A = '0055'
    // #3
    // COND:
    // §VR_ABB = '04'
    // THEN:
    // *SET *CON-A = '0073'
    // """
    // RESPONSE:
    //#1
    if (vars.get('§L_GIU_FLYR') > 0) {
        vars.setCON_A('0051');
        vars.setCON_B(vars.get('§L_GIU_FLYR'));
    } else {
        vars.setLG('');
    }
    
    //#2
    if (vars.get('§VR_ABB') == '01') {
        vars.setCON_A('0055');
    }
    
    //#3
    if (vars.get('§VR_ABB') == '04') {
        vars.setCON_A('0073');
    }
    // GENERATED

    return vars.output;
};
