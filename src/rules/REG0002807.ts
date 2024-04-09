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

export const REG0002807: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0002807
    // REQUEST:
    // """
    // #1
    // COND:
    // §L_RULLO_TG > #0 AND §FS_TEL_RUL = §SI
    // THEN:
    // *SET *CON-A = '0000'
    // *SET *CON-B = §L_RULLO_TG
    // ELSE:
    // *SET *LG = ''
    // #2
    // COND:
    // §FS_TEL_RUL = §SI AND §FS_TEL_TS = §SI
    // THEN:
    // *SET *LG = ''
    // #3
    // COND:
    // §FS_ROLLO = §SI
    // THEN:
    // *SET *CON-A = '0103'
    // """
    // RESPONSE:
    //#1
    if (vars.get('§L_RULLO_TG') > 0 && vars.get('§FS_TEL_RUL') == vars.get('§SI')) {
        vars.setCON_A('0000');
        vars.setCON_B(vars.get('§L_RULLO_TG'));
    } else {
        vars.setLG('');
    }
    
    //#2
    if (vars.get('§FS_TEL_RUL') == vars.get('§SI') && vars.get('§FS_TEL_TS') == vars.get('§SI')) {
        vars.setLG('');
    }
    
    //#3
    if (vars.get('§FS_ROLLO') == vars.get('§SI')) {
        vars.setCON_A('0103');
    }
    // GENERATED

    return vars.output;
};
