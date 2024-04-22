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

export const REG0006404: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0006404
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF=#0
    // #2
    // COND:
    // ( ( §COD_MOTORE='210260' ) OR ( §COD_MOTORE='210108' ) )  AND ( §FS_CLI_ZIP_9=§SI )
    // THEN:
    // *SET *CF=#1
    // #3
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if ((vars.get('§COD_MOTORE') == '210260' || vars.get('§COD_MOTORE') == '210108') && vars.get('§FS_CLI_ZIP_9') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#3
    vars.setCF(0);
    // GENERATED

    return vars.output;
};
