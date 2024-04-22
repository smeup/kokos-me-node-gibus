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

export const REG0004655: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0004655
    // REQUEST:
    // """
    // #1
    // COND:
    // (§FS_ACC_PRI<>§SI) AND (§FS_ACC_PRI_02<>§SI) AND (§TI_ACC_TWI<>'01') AND (§TI_ACC_TWI<>'02')
    // ELSE:
    // *SET *LG=''
    // """
    // RESPONSE:
    //#1
    if ((vars.get('§FS_ACC_PRI') != vars.get('§SI')) && (vars.get('§FS_ACC_PRI_02') != vars.get('§SI')) && (vars.get('§TI_ACC_TWI') !== '01') && (vars.get('§TI_ACC_TWI') !== '02')) {
    } else {
        vars.setLG("");
    }
    // GENERATED

    return vars.output;
};
