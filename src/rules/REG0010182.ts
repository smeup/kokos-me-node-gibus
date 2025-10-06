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

export const REG0010182: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0010182
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_FAM2_SP = §SI OR §FS_FAM2_TEKA = §SI OR §FS_FAM2_DIM_TC = §SI
    // ELSE:
    // *SET *LG = ''
    // #2
    // THEN:
    // *SET *CON-A = '0072'
    // #3
    // COND:
    // §VR_ABB = '01' OR §VR_ABB = '02'
    // THEN:
    // *SET *CON-A = '0055'
    // #4
    // COND:
    // §VERN_1_COM = '0053' OR §VERN_1_COM = '0065' OR §VERN_1_COM = '0208'
    // THEN:
    // *SET *CON-A = '0055'
    // #5
    // COND:
    // §POS_COMANDO = '01'
    // THEN:
    // *SET *NT = 'COMANDO A SX'
    // #6
    // COND:
    // §POS_COMANDO = '03'
    // THEN:
    // *SET *NT = 'COMANDO A DX'
    // #7
    // COND:
    // §FS_DIM_0G = §SI OR §FS_DIM_5 = §SI
    // THEN:
    // *SET *CM = '260011'
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_FAM2_SP') == vars.get('§SI') || vars.get('§FS_FAM2_TEKA') == vars.get('§SI') || vars.get('§FS_FAM2_DIM_TC') == vars.get('§SI')) {
    } else {
        vars.setLG('');
    }
    
    //#2
    vars.setCON_A('0072');
    
    //#3
    if (vars.get('§VR_ABB') == '01' || vars.get('§VR_ABB') == '02') {
        vars.setCON_A('0055');
    }
    
    //#4
    if (vars.get('§VERN_1_COM') == '0053' || vars.get('§VERN_1_COM') == '0065' || vars.get('§VERN_1_COM') == '0208') {
        vars.setCON_A('0055');
    }
    
    //#5
    if (vars.get('§POS_COMANDO') == '01') {
        vars.setNT('COMANDO A SX');
    }
    
    //#6
    if (vars.get('§POS_COMANDO') == '03') {
        vars.setNT('COMANDO A DX');
    }
    
    //#7
    if (vars.get('§FS_DIM_0G') == vars.get('§SI') || vars.get('§FS_DIM_5') == vars.get('§SI')) {
        vars.setCM('260011');
    }
    // GENERATED

    return vars.output;
};
