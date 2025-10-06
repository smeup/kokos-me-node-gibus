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

export const REG0001739: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0001739
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_FER_AST_PAR = §SI
    // THEN:
    // *SET *CF = §NR_FER_AST_PAR
    // ELSE:
    // *SET *LG = ''
    // #2
    // COND:
    // §VERN_1_COM = '0055' OR §VERN_1_COM  = '0053' OR §VERN_1_COM  = '0065' OR                                                    §VR_ABB = '01' OR §VR_ABB = '02'
    // THEN:
    // *SET *CON-A = 'P055'
    // ELSE:
    // *SET *CON-A = 'P072'
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_FER_AST_PAR') == vars.get('§SI')) {
        vars.setCF(vars.get('§NR_FER_AST_PAR'));
    } else {
        vars.setLG('');
    }
    
    //#2
    if (vars.get('§VERN_1_COM') == '0055' || vars.get('§VERN_1_COM') == '0053' || vars.get('§VERN_1_COM') == '0065' || vars.get('§VR_ABB') == '01' || vars.get('§VR_ABB') == '02') {
        vars.setCON_A('P055');
    } else {
        vars.setCON_A('P072');
    }
    
    // GENERATED

    return vars.output;
};
