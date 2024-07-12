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

export const REG0001146: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0001146
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_DIM_400 = §SI
    // ELSE:
    // *SET *LG = ''
    // #2
    // THEN:
    // *SET *CON-A = 'P055'
    // #3
    // COND:
    // §VERN_1_COM = '0070' OR §VERN_1_COM = '0079' OR §VERN_1_COM = '0072' OR §VERN_1_COM = '0073'  OR §VERN_1_COM = '0069' OR     §VR_ABB = '07' OR §VR_ABB = '08' OR §VR_ABB = '04' OR §VR_ABB = '05' OR §VR_ABB = '06' OR §VR_ABB = '10'
    // THEN:
    // *SET *CON-A = 'P072'
    // #4
    // COND:
    // §VR_ABB = ''
    // THEN:
    // *SET *CON-A = 'P072'
    // #5
    // COND:
    // §VR_ABB = '03'
    // THEN:
    // *SET *CON-A = 'P072'
    // #6
    // COND:
    // §VERN_1_COM = '0065'
    // THEN:
    // *SET *CON-A = 'P055'
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_DIM_400') == vars.get('§SI')) {
    } else {
        vars.setLG('');
    }
    
    //#2
    vars.setCON_A('P055');
    
    //#3
    if (vars.get('§VERN_1_COM') == '0070' || vars.get('§VERN_1_COM') == '0079' || vars.get('§VERN_1_COM') == '0072' || vars.get('§VERN_1_COM') == '0073' || vars.get('§VERN_1_COM') == '0069' || vars.get('§VR_ABB') == '07' || vars.get('§VR_ABB') == '08' || vars.get('§VR_ABB') == '04' || vars.get('§VR_ABB') == '05' || vars.get('§VR_ABB') == '06' || vars.get('§VR_ABB') == '10') {
        vars.setCON_A('P072');
    }
    
    //#4
    if (vars.get('§VR_ABB') == '') {
        vars.setCON_A('P072');
    }
    
    //#5
    if (vars.get('§VR_ABB') == '03') {
        vars.setCON_A('P072');
    }
    
    //#6
    if (vars.get('§VERN_1_COM') == '0065') {
        vars.setCON_A('P055');
    }
    
    // GENERATED

    return vars.output;
};
