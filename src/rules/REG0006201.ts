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

export const REG0006201: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0006201
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF=#0
    // #2
    // COND:
    // ( ( §FS_TRA_LAT_SX=§SI ) OR ( §FS_TRA_LAT_DX=§SI )) AND ( §FS_FAM2_165=§SI ) AND ( ( §TRA_LAT_SX2 >#0 ) OR                    ( §TRA_LAT_DX2 >#0 ) )
    // THEN:
    // *SET *CF=#1
    // #3
    // COND:
    // ( ( §FS_TRA_LAT_SX=§SI ) AND ( §FS_TRA_LAT_DX=§SI )) AND ( §FS_FAM2_165=§SI ) AND ( ( §TRA_LAT_SX2 >#0 ) AND                   ( §TRA_LAT_DX2 >#0 ) )
    // THEN:
    // *SET *CF=#2
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if ((vars.get('§FS_TRA_LAT_SX') == vars.get('§SI') || vars.get('§FS_TRA_LAT_DX') == vars.get('§SI')) && vars.get('§FS_FAM2_165') == vars.get('§SI') && (vars.get('§TRA_LAT_SX2') > 0 || vars.get('§TRA_LAT_DX2') > 0)) {
        vars.setCF(1);
    }
    
    //#3
    if ((vars.get('§FS_TRA_LAT_SX') == vars.get('§SI') && vars.get('§FS_TRA_LAT_DX') == vars.get('§SI')) && vars.get('§FS_FAM2_165') == vars.get('§SI') && (vars.get('§TRA_LAT_SX2') > 0 && vars.get('§TRA_LAT_DX2') > 0)) {
        vars.setCF(2);
    }
    // GENERATED

    return vars.output;
};
