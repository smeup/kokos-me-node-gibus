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

export const REG0008379: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0008379
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF=#0
    // #2
    // COND:
    // ( §SPOR >#0 )
    // THEN:
    // *SET *CF=#6
    // #3
    // COND:
    // ( §SPOR >=#100 )
    // THEN:
    // *SET *CF=#6
    // #4
    // COND:
    // ( §SPOR >=#200 )
    // THEN:
    // *SET *CF=#12
    // #5
    // COND:
    // ( §SPOR >=#300 )
    // THEN:
    // *SET *CF=#18
    // #6
    // COND:
    // ( §SPOR >=#400 )
    // THEN:
    // *SET *CF=#24
    // #7
    // COND:
    // ( §SPOR >=#500 )
    // THEN:
    // *SET *CF=#30
    // #8
    // COND:
    // ( §SPOR >=#600 )
    // THEN:
    // *SET *CF=#36
    // #9
    // COND:
    // ( §SPOR >=#700 )
    // THEN:
    // *SET *CF=#42
    // #10
    // COND:
    // ( §SPOR >=#800 )
    // THEN:
    // *SET *CF=#48
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (vars.get('§SPOR') > 0) {
        vars.setCF(6);
    }
    
    //#3
    if (vars.get('§SPOR') >= 100) {
        vars.setCF(6);
    }
    
    //#4
    if (vars.get('§SPOR') >= 200) {
        vars.setCF(12);
    }
    
    //#5
    if (vars.get('§SPOR') >= 300) {
        vars.setCF(18);
    }
    
    //#6
    if (vars.get('§SPOR') >= 400) {
        vars.setCF(24);
    }
    
    //#7
    if (vars.get('§SPOR') >= 500) {
        vars.setCF(30);
    }
    
    //#8
    if (vars.get('§SPOR') >= 600) {
        vars.setCF(36);
    }
    
    //#9
    if (vars.get('§SPOR') >= 700) {
        vars.setCF(42);
    }
    
    //#10
    if (vars.get('§SPOR') >= 800) {
        vars.setCF(48);
    }
    // GENERATED

    return vars.output;
};
