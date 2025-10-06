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

export const REG0013309: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0013309
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §FS_FAM2_VARIA = §SI
    // THEN:
    // *SET *CF = #2
    // #3
    // COND:
    // §FS_FAM2_JOY = §SI
    // THEN:
    // *SET *CF = #2
    // #4
    // COND:
    // §TI_STRIP = '01'
    // THEN:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (vars.get('§FS_FAM2_VARIA') == vars.get('§SI')) {
        vars.setCF(2);
    }
    
    //#3
    if (vars.get('§FS_FAM2_JOY') == vars.get('§SI')) {
        vars.setCF(2);
    }
    
    //#4
    if (vars.get('§TI_STRIP') == '01') {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
