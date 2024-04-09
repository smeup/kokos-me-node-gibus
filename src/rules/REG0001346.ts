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

export const REG0001346: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0001346
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A = '0080'
    // *SET *CF = #0
    // #2
    // COND:
    // §FS_DIM_6G = §SI OR §FS_DIM_0G = §SI OR §FS_SP_0_GC = §SI OR §FS_TEKA_GC = §SI OR §FS_TEKA_0G = §SI
    // THEN:
    // *SET *CF = [§NR_ZAVOR_AGG + §NR_ZAVOR_FRONTA]
    // #3
    // COND:
    // §FS_IMPERO = §SI OR §FS_FORGIATO = §SI
    // THEN:
    // *SET *CF = [§NR_ZAVOR_AGG + §NR_ZAVOR_FRONTA]
    // """
    // RESPONSE:
    //#1
    vars.setCON_A('0080');
    vars.setCF(0);
    
    //#2
    if (vars.get('§FS_DIM_6G') == vars.get('§SI') || vars.get('§FS_DIM_0G') == vars.get('§SI') || vars.get('§FS_SP_0_GC') == vars.get('§SI') || vars.get('§FS_TEKA_GC') == vars.get('§SI') || vars.get('§FS_TEKA_0G') == vars.get('§SI')) {
        vars.setCF(vars.get('§NR_ZAVOR_AGG') + vars.get('§NR_ZAVOR_FRONTA'));
    }
    
    //#3
    if (vars.get('§FS_IMPERO') == vars.get('§SI') || vars.get('§FS_FORGIATO') == vars.get('§SI')) {
        vars.setCF(vars.get('§NR_ZAVOR_AGG') + vars.get('§NR_ZAVOR_FRONTA'));
    }
    
    // GENERATED

    return vars.output;
};
