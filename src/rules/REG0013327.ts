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

export const REG0013327: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0013327
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §FS_TOLO_GC = §SI AND §ALTE_TC > #360
    // THEN:
    // *SET *CF = #2
    // #3
    // COND:
    // §FS_SP_0_GCT = §SI AND §ALTE_TC > #360
    // THEN:
    // *SET *CF = #2
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (vars.get('§FS_TOLO_GC') == vars.get('§SI') && vars.get('§ALTE_TC') > 360) {
        vars.setCF(2);
    }
    
    //#3
    if (vars.get('§FS_SP_0_GCT') == vars.get('§SI') && vars.get('§ALTE_TC') > 360) {
        vars.setCF(2);
    }
    // GENERATED

    return vars.output;
};
