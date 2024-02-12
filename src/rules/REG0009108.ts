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

export const REG0009108: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0009108
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF=#0
    // #2
    // COND:
    // ( §SPOR >#0 )
    // THEN:
    // *SET *CF=#1
    // #3
    // COND:
    // ( §SPOR >=#100 )
    // THEN:
    // *SET *CF=#1
    // #4
    // COND:
    // ( §SPOR >=#200 )
    // THEN:
    // *SET *CF=#2
    // #5
    // COND:
    // ( §SPOR >=#300 )
    // THEN:
    // *SET *CF=#3
    // #6
    // COND:
    // ( §SPOR >=#400 )
    // THEN:
    // *SET *CF=#4
    // #7
    // COND:
    // ( §SPOR >=#500 )
    // THEN:
    // *SET *CF=#5
    // #8
    // COND:
    // ( §SPOR >=#600 )
    // THEN:
    // *SET *CF=#6
    // #9
    // COND:
    // ( §SPOR >=#700 )
    // THEN:
    // *SET *CF=#7
    // """
    // RESPONSE:
    Traduzione:
    //#1
    vars.setCF(0);
    //#2
    if (vars.get('§SPOR') > 0) {
        vars.setCF(1);
    }
    //#3
    if (vars.get('§SPOR') >= 100) {
        vars.setCF(1);
    }
    //#4
    if (vars.get('§SPOR') >= 200) {
        vars.setCF(2);
    }
    //#5
    if (vars.get('§SPOR') >= 300) {
        vars.setCF(3);
    }
    //#6
    if (vars.get('§SPOR') >= 400) {
        vars.setCF(4);
    }
    //#7
    if (vars.get('§SPOR') >= 500) {
        vars.setCF(5);
    }
    //#8
    if (vars.get('§SPOR') >= 600) {
        vars.setCF(6);
    }
    //#9
    if (vars.get('§SPOR') >= 700) {
        vars.setCF(7);
    }
    // GENERATED

    return vars.output;
};
