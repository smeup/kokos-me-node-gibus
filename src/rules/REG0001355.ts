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

export const REG0001355: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0001355
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_PIEDINI = '02'
    // THEN:
    // *SET *CF  = #0
    // ELSE:
    // *SET *LG = ''
    // #2
    // COND:
    // (§FS_FAM2_DIM_TC = §SI) OR (§FS_FAM2_TEKA = §SI)
    // THEN:
    // *SET *CF = #2
    // #3
    // COND:
    // §VERN_1_COM = '0070' OR §VERN_1_COM = '0079' OR §VERN_1_COM = '0072' OR §VERN_1_COM = '0073'  OR §VERN_1_COM = '0069' OR     §VR_ABB = '07' OR §VR_ABB = '08' OR §VR_ABB = '04' OR §VR_ABB = '05'  OR §VR_ABB = '06' OR §VR_ABB = '10'
    // THEN:
    // *SET *CON-A = 'P072'
    // ELSE:
    // *SET *CON-A = 'P055'
    // #4
    // THEN:
    // *SET *CON-A = §VERN_PLAST
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_PIEDINI') == '02') {
        vars.setCF(0);
    } else {
        vars.setLG('');
    }
    //#2
    if ((vars.get('§FS_FAM2_DIM_TC') == vars.get('§SI')) || (vars.get('§FS_FAM2_TEKA') == vars.get('§SI'))) {
        vars.setCF(2);
    }
    //#3
    if ((vars.get('§VERN_1_COM') == '0070') || (vars.get('§VERN_1_COM') == '0079') || (vars.get('§VERN_1_COM') == '0072') || (vars.get('§VERN_1_COM') == '0073') || (vars.get('§VERN_1_COM') == '0069') || (vars.get('§VR_ABB') == '07') || (vars.get('§VR_ABB') == '08') || (vars.get('§VR_ABB') == '04') || (vars.get('§VR_ABB') == '05') || (vars.get('§VR_ABB') == '06') || (vars.get('§VR_ABB') == '10')) {
        vars.setCON_A('P072');
    } else {
        vars.setCON_A('P055');
    }
    //#4
    vars.setCON_A(vars.get('§VERN_PLAST'));

    // GENERATED

    return vars.output;
};
