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

export const REG0008161: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0008161
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_TET_PER_25 = §SI
    // THEN:
    // *SET *CF = #0
    // ELSE:
    // *SET *LG = ''
    // #2
    // COND:
    // §PER_1_L_TET_1 > #0
    // THEN:
    // *SET *CF = #4
    // #3
    // COND:
    // §PER_1_L_TET_2 > #0
    // THEN:
    // *SET *CF = #8
    // #4
    // COND:
    // §PER_1_L_TET_3 > #0
    // THEN:
    // *SET *CF = #12
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_TET_PER_25') == vars.get('§SI')) {
        vars.setCF(0);
    } else {
        vars.setLG('');
    }
    
    //#2
    if (vars.get('§PER_1_L_TET_1') > 0) {
        vars.setCF(4);
    }
    
    //#3
    if (vars.get('§PER_1_L_TET_2') > 0) {
        vars.setCF(8);
    }
    
    //#4
    if (vars.get('§PER_1_L_TET_3') > 0) {
        vars.setCF(12);
    }
    // GENERATED

    return vars.output;
};
