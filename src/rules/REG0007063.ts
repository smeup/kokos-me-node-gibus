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

export const REG0007063: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0007063
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §FS_MOLLA_COMP = §SI AND §FS_ARG_MAG <> §SI
    // ELSE:
    // *SET *LG = ''
    // #3
    // COND:
    // §FS_DIM_250 = §SI OR §FS_DIM_300 = §SI
    // THEN:
    // *SET *CF = #1
    // #4
    // COND:
    // §FS_MAR_30_13 = §SI OR §FS_MAR_30_50 = §SI OR §FS_MAR_35_13 = §SI
    // THEN:
    // *SET *CF = #1
    // #5
    // COND:
    // §FS_SPA_60 = §SI OR §FS_SPA_75 = §SI
    // THEN:
    // *SET *CF = #1
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (vars.get('§FS_MOLLA_COMP') == vars.get('§SI') && vars.get('§FS_ARG_MAG') != vars.get('§SI')) {
        vars.setLG('');
    }
    
    //#3
    if (vars.get('§FS_DIM_250') == vars.get('§SI') || vars.get('§FS_DIM_300') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#4
    if (vars.get('§FS_MAR_30_13') == vars.get('§SI') || vars.get('§FS_MAR_30_50') == vars.get('§SI') || vars.get('§FS_MAR_35_13') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#5
    if (vars.get('§FS_SPA_60') == vars.get('§SI') || vars.get('§FS_SPA_75') == vars.get('§SI')) {
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
