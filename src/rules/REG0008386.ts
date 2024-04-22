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

export const REG0008386: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0008386
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF=#0
    // #2
    // COND:
    // ( §FS_SCO_ACC1=§SI )
    // THEN:
    // *SET *CF=#6
    // #3
    // COND:
    // ( §FS_SCO_ACC2=§SI )
    // THEN:
    // *SET *CF=#3
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (vars.get('§FS_SCO_ACC1') == vars.get('§SI')) {
        vars.setCF(6);
    }
    
    //#3
    if (vars.get('§FS_SCO_ACC2') == vars.get('§SI')) {
        vars.setCF(3);
    }
    // GENERATED

    return vars.output;
};
