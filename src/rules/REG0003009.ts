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

export const REG0003009: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0003009
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_TEL_RUL = §SI AND §FS_TEL_TS <> §SI
    // THEN:
    // *SET *LG = ''
    // #2
    // COND:
    // §FS_CAM_TS = §SI
    // THEN:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_TEL_RUL') == vars.get('§SI') && vars.get('§FS_TEL_TS') != vars.get('§SI')) {
        vars.setLG('');
    }
    
    //#2
    if (vars.get('§FS_CAM_TS') == vars.get('§SI')) {
        vars.setLG('');
    }
    
    // GENERATED

    return vars.output;
};
