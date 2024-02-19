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

export const REG0012743: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0012743
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §L_PORTANTE2 > #0
    // THEN:
    // *SET *CF = #1
    // #3
    // COND:
    // §L_PORTANTE3 > #0
    // THEN:
    // *SET *CF = #2
    // #4
    // COND:
    // §L_PORTANTE4 > #0
    // THEN:
    // *SET *CF = #3
    // #5
    // COND:
    // §L_PORTANTE5 > #0
    // THEN:
    // *SET *CF = #4
    // #6
    // COND:
    // §L_PORTANTE6 > #0
    // THEN:
    // *SET *CF = #5
    // #7
    // COND:
    // §FS_FAM2_JEANS = §SI
    // ELSE:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (vars.get('§L_PORTANTE2') > 0) {
        vars.setCF(1);
    }
    
    //#3
    if (vars.get('§L_PORTANTE3') > 0) {
        vars.setCF(2);
    }
    
    //#4
    if (vars.get('§L_PORTANTE4') > 0) {
        vars.setCF(3);
    }
    
    //#5
    if (vars.get('§L_PORTANTE5') > 0) {
        vars.setCF(4);
    }
    
    //#6
    if (vars.get('§L_PORTANTE6') > 0) {
        vars.setCF(5);
    }
    
    //#7
    if (vars.get('§FS_FAM2_JEANS') == vars.get('§SI')) {
    } else {
        vars.setCF(0);
    }
    
    // GENERATED

    return vars.output;
};
