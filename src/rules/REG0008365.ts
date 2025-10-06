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

export const REG0008365: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0008365
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §FS_MOT_CHERUBIN = §SI AND §FS_SPE_CHE = #1
    // THEN:
    // *SET *CF = #4
    // #3
    // COND:
    // §FS_MOT_SOMFY = §SI AND §FS_SPE_CHE = #1
    // THEN:
    // *SET *CF = #5
    // #4
    // COND:
    // §FS_ZEROGRADI = §SI AND §FS_ZIP = §SI
    // ELSE:
    // *SET *LG = ''
    // #5
    // COND:
    // §FS_MOT_CLI = §SI
    // THEN:
    // *SET *LG = ''
    // #6
    // COND:
    // §TI_TES_MOT = '03'
    // THEN:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (vars.get('§FS_MOT_CHERUBIN') == vars.get('§SI') && vars.get('§FS_SPE_CHE') == 1) {
        vars.setCF(4);
    }
    
    //#3
    if (vars.get('§FS_MOT_SOMFY') == vars.get('§SI') && vars.get('§FS_SPE_CHE') == 1) {
        vars.setCF(5);
    }
    
    //#4
    if (vars.get('§FS_ZEROGRADI') == vars.get('§SI') && vars.get('§FS_ZIP') == vars.get('§SI')) {
    } else {
        vars.setLG('');
    }
    
    //#5
    if (vars.get('§FS_MOT_CLI') == vars.get('§SI')) {
        vars.setLG('');
    }
    
    //#6
    if (vars.get('§TI_TES_MOT') == '03') {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
