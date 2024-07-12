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

export const REG0006126: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0006126
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §FS_CLI_ZIP_9 = §SI
    // THEN:
    // *SET *CF = #1
    // #3
    // COND:
    // §POS_COMANDO_QU = 'A'
    // THEN:
    // *SET *NT = 'POSIZIONE A'
    // #4
    // COND:
    // §POS_COMANDO_QU = 'B'
    // THEN:
    // *SET *NT = 'POSIZIONE B'
    // #5
    // COND:
    // §POS_COMANDO_QU = 'C'
    // THEN:
    // *SET *NT = 'POSIZIONE C'
    // #6
    // COND:
    // §POS_COMANDO_QU = 'D'
    // THEN:
    // *SET *NT = 'POSIZIONE D'
    // #7
    // COND:
    // §POS_COMANDO_QU = 'EA'
    // THEN:
    // *SET *NT = 'POSIZIONE A'
    // #8
    // COND:
    // §POS_COMANDO_QU = 'EB'
    // THEN:
    // *SET *NT = 'POSIZIONE B'
    // #9
    // COND:
    // §AO_POS_COM_QU = 'A1'
    // THEN:
    // *SET *NT = 'POSIZIONE A'
    // #10
    // COND:
    // §AO_POS_COM_QU = 'B1'
    // THEN:
    // *SET *NT = 'POSIZIONE B'
    // #11
    // COND:
    // §AO_POS_COM_QU = 'C1'
    // THEN:
    // *SET *NT = 'POSIZIONE C'
    // #12
    // COND:
    // §AO_POS_COM_QU = 'D1'
    // THEN:
    // *SET *NT = 'POSIZIONE D'
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (vars.get('§FS_CLI_ZIP_9') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#3
    if (vars.get('§POS_COMANDO_QU') == 'A') {
        vars.setNT('POSIZIONE A');
    }
    
    //#4
    if (vars.get('§POS_COMANDO_QU') == 'B') {
        vars.setNT('POSIZIONE B');
    }
    
    //#5
    if (vars.get('§POS_COMANDO_QU') == 'C') {
        vars.setNT('POSIZIONE C');
    }
    
    //#6
    if (vars.get('§POS_COMANDO_QU') == 'D') {
        vars.setNT('POSIZIONE D');
    }
    
    //#7
    if (vars.get('§POS_COMANDO_QU') == 'EA') {
        vars.setNT('POSIZIONE A');
    }
    
    //#8
    if (vars.get('§POS_COMANDO_QU') == 'EB') {
        vars.setNT('POSIZIONE B');
    }
    
    //#9
    if (vars.get('§AO_POS_COM_QU') == 'A1') {
        vars.setNT('POSIZIONE A');
    }
    
    //#10
    if (vars.get('§AO_POS_COM_QU') == 'B1') {
        vars.setNT('POSIZIONE B');
    }
    
    //#11
    if (vars.get('§AO_POS_COM_QU') == 'C1') {
        vars.setNT('POSIZIONE C');
    }
    
    //#12
    if (vars.get('§AO_POS_COM_QU') == 'D1') {
        vars.setNT('POSIZIONE D');
    }
    // GENERATED

    return vars.output;
};
