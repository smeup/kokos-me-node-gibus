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

export const REG0003191: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0003191
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF=#0
    // *SET *CON-A = §VERN_1_COM
    // #2
    // COND:
    // ( §FS_TRA_LAT_SX=§SI OR §FS_TRA_LAT_DX=§SI )
    // THEN:
    // *SET *CF=#1
    // #3
    // COND:
    // ( §FS_TRA_LAT_SX=§SI AND §FS_TRA_LAT_DX=§SI )
    // THEN:
    // *SET *CF=#2
    // #4
    // COND:
    // ( §FS_FAM2_JEANS=§SI ) OR ( §FS_FAM2_165=§SI ) OR ( §FS_FAM2_ELITE=§SI )
    // THEN:
    // *SET *LG=''
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setCON_A(vars.get('§VERN_1_COM'));
    
    //#2
    if (vars.get('§FS_TRA_LAT_SX') == vars.get('§SI') || vars.get('§FS_TRA_LAT_DX') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#3
    if (vars.get('§FS_TRA_LAT_SX') == vars.get('§SI') && vars.get('§FS_TRA_LAT_DX') == vars.get('§SI')) {
        vars.setCF(2);
    }
    
    //#4
    if (vars.get('§FS_FAM2_JEANS') == vars.get('§SI') || vars.get('§FS_FAM2_165') == vars.get('§SI') || vars.get('§FS_FAM2_ELITE') == vars.get('§SI')) {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
