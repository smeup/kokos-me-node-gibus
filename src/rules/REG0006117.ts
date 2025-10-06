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

export const REG0006117: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0006117
    // REQUEST:
    // """
    // #1
    // COND:
    // ( §FS_13_QU = §SI ) OR ( §FS_11_QUJ = §SI ) OR ( §FS_FAM2_CLI_ZIP = §SI)
    // ELSE:
    // *SET *LG = ''
    // #2
    // THEN:
    // *SET *CON-A = §VR_PLA_AST
    // #3
    // THEN:
    // *SET *CON-A = 'P072'
    // #4
    // COND:
    // §VR_AST_2 = '0055' OR §VR_AST_2 = '0053'
    // THEN:
    // *SET *CON-A = 'P055'
    // """
    // RESPONSE:
    //#1
    if ((vars.get('§FS_13_QU') == vars.get('§SI')) || (vars.get('§FS_11_QUJ') == vars.get('§SI')) || (vars.get('§FS_FAM2_CLI_ZIP') == vars.get('§SI'))) {
        //THEN
    } else {
        vars.setLG('');
    }
    
    //#2
    vars.setCON_A(vars.get('§VR_PLA_AST'));
    
    //#3
    vars.setCON_A('P072');
    
    //#4
    if (vars.get('§VR_AST_2') == '0055' || vars.get('§VR_AST_2') == '0053') {
        vars.setCON_A('P055');
    }
    
    // GENERATED

    return vars.output;
};
