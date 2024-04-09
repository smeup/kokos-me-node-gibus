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

export const REG0003864: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0003864
    // REQUEST:
    // """
    // #1
    // COND:
    // §NR_ALTE_TESS > #0
    // THEN:
    // *SET *CF = [§NR_ALTE_TESS + #1]
    // ELSE:
    // *SET *LG = ''
    // #2
    // COND:
    // §FS_DUCK = §SI
    // ELSE:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§NR_ALTE_TESS') > 0) {
        vars.setCF(vars.get('§NR_ALTE_TESS') + 1);
    } else {
        vars.setLG('');
    }
    
    //#2
    if (vars.get('§FS_DUCK') == vars.get('§SI')) {
    } else {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
