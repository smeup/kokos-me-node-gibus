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

export const REG0000773: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0000773
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A = §VERN_1_COM
    // *SET *CF = #0
    // #2
    // COND:
    // (§FS_SP_0_GC = §SI) AND (§FIX_GUIDE = '05')
    // THEN:
    // *SET *CF = #2
    // #3
    // COND:
    // §FS_TEKA_GC = §SI
    // THEN:
    // *SET *CF = §NR_FIX_GUI_PAR
    // """
    // RESPONSE:
    //#1
    vars.setCON_A(vars.get('§VERN_1_COM'));
    vars.setCF(0);
    
    //#2
    if ((vars.get('§FS_SP_0_GC') == vars.get('§SI')) && (vars.get('§FIX_GUIDE') == '05')) {
        vars.setCF(2);
    }
    
    //#3
    if (vars.get('§FS_TEKA_GC') == vars.get('§SI')) {
        vars.setCF(vars.get('§NR_FIX_GUI_PAR'));
    }
    // GENERATED

    return vars.output;
};
