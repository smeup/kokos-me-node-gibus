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

export const REG0010177: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0010177
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A = '0072'
    // #2
    // COND:
    // §VERN_1_COM= '0055' OR §VERN_1_COM= '0053' OR §VERN_1_COM= '0065' OR                                                         §VR_ABB = '01' OR §VR_ABB = '02'
    // THEN:
    // *SET *CON-A = '0055'
    // #3
    // COND:
    // §FS_FORGIATO  = §SI OR §FS_IMPERO = §SI
    // ELSE:
    // *SET *LG = ''
    // #4
    // COND:
    // §VERN_1_COM = '0073' OR §VR_ABB = '04'
    // THEN:
    // *SET *CON-A = '0073'
    // #5
    // THEN:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    vars.setCON_A('0072');
    
    //#2
    if (vars.get('§VERN_1_COM') == '0055' || vars.get('§VERN_1_COM') == '0053' || vars.get('§VERN_1_COM') == '0065' || vars.get('§VR_ABB') == '01' || vars.get('§VR_ABB') == '02') {
        vars.setCON_A('0055');
    }
    
    //#3
    if (vars.get('§FS_FORGIATO') == vars.get('§SI') || vars.get('§FS_IMPERO') == vars.get('§SI')) {
    } else {
        vars.setLG('');
    }
    
    //#4
    if (vars.get('§VERN_1_COM') == '0073' || vars.get('§VR_ABB') == '04') {
        vars.setCON_A('0073');
    }
    
    //#5
    vars.setLG('');
    // GENERATED

    return vars.output;
};
