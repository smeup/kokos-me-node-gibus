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

export const REG0005725: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0005725
    // REQUEST:
    // """
    // #1
    // COND:
    // ( §COD_MOTORE <> '' ) AND ( §FS_MOT_DOP <>§SI )
    // THEN:
    // *SET *CM=§COD_MOTORE
    // #2
    // COND:
    // ( §COD_MOTORE <> '' ) AND ( §FS_MOT_DOP = §SI ) AND ( §TIPO_MOT_HID = '150' )
    // THEN:
    // *SET *CM='210053'
    // *SET *CF=#2
    // """
    // RESPONSE:
    //#1
    if ((vars.get('§COD_MOTORE') != '') && (vars.get('§FS_MOT_DOP') != vars.get('§SI'))) {
        vars.setCM(vars.get('§COD_MOTORE'));
    }
    //#2
    if ((vars.get('§COD_MOTORE') != '') && (vars.get('§FS_MOT_DOP') == vars.get('§SI')) && (vars.get('§TIPO_MOT_HID') == '150')) {
        vars.setCM('210053');
        vars.setCF(2);
    }
    // GENERATED

    return vars.output;
};
