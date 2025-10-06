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

export const REG0000831: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0000831
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_COM_MOTORE = §SI
    // THEN:
    // *SET *CM = §COD_MOTORE
    // ELSE:
    // *SET *LG = ''
    // #2
    // COND:
    // §POS_COMANDO = '01'
    // THEN:
    // *SET *NT = 'Preassemlato a SX'
    // #3
    // COND:
    // §POS_COMANDO = '03'
    // THEN:
    // *SET *NT = 'Preassemlato a DX'
    // #4
    // COND:
    // §POS_COMANDO = '02'
    // THEN:
    // *SET *NT = 'Comando centrale'
    // #5
    // COND:
    // §POS_COMANDO = '04'
    // THEN:
    // *SET *NT = 'Posizione libera'
    // #6
    // COND:
    // §POS_COMANDO = '05'
    // THEN:
    // *SET *NT = 'Posizione lato muro'
    // #7
    // COND:
    // §POS_COMANDO = '06'
    // THEN:
    // *SET *NT = 'Posizione opp. muro'
    // #8
    // COND:
    // §POS_COMANDO_QU = 'A'
    // THEN:
    // *SET *NT = 'Comando A-SX ANT FRONT MOBILE'
    // #9
    // COND:
    // §POS_COMANDO_QU = 'B'
    // THEN:
    // *SET *NT = 'Comando B-DX ANT FRONT MOBILE'
    // #10
    // COND:
    // §POS_COMANDO_QU = 'C'
    // THEN:
    // *SET *NT = 'Comando C-DX POST'
    // #11
    // COND:
    // §POS_COMANDO_QU = 'D'
    // THEN:
    // *SET *NT = 'Comando D-SX POST'
    // #12
    // COND:
    // §POS_COMANDO_QU = 'EA'
    // THEN:
    // *SET *NT = 'Comando EA-SX Twist NO foro'
    // #13
    // COND:
    // §POS_COMANDO_QU = 'EB'
    // THEN:
    // *SET *NT = 'Comando EB-DX Twist NO foro'
    // #14
    // COND:
    // §POS_COM_CHI_VAR = 'DX'
    // THEN:
    // *SET *NT = 'Comando DX'
    // #15
    // COND:
    // §POS_COM_CHI_VAR = 'SX'
    // THEN:
    // *SET *NT = 'Comando SX'
    // #16
    // COND:
    // §AO_POS_COM_QU = 'A1'
    // THEN:
    // *SET *NT = 'Comando A'
    // #17
    // COND:
    // §AO_POS_COM_QU = 'B1'
    // THEN:
    // *SET *NT = 'Comando B'
    // #18
    // COND:
    // §AO_POS_COM_QU = 'C1'
    // THEN:
    // *SET *NT = 'Comando C'
    // #19
    // COND:
    // §AO_POS_COM_QU = 'D1'
    // THEN:
    // *SET *NT = 'Comando D'
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_COM_MOTORE') == vars.get('§SI')) {
        vars.setCM(vars.get('§COD_MOTORE'));
    } else {
        vars.setLG('');
    }
    
    //#2
    if (vars.get('§POS_COMANDO') == '01') {
        vars.setNT('Preassemlato a SX');
    }
    
    //#3
    if (vars.get('§POS_COMANDO') == '03') {
        vars.setNT('Preassemlato a DX');
    }
    
    //#4
    if (vars.get('§POS_COMANDO') == '02') {
        vars.setNT('Comando centrale');
    }
    
    //#5
    if (vars.get('§POS_COMANDO') == '04') {
        vars.setNT('Posizione libera');
    }
    
    //#6
    if (vars.get('§POS_COMANDO') == '05') {
        vars.setNT('Posizione lato muro');
    }
    
    //#7
    if (vars.get('§POS_COMANDO') == '06') {
        vars.setNT('Posizione opp. muro');
    }
    
    //#8
    if (vars.get('§POS_COMANDO_QU') == 'A') {
        vars.setNT('Comando A-SX ANT FRONT MOBILE');
    }
    
    //#9
    if (vars.get('§POS_COMANDO_QU') == 'B') {
        vars.setNT('Comando B-DX ANT FRONT MOBILE');
    }
    
    //#10
    if (vars.get('§POS_COMANDO_QU') == 'C') {
        vars.setNT('Comando C-DX POST');
    }
    
    //#11
    if (vars.get('§POS_COMANDO_QU') == 'D') {
        vars.setNT('Comando D-SX POST');
    }
    
    //#12
    if (vars.get('§POS_COMANDO_QU') == 'EA') {
        vars.setNT('Comando EA-SX Twist NO foro');
    }
    
    //#13
    if (vars.get('§POS_COMANDO_QU') == 'EB') {
        vars.setNT('Comando EB-DX Twist NO foro');
    }
    
    //#14
    if (vars.get('§POS_COM_CHI_VAR') == 'DX') {
        vars.setNT('Comando DX');
    }
    
    //#15
    if (vars.get('§POS_COM_CHI_VAR') == 'SX') {
        vars.setNT('Comando SX');
    }
    
    //#16
    if (vars.get('§AO_POS_COM_QU') == 'A1') {
        vars.setNT('Comando A');
    }
    
    //#17
    if (vars.get('§AO_POS_COM_QU') == 'B1') {
        vars.setNT('Comando B');
    }
    
    //#18
    if (vars.get('§AO_POS_COM_QU') == 'C1') {
        vars.setNT('Comando C');
    }
    
    //#19
    if (vars.get('§AO_POS_COM_QU') == 'D1') {
        vars.setNT('Comando D');
    }
    // GENERATED

    return vars.output;
};
