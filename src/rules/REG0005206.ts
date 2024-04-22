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

export const REG0005206: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0005206
    // REQUEST:
    // """
    // #1
    // COND:
    // ( §FS_FAM2_ADDL=§SI ) AND  (§LA_ADD_LAT=§SI ) AND (§FS_ACC_PRI<>§SI ) AND (§FS_ACC_PRI_02<>§SI ) AND                            ((§L_SPO_MON_ANT1 > #0 ) OR (§FS_MON_ANT1<>§SI ) OR (§L_SBA_ANT1 >#0))
    // THEN:
    // *SET *CF=#0
    // """
    // RESPONSE:
    //#1
    if ((vars.get('§FS_FAM2_ADDL') == vars.get('§SI')) && (vars.get('§LA_ADD_LAT') == vars.get('§SI')) && (vars.get('§FS_ACC_PRI') != vars.get('§SI')) && (vars.get('§FS_ACC_PRI_02') != vars.get('§SI')) && ((vars.get('§L_SPO_MON_ANT1') > 0) || (vars.get('§FS_MON_ANT1') != vars.get('§SI')) || (vars.get('§L_SBA_ANT1') > 0))) {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
