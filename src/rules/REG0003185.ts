/**
 * This rule represents a template implementation of a rule.
 * It takes an input value and performs some operations on it using the Variables class.
 * The result is returned as the output value.
 * 
 * @param iv The input value for the rule.
 * @returns The output value after applying the rule.
 */
import { Rule } from "../types/general";
import { Variables } from "../converter/variables";

export const REG0003185: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0003185
    // REQUEST:
    // """
    // #1
    // COND:
    // ( §FS_TRA_LAT_SX=§SI ) OR ( §FS_TRA_LAT_DX=§SI )
    // ELSE:
    // *SET *LG=''
    // #2
    // COND:
    // ( §FS_FAM2_PAV=§SI )
    // THEN:
    // *SET *LG=''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_TRA_LAT_SX') == vars.get('§SI') || vars.get('§FS_TRA_LAT_DX') == vars.get('§SI')) {
    } else {
        vars.setLG('');
    }
    
    //#2
    if (vars.get('§FS_FAM2_PAV') == vars.get('§SI')) {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
