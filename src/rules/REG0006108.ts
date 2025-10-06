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

export const REG0006108: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0006108
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CM = §COD_MOT_2
    // #2
    // COND:
    // §POS_COMANDO = '01'
    // THEN:
    // *SET *NT = '2°com Preassemlato a SX'
    // #3
    // COND:
    // §POS_COMANDO = '03'
    // THEN:
    // *SET *NT = '2° com Preassemlato a DX'
    // #4
    // COND:
    // §POS_COMANDO = '02'
    // THEN:
    // *SET *NT = '2° com Comando centrale'
    // #5
    // COND:
    // §POS_COMANDO = '04'
    // THEN:
    // *SET *NT = '2° com posizione libera'
    // #6
    // COND:
    // §POS_COMANDO = '05'
    // THEN:
    // *SET *NT = '2° com Posizione lato muro'
    // #7
    // COND:
    // §POS_COMANDO = '06'
    // THEN:
    // *SET *NT = '2° com Posizione opp. muro'
    // #8
    // COND:
    // §POS_COMANDO_QU = 'A'
    // THEN:
    // *SET *NT = '2° com Comando A-SX ANT FRONT MOBILE'
    // #9
    // COND:
    // §POS_COMANDO_QU = 'B'
    // THEN:
    // *SET *NT = '2° com Comando B-DX ANT FRONT MOBILE'
    // #10
    // COND:
    // §POS_COMANDO_QU = 'C'
    // THEN:
    // *SET *NT = '2° com Comando C-DX POST'
    // #11
    // COND:
    // §POS_COMANDO_QU = 'D'
    // THEN:
    // *SET *NT = '2° com Comando D-SX POST'
    // #12
    // COND:
    // §POS_COMANDO_QU = 'EA'
    // THEN:
    // *SET *NT = '2° com Comando EA-SX Twist NO foro'
    // #13
    // COND:
    // §POS_COMANDO_QU = 'EB'
    // THEN:
    // *SET *NT = '2° com Comando EB-DX Twist NO foro'
    // #14
    // COND:
    // §POS_COM_CHI_VAR = 'DX'
    // THEN:
    // *SET *NT = '2° com Comando DX'
    // #15
    // COND:
    // §POS_COM_CHI_VAR = 'SX'
    // THEN:
    // *SET *NT = '2° com Comando SX'
    // #16
    // COND:
    // §FS_CLI_ZIP_TWI = §SI AND §FS_TEL2_TWI = §NO
    // THEN:
    // *SET *LG = ''
    // #17
    // COND:
    // §FS_CLI_TWI_BG = §SI AND §FS_TEL2_TWI = §NO
    // THEN:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    vars.setCM(vars.get('§COD_MOT_2'));
    
    //#2
    if (vars.get('§POS_COMANDO') == '01') {
        vars.setNT('2°com Preassemlato a SX');
    }
    
    //#3
    if (vars.get('§POS_COMANDO') == '03') {
        vars.setNT('2° com Preassemlato a DX');
    }
    
    //#4
    if (vars.get('§POS_COMANDO') == '02') {
        vars.setNT('2° com Comando centrale');
    }
    
    //#5
    if (vars.get('§POS_COMANDO') == '04') {
        vars.setNT('2° com posizione libera');
    }
    
    //#6
    if (vars.get('§POS_COMANDO') == '05') {
        vars.setNT('2° com Posizione lato muro');
    }
    
    //#7
    if (vars.get('§POS_COMANDO') == '06') {
        vars.setNT('2° com Posizione opp. muro');
    }
    
    //#8
    if (vars.get('§POS_COMANDO_QU') == 'A') {
        vars.setNT('2° com Comando A-SX ANT FRONT MOBILE');
    }
    
    //#9
    if (vars.get('§POS_COMANDO_QU') == 'B') {
        vars.setNT('2° com Comando B-DX ANT FRONT MOBILE');
    }
    
    //#10
    if (vars.get('§POS_COMANDO_QU') == 'C') {
        vars.setNT('2° com Comando C-DX POST');
    }
    
    //#11
    if (vars.get('§POS_COMANDO_QU') == 'D') {
        vars.setNT('2° com Comando D-SX POST');
    }
    
    //#12
    if (vars.get('§POS_COMANDO_QU') == 'EA') {
        vars.setNT('2° com Comando EA-SX Twist NO foro');
    }
    
    //#13
    if (vars.get('§POS_COMANDO_QU') == 'EB') {
        vars.setNT('2° com Comando EB-DX Twist NO foro');
    }
    
    //#14
    if (vars.get('§POS_COM_CHI_VAR') == 'DX') {
        vars.setNT('2° com Comando DX');
    }
    
    //#15
    if (vars.get('§POS_COM_CHI_VAR') == 'SX') {
        vars.setNT('2° com Comando SX');
    }
    
    //#16
    if ((vars.get('§FS_CLI_ZIP_TWI') == vars.get('§SI')) && (vars.get('§FS_TEL2_TWI') == vars.get('§NO'))) {
        vars.setLG('');
    }
    
    //#17
    if ((vars.get('§FS_CLI_TWI_BG') == vars.get('§SI')) && (vars.get('§FS_TEL2_TWI') == vars.get('§NO'))) {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
