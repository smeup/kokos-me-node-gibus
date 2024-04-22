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

export const REG0013259: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0013259
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_GUI_CLI_ZIP = §SI AND §TI_GU_T01 = '02'
    // THEN:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_GUI_CLI_ZIP') == vars.get('§SI') && vars.get('§TI_GU_T01') == '02') {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
