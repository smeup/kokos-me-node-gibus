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

export const REG0004351: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0004351
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_FAM2_165=§SI
    // ELSE:
    // *SET *LG=''
    // #2
    // COND:
    // ( §FS_FAM2_165=§SI ) AND (§FS_FAM2_WALL=§SI)
    // THEN:
    // *SET *CF=#0
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_FAM2_165') == vars.get('§SI')) {
    } else {
        vars.setLG("");
    }
    
    //#2
    if ((vars.get('§FS_FAM2_165') == vars.get('§SI')) && (vars.get('§FS_FAM2_WALL') == vars.get('§SI'))) {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
