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

export const REG0010180: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0010180
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // THEN:
    // *SET *CON-A = '0072'
    // #3
    // COND:
    // §VERN_1_COM = '0055' OR §VERN_1_COM = '0053' OR §VERN_1_COM = '0065' OR                                                      §VR_ABB = '01' OR §VR_ABB = '02' OR §VR_ABB = '03'
    // THEN:
    // *SET *CON-A = '0055'
    // #4
    // COND:
    // §FS_VERTI90_Z_BA = §SI
    // THEN:
    // *SET *CF = #1
    // #5
    // COND:
    // §FS_VERTI90 = §SI
    // THEN:
    // *SET *CF = #1
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    vars.setCON_A('0072');
    
    //#3
    if (vars.get('§VERN_1_COM') == '0055' || vars.get('§VERN_1_COM') == '0053' || vars.get('§VERN_1_COM') == '0065' || vars.get('§VR_ABB') == '01' || vars.get('§VR_ABB') == '02' || vars.get('§VR_ABB') == '03') {
        vars.setCON_A('0055');
    }
    
    //#4
    if (vars.get('§FS_VERTI90_Z_BA') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#5
    if (vars.get('§FS_VERTI90') == vars.get('§SI')) {
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
