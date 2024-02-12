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

export const REG0002821: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0002821
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §L_SPA_GUI > #0 AND §NR_SPA_GUI >= #1
    // THEN:
    // *SET *CF = [§L_SPA_GUI / #100]
    // #3
    // COND:
    // §L_SPA_GUI_SX > #0 AND §FS_CHI_VAR = §SI
    // THEN:
    // *SET *CF = [§L_SPA_GUI_SX / #100]
    // #4
    // COND:
    // §FS_CHI_VAR = §SI AND §FS_AC = §SI
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    //#2
    if (vars.get('§L_SPA_GUI') > 0 && vars.get('§NR_SPA_GUI') >= 1) {
        vars.setCF(vars.get('§L_SPA_GUI') / 100);
    }
    //#3
    if (vars.get('§L_SPA_GUI_SX') > 0 && vars.get('§FS_CHI_VAR') == vars.get('§SI')) {
        vars.setCF(vars.get('§L_SPA_GUI_SX') / 100);
    }
    //#4
    if (vars.get('§FS_CHI_VAR') == vars.get('§SI') && vars.get('§FS_AC') == vars.get('§SI')) {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
