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

export const REG0006128: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0006128
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
    // #4
    // COND:
    // §POS_COMANDO_QU = 'A'
    // THEN:
    // *SET *NT = 'POSIZIONE A'
    // #5
    // COND:
    // §POS_COMANDO_QU = 'B'
    // THEN:
    // *SET *NT = 'POSIZIONE B'
    // #6
    // COND:
    // §POS_COMANDO_QU = 'C'
    // THEN:
    // *SET *NT = 'POSIZIONE C'
    // #7
    // COND:
    // §POS_COMANDO_QU = 'D'
    // THEN:
    // *SET *NT = 'POSIZIONE D'
    // #8
    // COND:
    // §POS_COMANDO_QU = 'EA'
    // THEN:
    // *SET *NT = 'POSIZIONE EA'
    // #9
    // COND:
    // §POS_COMANDO_QU = 'EB'
    // THEN:
    // *SET *NT = 'POSIZIONE EB'
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (vars.get('§FS_CLI_ZIP_9') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#3
    
    //#4
    if (vars.get('§POS_COMANDO_QU') == 'A') {
        vars.setNT('POSIZIONE A');
    }
    
    //#5
    if (vars.get('§POS_COMANDO_QU') == 'B') {
        vars.setNT('POSIZIONE B');
    }
    
    //#6
    if (vars.get('§POS_COMANDO_QU') == 'C') {
        vars.setNT('POSIZIONE C');
    }
    
    //#7
    if (vars.get('§POS_COMANDO_QU') == 'D') {
        vars.setNT('POSIZIONE D');
    }
    
    //#8
    if (vars.get('§POS_COMANDO_QU') == 'EA') {
        vars.setNT('POSIZIONE EA');
    }
    
    //#9
    if (vars.get('§POS_COMANDO_QU') == 'EB') {
        vars.setNT('POSIZIONE EB');
    }
    // GENERATED

    return vars.output;
};
