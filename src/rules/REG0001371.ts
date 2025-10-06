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

export const REG0001371: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0001371
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_ACCOPPIATA = §SI
    // ELSE:
    // *SET *LG = ''
    // #2
    // COND:
    // §FS_ACC_FIN = §SI
    // ELSE:
    // *SET *LG = ''
    // #3
    // COND:
    // §FS_ZEROGRADI = §SI
    // THEN:
    // *SET *CF = #2
    // #4
    // COND:
    // §FS_ZEROGRADI = §SI AND §SPOR > #300
    // THEN:
    // *SET *CF = #3
    // #5
    // COND:
    // §FS_ZEROGRADI = §SI AND §SPOR > #450
    // THEN:
    // *SET *CF = #4
    // #6
    // COND:
    // §NR_SUP_GUI_AGG > #0
    // THEN:
    // *SET §DUMMYN1 = *CF
    // #7
    // COND:
    // §NR_SUP_GUI_AGG > #0
    // THEN:
    // *SET *CF = [§DUMMYN1 + §NR_SUP_GUI_AGG]
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_ACCOPPIATA') == vars.get('§SI')) {
    } else {
        vars.setLG('');
    }
    
    //#2
    if (vars.get('§FS_ACC_FIN') == vars.get('§SI')) {
    } else {
        vars.setLG('');
    }
    
    //#3
    if (vars.get('§FS_ZEROGRADI') == vars.get('§SI')) {
        vars.setCF(2);
    }
    
    //#4
    if ((vars.get('§FS_ZEROGRADI') == vars.get('§SI')) && (vars.get('§SPOR') > 300)) {
        vars.setCF(3);
    }
    
    //#5
    if ((vars.get('§FS_ZEROGRADI') == vars.get('§SI')) && (vars.get('§SPOR') > 450)) {
        vars.setCF(4);
    }
    
    //#6
    if (vars.get('§NR_SUP_GUI_AGG') > 0) {
        vars.setDUMMYN1(vars.getCF());
    }
    
    //#7
    if (vars.get('§NR_SUP_GUI_AGG') > 0) {
        vars.setCF(vars.get('§DUMMYN1') + vars.get('§NR_SUP_GUI_AGG'));
    }
    // GENERATED

    return vars.output;
};
