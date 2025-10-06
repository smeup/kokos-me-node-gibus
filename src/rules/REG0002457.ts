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

export const REG0002457: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0002457
    // REQUEST:
    // """
    // #1
    // COND:
    // §L_ADAT_ZIP > #0
    // THEN:
    // *SET *CON-A = 'P072'
    // *SET *CON-B = §L_ADAT_ZIP
    // *SET *CF = #2
    // ELSE:
    // *SET *LG = ''
    // #2
    // COND:
    // §VERN_1_COM  = '0055' OR §VERN_1_COM  = '0053' OR §VERN_1_COM  = '0065' OR                                                   §VR_ABB = '01' OR §VR_ABB = '02' OR §VR_ABB = '03'
    // THEN:
    // *SET *CON-A = 'P055'
    // #3
    // COND:
    // §FS_TEL_RUL_FRO = §SI
    // THEN:
    // *SET *CF = #0
    // #4
    // COND:
    // §FS_TEL_RUL = §SI
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    if (vars.get('§L_ADAT_ZIP') > 0) {
        vars.setCON_A('P072');
        vars.setCON_B(vars.get('§L_ADAT_ZIP'));
        vars.setCF(2);
    } else {
        vars.setLG('');
    }
    
    //#2
    if (vars.get('§VERN_1_COM') == '0055' || vars.get('§VERN_1_COM') == '0053' || vars.get('§VERN_1_COM') == '0065' || vars.get('§VR_ABB') == '01' || vars.get('§VR_ABB') == '02' || vars.get('§VR_ABB') == '03') {
        vars.setCON_A('P055');
    }
    
    //#3
    if (vars.get('§FS_TEL_RUL_FRO') == vars.get('§SI')) {
        vars.setCF(0);
    }
    
    //#4
    if (vars.get('§FS_TEL_RUL') == vars.get('§SI')) {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
