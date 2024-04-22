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

export const REG0003677: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0003677
    // REQUEST:
    // """
    // #1
    // COND:
    // §L_PORTANTE3 >#0
    // THEN:
    // *SET *CON-A=§VERN_1_COM
    // *SET *CON-B=§L_PORTANTE3
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
    if (vars.get('§L_PORTANTE3') > 0) {
        vars.setCON_A(vars.get('§VERN_1_COM'));
        vars.setCON_B(vars.get('§L_PORTANTE3'));
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
