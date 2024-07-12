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

export const REG0005671: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0005671
    // REQUEST:
    // """
    // #1
    // COND:
    // §L_PORTANTE6 >#0
    // THEN:
    // *SET *CON-A=§VERN_1_COM
    // *SET *CON-B=§L_PORTANTE6
    // ELSE:
    // *SET *LG=''
    // #2
    // COND:
    // §FS_FAM2_ELITE = §SI
    // THEN:
    // *SET *CON-A = §VR_LEG
    // """
    // RESPONSE:
    //#1
    if (vars.get('§L_PORTANTE6') > 0) {
        vars.setCON_A(vars.get('§VERN_1_COM'));
        vars.setCON_B(vars.get('§L_PORTANTE6'));
    } else {
        vars.setLG('');
    }
    
    //#2
    if (vars.get('§FS_FAM2_ELITE') == vars.get('§SI')) {
        vars.setCON_A(vars.get('§VR_LEG'));
    }
    // GENERATED

    return vars.output;
};
