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

export const REG0010184: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0010184
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §POS_COMANDO_QU = 'A'
    // THEN:
    // *SET *NT = 'POSIZIONE A'
    // #3
    // COND:
    // §POS_COMANDO_QU = 'B'
    // THEN:
    // *SET *NT = 'POSIZIONE B'
    // #4
    // COND:
    // §POS_COMANDO_QU = 'C'
    // THEN:
    // *SET *NT = 'POSIZIONE C'
    // #5
    // COND:
    // §POS_COMANDO_QU = 'D'
    // THEN:
    // *SET *NT = 'POSIZIONE D'
    // #6
    // COND:
    // §POS_COMANDO_QU = 'EA'
    // THEN:
    // *SET *NT = 'POSIZIONE EA'
    // #7
    // COND:
    // §POS_COMANDO_QU = 'EB'
    // THEN:
    // *SET *NT = 'POSIZIONE EB'
    // #8
    // COND:
    // (§FS_13_QU = §SI) OR (§FS_13_QU_GC = §SI)
    // THEN:
    // *SET *CF = #1
    // #9
    // COND:
    // §FS_FAM2_TOLO = §SI
    // THEN:
    // *SET *CF = #1
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (vars.get('§POS_COMANDO_QU') == 'A') {
        vars.setNT('POSIZIONE A');
    }
    
    //#3
    if (vars.get('§POS_COMANDO_QU') == 'B') {
        vars.setNT('POSIZIONE B');
    }
    
    //#4
    if (vars.get('§POS_COMANDO_QU') == 'C') {
        vars.setNT('POSIZIONE C');
    }
    
    //#5
    if (vars.get('§POS_COMANDO_QU') == 'D') {
        vars.setNT('POSIZIONE D');
    }
    
    //#6
    if (vars.get('§POS_COMANDO_QU') == 'EA') {
        vars.setNT('POSIZIONE EA');
    }
    
    //#7
    if (vars.get('§POS_COMANDO_QU') == 'EB') {
        vars.setNT('POSIZIONE EB');
    }
    
    //#8
    if (vars.get('§FS_13_QU') == vars.get('§SI') || vars.get('§FS_13_QU_GC') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#9
    if (vars.get('§FS_FAM2_TOLO') == vars.get('§SI')) {
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
