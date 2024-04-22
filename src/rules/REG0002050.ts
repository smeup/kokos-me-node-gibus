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

export const REG0002050: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0002050
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = [§NR_BRACCI /  #2]
    // #2
    // #3
    // #4
    // COND:
    // §NR_BRACCI = #3 AND  ( §FS_SPA_60 = §SI OR §FS_SPA_75 = §SI )
    // THEN:
    // *SET *CF = #1
    // #5
    // COND:
    // §NR_BRACCI = #5 AND  ( §FS_SPA_60 = §SI OR §FS_SPA_75 = §SI )
    // THEN:
    // *SET *CF = #2
    // """
    // RESPONSE:
    //#1
    vars.setCF(vars.get('§NR_BRACCI') / 2);
    
    //#4
    if (vars.get('§NR_BRACCI') == 3 && (vars.get('§FS_SPA_60') == vars.get('§SI') || vars.get('§FS_SPA_75') == vars.get('§SI'))) {
        vars.setCF(1);
    }
    
    //#5
    if (vars.get('§NR_BRACCI') == 5 && (vars.get('§FS_SPA_60') == vars.get('§SI') || vars.get('§FS_SPA_75') == vars.get('§SI'))) {
        vars.setCF(2);
    }
    // GENERATED

    return vars.output;
};
