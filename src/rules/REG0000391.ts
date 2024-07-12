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

export const REG0000391: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0000391
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET *CON-A = §VERN_1_COM
    // #2
    // COND:
    // §FS_ZEROGRADI = §SI
    // THEN:
    // *SET *CF = #2
    // #3
    // COND:
    // §FS_ZEROGRADI = §SI AND §SPOR > #300
    // THEN:
    // *SET *CF = #3
    // #4
    // COND:
    // §FS_APPOGGIATA = §SI AND §FS_ACC_FIN = §SI AND §SPOR > #300
    // THEN:
    // *SET *CF = #4
    // #5
    // COND:
    // §FS_ZEROGRADI = §SI AND §SPOR > #450
    // THEN:
    // *SET *CF = #4
    // #6
    // COND:
    // §FS_ACC_INI = §SI AND §FS_APPOGGIATA = §SI AND §FS_NICCHIA = §SI
    // THEN:
    // *SET *CF = #0
    // #7
    // COND:
    // §NR_SUP_GUI_AGG > #0
    // THEN:
    // *SET §DUMMYN1 = [*CF +   §NR_SUP_GUI_AGG]
    // #8
    // COND:
    // §NR_SUP_GUI_AGG > #0
    // THEN:
    // *SET *CF = §DUMMYN1
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setCON_A(vars.get('§VERN_1_COM'));
    
    //#2
    if (vars.get('§FS_ZEROGRADI') == vars.get('§SI')) {
        vars.setCF(2);
    }
    
    //#3
    if (vars.get('§FS_ZEROGRADI') == vars.get('§SI') && vars.get('§SPOR') > 300) {
        vars.setCF(3);
    }
    
    //#4
    if (vars.get('§FS_APPOGGIATA') == vars.get('§SI') && vars.get('§FS_ACC_FIN') == vars.get('§SI') && vars.get('§SPOR') > 300) {
        vars.setCF(4);
    }
    
    //#5
    if (vars.get('§FS_ZEROGRADI') == vars.get('§SI') && vars.get('§SPOR') > 450) {
        vars.setCF(4);
    }
    
    //#6
    if (vars.get('§FS_ACC_INI') == vars.get('§SI') && vars.get('§FS_APPOGGIATA') == vars.get('§SI') && vars.get('§FS_NICCHIA') == vars.get('§SI')) {
        vars.setCF(0);
    }
    
    //#7
    if (vars.get('§NR_SUP_GUI_AGG') > 0) {
        vars.setDUMMYN1(vars.getCF() + vars.get('§NR_SUP_GUI_AGG'));
    }
    
    //#8
    if (vars.get('§NR_SUP_GUI_AGG') > 0) {
        vars.setCF(vars.get('§DUMMYN1'));
    }
    // GENERATED

    return vars.output;
};
