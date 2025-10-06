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

export const REG0000790: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0000790
    // REQUEST:
    // """
    // #1
    // COND:
    // (§FS_DUCK = §SI) OR (§FS_SCRIGNO_250 = §SI) OR (§FS_COMBI_250 = §SI)  OR (§FS_COMBI_60 = §SI)
    // ELSE:
    // *SET *LG = ''
    // #2
    // THEN:
    // *SET *CON-A = '0072'
    // #3
    // COND:
    // §VR_ABB = '01'
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
    // *SET *NT = 'COMANDO SX'
    // #6
    // COND:
    // §POS_COMANDO = '03'
    // THEN:
    // *SET *NT = 'COMANDO DX'
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_DUCK') == vars.get('§SI') || vars.get('§FS_SCRIGNO_250') == vars.get('§SI') || vars.get('§FS_COMBI_250') == vars.get('§SI') || vars.get('§FS_COMBI_60') == vars.get('§SI')) {
        // do nothing
    } else {
        vars.setLG('');
    }
    
    //#2
    vars.setCON_A('0072');
    
    //#3
    if (vars.get('§VR_ABB') == '01') {
        vars.setCON_A('0055');
    }
    
    //#4
    if (vars.get('§VERN_1_COM') == '0053' || vars.get('§VERN_1_COM') == '0065' || vars.get('§VERN_1_COM') == '0208') {
        vars.setCON_A('0055');
    }
    
    //#5
    if (vars.get('§POS_COMANDO') == '01') {
        vars.setNT('COMANDO SX');
    }
    
    //#6
    if (vars.get('§POS_COMANDO') == '03') {
        vars.setNT('COMANDO DX');
    }
    
    // GENERATED

    return vars.output;
};
