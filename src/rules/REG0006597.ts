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

export const REG0006597: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0006597
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §FS_MOT_CHERUBIN = §SI
    // THEN:
    // *SET *CF = #1
    // #3
    // COND:
    // §FS_MOT_CHERUBIN = §SI AND §FS_SUP_MOT_T01 = §SI
    // THEN:
    // *SET *CF = #2
    // #4
    // COND:
    // §FS_MOT_CHERUBIN = §SI AND §FS_SUP_MOT_T01 = §SI AND §FS_LT60 = §SI
    // THEN:
    // *SET *CF = #0
    // #5
    // COND:
    // §FS_DIM_5 = §SI
    // THEN:
    // *SET *LG = ''
    // #6
    // COND:
    // §FS_ZEROGRADI = §SI
    // THEN:
    // *SET *LG = ''
    // #7
    // COND:
    // §FS_FAM2_CLI_ZIP = §SI
    // THEN:
    // *SET *LG = ''
    // #8
    // COND:
    // §FS_NODO = §SI
    // THEN:
    // *SET *LG = ''
    // #9
    // COND:
    // §FS_MOT_CLI = §SI
    // THEN:
    // *SET *LG = ''
    // #10
    // COND:
    // §FS_MOT_CHERUBIN = §SI AND §TI_TES_MOT = '03'
    // THEN:
    // *SET *CF = #0
    // #11
    // COND:
    // §FS_SPA_60 = §SI
    // THEN:
    // *SET *LG = ''
    // #12
    // COND:
    // §FS_SPA_75 = §SI
    // THEN:
    // *SET *LG = ''
    // #13
    // COND:
    // §FS_MOTORE_CSI = §SI
    // THEN:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (vars.get('§FS_MOT_CHERUBIN') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#3
    if (vars.get('§FS_MOT_CHERUBIN') == vars.get('§SI') && vars.get('§FS_SUP_MOT_T01') == vars.get('§SI')) {
        vars.setCF(2);
    }
    
    //#4
    if (vars.get('§FS_MOT_CHERUBIN') == vars.get('§SI') && vars.get('§FS_SUP_MOT_T01') == vars.get('§SI') && vars.get('§FS_LT60') == vars.get('§SI')) {
        vars.setCF(0);
    }
    
    //#5
    if (vars.get('§FS_DIM_5') == vars.get('§SI')) {
        vars.setLG('');
    }
    
    //#6
    if (vars.get('§FS_ZEROGRADI') == vars.get('§SI')) {
        vars.setLG('');
    }
    
    //#7
    if (vars.get('§FS_FAM2_CLI_ZIP') == vars.get('§SI')) {
        vars.setLG('');
    }
    
    //#8
    if (vars.get('§FS_NODO') == vars.get('§SI')) {
        vars.setLG('');
    }
    
    //#9
    if (vars.get('§FS_MOT_CLI') == vars.get('§SI')) {
        vars.setLG('');
    }
    
    //#10
    if (vars.get('§FS_MOT_CHERUBIN') == vars.get('§SI') && vars.get('§TI_TES_MOT') == '03') {
        vars.setCF(0);
    }
    
    //#11
    if (vars.get('§FS_SPA_60') == vars.get('§SI')) {
        vars.setLG('');
    }
    
    //#12
    if (vars.get('§FS_SPA_75') == vars.get('§SI')) {
        vars.setLG('');
    }
    
    //#13
    if (vars.get('§FS_MOTORE_CSI') == vars.get('§SI')) {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
