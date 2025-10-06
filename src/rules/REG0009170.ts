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

export const REG0009170: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0009170
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §FS_ZIP = §SI AND §FS_ZEROGRADI = §SI
    // THEN:
    // *SET *CF = §NR_MOL_GUI_ZIP
    // #3
    // COND:
    // §FS_GUI_ZER = §SI
    // THEN:
    // *SET *CF = §NR_MOL_GUI_ZIP
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    //#2
    if (vars.get('§FS_ZIP') == vars.get('§SI') && vars.get('§FS_ZEROGRADI') == vars.get('§SI')) {
        vars.setCF(vars.get('§NR_MOL_GUI_ZIP'));
    }
    //#3
    if (vars.get('§FS_GUI_ZER') == vars.get('§SI')) {
        vars.setCF(vars.get('§NR_MOL_GUI_ZIP'));
    }
    // GENERATED

    return vars.output;
};
