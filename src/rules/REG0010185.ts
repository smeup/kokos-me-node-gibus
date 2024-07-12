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

export const REG0010185: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0010185
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_11_QUJ = §SI
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
    // §POS_COMANDO_QU = 'A'
    // THEN:
    // *SET *NT = 'POSIZIONE A'
    // #6
    // COND:
    // §POS_COMANDO_QU = 'B'
    // THEN:
    // *SET *NT = 'POSIZIONE B'
    // #7
    // COND:
    // §POS_COMANDO_QU = 'C'
    // THEN:
    // *SET *NT = 'POSIZIONE C'
    // #8
    // COND:
    // §POS_COMANDO_QU = 'D'
    // THEN:
    // *SET *NT = 'POSIZIONE D'
    // #9
    // COND:
    // §POS_COMANDO_QU = 'EA'
    // THEN:
    // *SET *NT = 'POSIZIONE EA'
    // #10
    // COND:
    // §POS_COMANDO_QU = 'EB'
    // THEN:
    // *SET *NT = 'POSIZIONE EB'
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_11_QUJ') == vars.get('§SI')) {
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
    if (vars.get('§POS_COMANDO_QU') == 'A') {
        vars.setNT('POSIZIONE A');
    }
    
    //#6
    if (vars.get('§POS_COMANDO_QU') == 'B') {
        vars.setNT('POSIZIONE B');
    }
    
    //#7
    if (vars.get('§POS_COMANDO_QU') == 'C') {
        vars.setNT('POSIZIONE C');
    }
    
    //#8
    if (vars.get('§POS_COMANDO_QU') == 'D') {
        vars.setNT('POSIZIONE D');
    }
    
    //#9
    if (vars.get('§POS_COMANDO_QU') == 'EA') {
        vars.setNT('POSIZIONE EA');
    }
    
    //#10
    if (vars.get('§POS_COMANDO_QU') == 'EB') {
        vars.setNT('POSIZIONE EB');
    }
    // GENERATED

    return vars.output;
};
