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

export const REG0002965: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0002965
    // REQUEST:
    // """
    // #1
    // COND:
    // §TI_RUL_TS = '07'
    // ELSE:
    // *SET *LG = ''
    // #2
    // COND:
    // §FS_COMBI_250 = §SI OR §FS_COMBI_60 = §SI
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    if (vars.get('§TI_RUL_TS') == '07') {
    } else {
        vars.setLG('');
    }
    
    //#2
    if (vars.get('§FS_COMBI_250') == vars.get('§SI') || vars.get('§FS_COMBI_60') == vars.get('§SI')) {
        vars.setCF(0);
    }
    
    // GENERATED

    return vars.output;
};
