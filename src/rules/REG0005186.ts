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

export const REG0005186: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0005186
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF=#0
    // #2
    // COND:
    // ( §FS_SUP_LAT_SX=§SI ) OR ( §FS_SUP_LAT_DX=§SI )
    // THEN:
    // *SET *CF=#1
    // #3
    // COND:
    // ( §FS_SUP_LAT_SX=§SI ) AND ( §FS_SUP_LAT_DX=§SI )
    // THEN:
    // *SET *CF=#2
    // #4
    // COND:
    // ( §FS_FAM2_ADDL=§SI ) AND ( §SPOR >#600 ) AND ( §FS_ADD_MUR=§SI ) AND ( §FS_FAM2_AZIMUT = §SI )
    // THEN:
    // *SET *CF=#1
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if ((vars.get('§FS_SUP_LAT_SX') == vars.get('§SI')) || (vars.get('§FS_SUP_LAT_DX') == vars.get('§SI'))) {
        vars.setCF(1);
    }
    
    //#3
    if ((vars.get('§FS_SUP_LAT_SX') == vars.get('§SI')) && (vars.get('§FS_SUP_LAT_DX') == vars.get('§SI'))) {
        vars.setCF(2);
    }
    
    //#4
    if ((vars.get('§FS_FAM2_ADDL') == vars.get('§SI')) && (vars.get('§SPOR') > 600) && (vars.get('§FS_ADD_MUR') == vars.get('§SI')) && (vars.get('§FS_FAM2_AZIMUT') == vars.get('§SI'))) {
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
