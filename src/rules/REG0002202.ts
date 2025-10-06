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

export const REG0002202: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0002202
    // REQUEST:
    // """
    // #1
    // COND:
    // (§FS_DIM_0G = §SI) OR (§FS_DIM_5 = §SI)
    // THEN:
    // *SET *LG = ''
    // #2
    // COND:
    // §FS_TEN_VEC = §SI
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_DIM_0G') == vars.get('§SI') || vars.get('§FS_DIM_5') == vars.get('§SI')) {
        vars.setLG('');
    }
    
    //#2
    if (vars.get('§FS_TEN_VEC') == vars.get('§SI')) {
        vars.setCF(0);
    }
    
    // GENERATED

    return vars.output;
};
