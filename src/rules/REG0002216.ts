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

export const REG0002216: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0002216
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_FAM2_TEKA = §SI
    // THEN:
    // *SET *CON-A = §VERN_1_COM
    // ELSE:
    // *SET *LG = ''
    // #2
    // COND:
    // §ATT_TEKA = 'A'
    // THEN:
    // *SET *NT = 'ATTACCO A'
    // #3
    // COND:
    // §ATT_TEKA = 'B'
    // THEN:
    // *SET *NT = 'ATTACCO B'
    // #4
    // COND:
    // §ATT_TEKA = 'C'
    // THEN:
    // *SET *NT = 'ATTACCO C'
    // #5
    // COND:
    // §ATT_TEKA = 'D'
    // THEN:
    // *SET *NT = 'ATTACCO D'
    // #6
    // COND:
    // §ATT_TEKA = 'E'
    // THEN:
    // *SET *NT = 'ATTACCO E'
    // #7
    // COND:
    // §ATT_TEKA = 'F'
    // THEN:
    // *SET *NT = 'ATTACCO F'
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_FAM2_TEKA') == vars.get('§SI')) {
        vars.setCON_A(vars.get('§VERN_1_COM'));
    } else {
        vars.setLG('');
    }
    
    //#2
    if (vars.get('§ATT_TEKA') == 'A') {
        vars.setNT('ATTACCO A');
    }
    
    //#3
    if (vars.get('§ATT_TEKA') == 'B') {
        vars.setNT('ATTACCO B');
    }
    
    //#4
    if (vars.get('§ATT_TEKA') == 'C') {
        vars.setNT('ATTACCO C');
    }
    
    //#5
    if (vars.get('§ATT_TEKA') == 'D') {
        vars.setNT('ATTACCO D');
    }
    
    //#6
    if (vars.get('§ATT_TEKA') == 'E') {
        vars.setNT('ATTACCO E');
    }
    
    //#7
    if (vars.get('§ATT_TEKA') == 'F') {
        vars.setNT('ATTACCO F');
    }
    // GENERATED

    return vars.output;
};
