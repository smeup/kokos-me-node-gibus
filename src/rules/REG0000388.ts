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

export const REG0000388: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0000388
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §FS_ZEROGRADI = §SI AND §FS_NICCHIA = §SI AND §FS_ACC_FIN <> §SI
    // THEN:
    // *SET *CF = [#2 + §NR_SUP_GUI_AGG]
    // #3
    // COND:
    // §FS_ZEROGRADI = §SI AND §FS_NICCHIA = §SI AND §FS_ACC_FIN <> §SI AND §SPOR > 300
    // THEN:
    // *SET *CF = [#3 + §NR_SUP_GUI_AGG]
    // #4
    // COND:
    // §FS_ZEROGRADI = §SI AND §FS_NICCHIA = §SI AND §FS_ACC_FIN <> §SI AND §SPOR > 450
    // THEN:
    // *SET *CF = [#4 + §NR_SUP_GUI_AGG]
    // #5
    // COND:
    // §FS_ZEROGRADI = §SI AND §FS_FRANGITRATTA = §SI AND §FS_SLIDE = §SI
    // THEN:
    // *SET §DUMMYN1 = [*CF + §NR_FRANG_AGG]
    // #6
    // COND:
    // §FS_ZEROGRADI = §SI AND §FS_FRANGITRATTA = §SI AND §FS_SLIDE = §SI
    // THEN:
    // *SET *CF = §DUMMYN1
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (vars.get('§FS_ZEROGRADI') == vars.get('§SI') && vars.get('§FS_NICCHIA') == vars.get('§SI') && vars.get('§FS_ACC_FIN') != vars.get('§SI')) {
        vars.setCF(2 + vars.get('§NR_SUP_GUI_AGG'));
    }
    
    //#3
    if (vars.get('§FS_ZEROGRADI') == vars.get('§SI') && vars.get('§FS_NICCHIA') == vars.get('§SI') && vars.get('§FS_ACC_FIN') != vars.get('§SI') && vars.get('§SPOR') > 300) {
        vars.setCF(3 + vars.get('§NR_SUP_GUI_AGG'));
    }
    
    //#4
    if (vars.get('§FS_ZEROGRADI') == vars.get('§SI') && vars.get('§FS_NICCHIA') == vars.get('§SI') && vars.get('§FS_ACC_FIN') != vars.get('§SI') && vars.get('§SPOR') > 450) {
        vars.setCF(4 + vars.get('§NR_SUP_GUI_AGG'));
    }
    
    //#5
    if (vars.get('§FS_ZEROGRADI') == vars.get('§SI') && vars.get('§FS_FRANGITRATTA') == vars.get('§SI') && vars.get('§FS_SLIDE') == vars.get('§SI')) {
        vars.setDUMMYN1(vars.getCF() + vars.get('§NR_FRANG_AGG'));
    }
    
    //#6
    if (vars.get('§FS_ZEROGRADI') == vars.get('§SI') && vars.get('§FS_FRANGITRATTA') == vars.get('§SI') && vars.get('§FS_SLIDE') == vars.get('§SI')) {
        vars.setCF(vars.get('§DUMMYN1'));
    }
    // GENERATED

    return vars.output;
};
