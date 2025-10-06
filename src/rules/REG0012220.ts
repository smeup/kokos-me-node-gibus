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

export const REG0012220: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0012220
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *NT = §NOT_MOT_CLI
    // *SET *CF = #0
    // #2
    // COND:
    // §FS_TXT = §SI
    // THEN:
    // *SET *CF = #1
    // #3
    // COND:
    // §FS_SEGNO = §SI
    // THEN:
    // *SET *CF = #1
    // """
    // RESPONSE:
    //#1
    vars.setNT(vars.get('§NOT_MOT_CLI'));
    vars.setCF(0);
    
    //#2
    if (vars.get('§FS_TXT') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#3
    if (vars.get('§FS_SEGNO') == vars.get('§SI')) {
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
