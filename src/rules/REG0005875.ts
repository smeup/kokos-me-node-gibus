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

export const REG0005875: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0005875
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_FAM2_JEANS=§SI
    // ELSE:
    // *SET *LG=''
    // #2
    // COND:
    // ( ( §FS_TRA_LAT_SX=§SI ) AND ( §L_TR1_SP >#0 ) ) OR ( ( §L_TR2_SP >#0 ) AND ( §FS_TRA_LAT_DX=§SI ) )
    // THEN:
    // *SET *CF=#1
    // #3
    // COND:
    // ( ( §FS_TRA_LAT_SX=§SI ) AND ( §L_TR1_SP >#0 ) ) AND ( ( §L_TR2_SP >#0 ) AND ( §FS_TRA_LAT_DX=§SI ) )
    // THEN:
    // *SET *CF=#2
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_FAM2_JEANS') == vars.get('§SI')) {
    } else {
        vars.setLG("");
    }
    //#2
    if (((vars.get('§FS_TRA_LAT_SX') == vars.get('§SI')) && (vars.get('§L_TR1_SP') > 0)) || ((vars.get('§L_TR2_SP') > 0) && (vars.get('§FS_TRA_LAT_DX') == vars.get('§SI')))) {
        vars.setCF(1);
    }
    //#3
    if (((vars.get('§FS_TRA_LAT_SX') == vars.get('§SI')) && (vars.get('§L_TR1_SP') > 0)) && ((vars.get('§L_TR2_SP') > 0) && (vars.get('§FS_TRA_LAT_DX') == vars.get('§SI')))) {
        vars.setCF(2);
    }
    // GENERATED

    return vars.output;
};
