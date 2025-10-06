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

export const REG0012728: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0012728
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §FS_ANT3_T02 = §SI
    // THEN:
    // *SET *CF = #1
    // #3
    // COND:
    // §AR_ANT3_T01 <> ''
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (vars.get('§FS_ANT3_T02') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#3
    if (vars.get('§AR_ANT3_T01') != '') {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
