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

export const REG0003212: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0003212
    // REQUEST:
    // """
    // #1
    // COND:
    // ((§FS_MED_ACCOPP<>§SI) AND (§FS_FAM2_QUADRA=§SI)) OR ((§FS_ACC_FIN=§SI ) AND (§FS_FAM2_QUADRA=§SI))
    // ELSE:
    // *SET *LG=''
    // """
    // RESPONSE:
    //#1
    if (((vars.get('§FS_MED_ACCOPP') != vars.get('§SI')) && (vars.get('§FS_FAM2_QUADRA') == vars.get('§SI'))) || ((vars.get('§FS_ACC_FIN') == vars.get('§SI')) && (vars.get('§FS_FAM2_QUADRA') == vars.get('§SI')))) {
    } else {
        vars.setLG("");
    }
    
    // GENERATED

    return vars.output;
};
