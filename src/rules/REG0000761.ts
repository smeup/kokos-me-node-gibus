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

export const REG0000761: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0000761
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §VERN_1_COM = '0055' OR §VERN_1_COM  = '0053' OR §VERN_1_COM  = '0065' OR                                                    §VR_ABB = '01' OR §VR_ABB = '02'
    // THEN:
    // *SET *CON-A = 'P055'
    // ELSE:
    // *SET *CON-A = 'P072'
    // #3
    // COND:
    // (§FS_SP_0 = §SI) OR (§FS_TEKA_0 = §SI)
    // THEN:
    // *SET *CF = §NR_GAN_OCC
    // #4
    // COND:
    // §FS_DIM_250 = §SI AND §FS_TENDA_CADUTA = §SI
    // THEN:
    // *SET *CF = §NR_GAN_OCC
    // """
    // RESPONSE:
    
    //#1
    vars.setCF(0);
    //#2
    if (vars.get('§VERN_1_COM') == '0055' || vars.get('§VERN_1_COM') == '0053' || vars.get('§VERN_1_COM') == '0065' || vars.get('§VR_ABB') == '01' || vars.get('§VR_ABB') == '02') {
        vars.setCON_A('P055');
    } else {
        vars.setCON_A('P072');
    }
    //#3
    if (vars.get('§FS_SP_0') == vars.get('§SI') || vars.get('§FS_TEKA_0') == vars.get('§SI')) {
        vars.setCF(vars.get('§NR_GAN_OCC'));
    }
    //#4
    if (vars.get('§FS_DIM_250') == vars.get('§SI') && vars.get('§FS_TENDA_CADUTA') == vars.get('§SI')) {
        vars.setCF(vars.get('§NR_GAN_OCC'));
    }
    // GENERATED

    return vars.output;
};
