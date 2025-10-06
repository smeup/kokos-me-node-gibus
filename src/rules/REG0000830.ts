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

export const REG0000830: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0000830
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
    // §FS_MOT_DOP = §SI
    // THEN:
    // *SET *LG = ''
    // #3
    // COND:
    // §FS_MOT_CLI = §SI
    // THEN:
    // *SET *LG = ''
    // #4
    // COND:
    // §POS_COMANDO = '01'
    // THEN:
    // *SET *NT = 'Preassemlato a SX'
    // #5
    // COND:
    // §POS_COMANDO = '03'
    // THEN:
    // *SET *NT = 'Preassemlato a DX'
    // #6
    // COND:
    // §POS_COMANDO = '02'
    // THEN:
    // *SET *NT = 'Comando centrale'
    // #7
    // COND:
    // §POS_COMANDO = '04'
    // THEN:
    // *SET *NT = 'Posizione libera'
    // #8
    // COND:
    // §POS_COMANDO = '05'
    // THEN:
    // *SET *NT = 'Posizione lato muro'
    // #9
    // COND:
    // §POS_COMANDO = '06'
    // THEN:
    // *SET *NT = 'Posizione opp. muro'
    // #10
    // COND:
    // §POS_COMANDO_QU = 'A'
    // THEN:
    // *SET *NT = 'Comando A-SX ANT FRONT MOBILE'
    // #11
    // COND:
    // §POS_COMANDO_QU = 'B'
    // THEN:
    // *SET *NT = 'Comando B-DX ANT FRONT MOBILE'
    // #12
    // COND:
    // §POS_COMANDO_QU = 'C'
    // THEN:
    // *SET *NT = 'Comando C-DX POST'
    // #13
    // COND:
    // §POS_COMANDO_QU = 'D'
    // THEN:
    // *SET *NT = 'Comando D-SX POST'
    // #14
    // COND:
    // §POS_COMANDO_QU = 'EA'
    // THEN:
    // *SET *NT = 'Comando EA-SX Twist NO foro'
    // #15
    // COND:
    // §POS_COMANDO_QU = 'EB'
    // THEN:
    // *SET *NT = 'Comando EB-DX Twist NO foro'
    // #16
    // COND:
    // §POS_COM_CHI_VAR = 'DX'
    // THEN:
    // *SET *NT = 'Comando DX'
    // #17
    // COND:
    // §POS_COM_CHI_VAR = 'SX'
    // THEN:
    // *SET *NT = 'Comando SX'
    // #18
    // COND:
    // §FS_CLI_ZIP_TWI = §SI AND §FS_TEL1_TWI = §NO
    // THEN:
    // *SET *LG = ''
    // #19
    // COND:
    // §FS_CLI_TWI_BG = §SI AND §FS_TEL1_TWI = §NO
    // THEN:
    // *SET *LG = ''
    // #20
    // COND:
    // *CM = '210286'
    // THEN:
    // *SET *CM = '210319'
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_COM_MOTORE') == vars.get('§SI')) {
        vars.setCM(vars.get('§COD_MOTORE'));
    } else {
        vars.setLG('');
    }
    
    //#2
    if (vars.get('§FS_MOT_DOP') == vars.get('§SI')) {
        vars.setLG('');
    }
    
    //#3
    if (vars.get('§FS_MOT_CLI') == vars.get('§SI')) {
        vars.setLG('');
    }
    
    //#4
    if (vars.get('§POS_COMANDO') == '01') {
        vars.setNT('Preassemlato a SX');
    }
    
    //#5
    if (vars.get('§POS_COMANDO') == '03') {
        vars.setNT('Preassemlato a DX');
    }
    
    //#6
    if (vars.get('§POS_COMANDO') == '02') {
        vars.setNT('Comando centrale');
    }
    
    //#7
    if (vars.get('§POS_COMANDO') == '04') {
        vars.setNT('Posizione libera');
    }
    
    //#8
    if (vars.get('§POS_COMANDO') == '05') {
        vars.setNT('Posizione lato muro');
    }
    
    //#9
    if (vars.get('§POS_COMANDO') == '06') {
        vars.setNT('Posizione opp. muro');
    }
    
    //#10
    if (vars.get('§POS_COMANDO_QU') == 'A') {
        vars.setNT('Comando A-SX ANT FRONT MOBILE');
    }
    
    //#11
    if (vars.get('§POS_COMANDO_QU') == 'B') {
        vars.setNT('Comando B-DX ANT FRONT MOBILE');
    }
    
    //#12
    if (vars.get('§POS_COMANDO_QU') == 'C') {
        vars.setNT('Comando C-DX POST');
    }
    
    //#13
    if (vars.get('§POS_COMANDO_QU') == 'D') {
        vars.setNT('Comando D-SX POST');
    }
    
    //#14
    if (vars.get('§POS_COMANDO_QU') == 'EA') {
        vars.setNT('Comando EA-SX Twist NO foro');
    }
    
    //#15
    if (vars.get('§POS_COMANDO_QU') == 'EB') {
        vars.setNT('Comando EB-DX Twist NO foro');
    }
    
    //#16
    if (vars.get('§POS_COM_CHI_VAR') == 'DX') {
        vars.setNT('Comando DX');
    }
    
    //#17
    if (vars.get('§POS_COM_CHI_VAR') == 'SX') {
        vars.setNT('Comando SX');
    }
    
    //#18
    if ((vars.get('§FS_CLI_ZIP_TWI') == vars.get('§SI')) && (vars.get('§FS_TEL1_TWI') == vars.get('§NO'))) {
        vars.setLG('');
    }
    
    //#19
    if ((vars.get('§FS_CLI_TWI_BG') == vars.get('§SI')) && (vars.get('§FS_TEL1_TWI') == vars.get('§NO'))) {
        vars.setLG('');
    }
    
    //#20
    if (vars.getCM() == '210286') {
        vars.setCM('210319');
    }
    
    // GENERATED

    return vars.output;
};
