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

export const REG0002297: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0002297
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_RULLO_80 = §SI AND §FS_ZIP = §SI
    // ELSE:
    // *SET *LG = ''
    // #2
    // COND:
    // §FS_13_QU = §SI OR §FS_VERTI90 = §SI OR §FS_VERTI90_Z_BA = §SI
    // THEN:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_RULLO_80') == vars.get('§SI') && vars.get('§FS_ZIP') == vars.get('§SI')) {
    } else {
        vars.setLG('');
    }
    
    //#2
    if (vars.get('§FS_13_QU') == vars.get('§SI') || vars.get('§FS_VERTI90') == vars.get('§SI') || vars.get('§FS_VERTI90_Z_BA') == vars.get('§SI')) {
        vars.setLG('');
    }
    
    // GENERATED

    return vars.output;
};
