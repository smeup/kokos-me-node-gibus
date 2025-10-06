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

export const REG0006348: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0006348
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §ALTE_TC > #350
    // THEN:
    // *SET *CF = #1
    // #3
    // COND:
    // (§FS_SP_0_GC = §SI) OR (§FS_TEKA_GC = §SI)
    // ELSE:
    // *SET *LG = ''
    // #4
    // THEN:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (vars.get('§ALTE_TC') > 350) {
        vars.setCF(1);
    }
    
    //#3
    if ((vars.get('§FS_SP_0_GC') == vars.get('§SI')) || (vars.get('§FS_TEKA_GC') == vars.get('§SI')) ) {
    } else {
        vars.setLG('');
    }
    
    //#4
    vars.setLG('');
    // GENERATED

    return vars.output;
};
