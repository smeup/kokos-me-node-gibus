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

export const REG0001360: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0001360
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §FS_FAM2_DIM_TC = §SI OR §FS_TEKA_5 = §SI OR §FS_TEKA_0G = §SI
    // THEN:
    // *SET *CF = #1
    // #3
    // COND:
    // §FS_DIM_0G = §SI OR §FS_DIM_5 = §SI
    // THEN:
    // *SET *CF = #1
    // #4
    // COND:
    // §VERN_1_COM = '0055' OR §VERN_1_COM  = '0053' OR §VERN_1_COM  = '0065' OR                                                    §VR_ABB = '01' OR §VR_ABB = '02'
    // THEN:
    // *SET *CON-A = 'P055'
    // ELSE:
    // *SET *CON-A = 'P072'
    // #5
    // COND:
    // §FS_PIEDINI = '02'
    // THEN:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (vars.get('§FS_FAM2_DIM_TC') == vars.get('§SI') || vars.get('§FS_TEKA_5') == vars.get('§SI') || vars.get('§FS_TEKA_0G') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#3
    if (vars.get('§FS_DIM_0G') == vars.get('§SI') || vars.get('§FS_DIM_5') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#4
    if (vars.get('§VERN_1_COM') == '0055' || vars.get('§VERN_1_COM') == '0053' || vars.get('§VERN_1_COM') == '0065' || vars.get('§VR_ABB') == '01' || vars.get('§VR_ABB') == '02') {
        vars.setCON_A('P055');
    } else {
        vars.setCON_A('P072');
    }
    
    //#5
    if (vars.get('§FS_PIEDINI') == '02') {
        vars.setLG('');
    }
    
    // GENERATED

    return vars.output;
};
