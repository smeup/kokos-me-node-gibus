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

export const REG0007581: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0007581
    // REQUEST:
    // """
    // #1
    // COND:
    // §_AR='TS0017' OR  §_AR='TS0031' OR  §_AR='TS0089' OR  §_AR='TL0019'
    // THEN:
    // *SET *CF=#0
    // #2
    // COND:
    // §FS_TEL_RUL = §SI OR §FS_TEL_RUL_FRO = §SI
    // THEN:
    // *SET *CF = #0
    // #3
    // COND:
    // §FS_NOTELO = §SI
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    if (vars.get('_AR') == 'TS0017' || vars.get('_AR') == 'TS0031' || vars.get('_AR') == 'TS0089' || vars.get('_AR') == 'TL0019') {
        vars.setCF(0);
    }
    
    //#2
    if (vars.get('FS_TEL_RUL') == vars.get('§SI') || vars.get('FS_TEL_RUL_FRO') == vars.get('§SI')) {
        vars.setCF(0);
    }
    
    //#3
    if (vars.get('FS_NOTELO') == vars.get('§SI')) {
        vars.setCF(0);
    }
    
    // GENERATED

    return vars.output;
};
