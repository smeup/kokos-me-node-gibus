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

export const REG0002069: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0002069
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = [§NR_BRACCI /  #2]
    // #2
    // COND:
    // §NR_BRACCI = #3 AND §FS_SPA_60 = §SI
    // THEN:
    // *SET *CF = #2
    // #3
    // COND:
    // §NR_BRACCI = #5 AND §FS_SPA_60 = §SI
    // THEN:
    // *SET *CF = #3
    // """
    // RESPONSE:
    //#1
    vars.setCF(vars.get('§NR_BRACCI') / 2);
    
    //#2
    if (vars.get('§NR_BRACCI') == 3 && vars.get('§FS_SPA_60') == vars.get('§SI')) {
        vars.setCF(2);
    }
    
    //#3
    if (vars.get('§NR_BRACCI') == 5 && vars.get('§FS_SPA_60') == vars.get('§SI')) {
        vars.setCF(3);
    }
    // GENERATED

    return vars.output;
};
