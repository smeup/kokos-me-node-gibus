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

export const REG0006492: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0006492
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF=#1
    // #2
    // COND:
    // §SPOR >#100 AND §SPOR<=#200
    // THEN:
    // *SET *CF=#2
    // #3
    // COND:
    // §SPOR >#200 AND §SPOR<=#300
    // THEN:
    // *SET *CF=#3
    // #4
    // COND:
    // §SPOR >#300 AND §SPOR<=#400
    // THEN:
    // *SET *CF=#4
    // #5
    // COND:
    // §SPOR >#400 AND §SPOR<=#500
    // THEN:
    // *SET *CF=#5
    // #6
    // COND:
    // §SPOR >#500 AND §SPOR<=#600
    // THEN:
    // *SET *CF=#6
    // #7
    // COND:
    // §SPOR >#600 AND §SPOR<=#700
    // THEN:
    // *SET *CF=#7
    // #8
    // COND:
    // §SPOR >#700 AND §SPOR<=#800
    // THEN:
    // *SET *CF=#8
    // """
    // RESPONSE:
    //#1
    vars.setCF(1);
    
    //#2
    if (vars.get('§SPOR') > 100 && vars.get('§SPOR') <= 200) {
        vars.setCF(2);
    }
    
    //#3
    if (vars.get('§SPOR') > 200 && vars.get('§SPOR') <= 300) {
        vars.setCF(3);
    }
    
    //#4
    if (vars.get('§SPOR') > 300 && vars.get('§SPOR') <= 400) {
        vars.setCF(4);
    }
    
    //#5
    if (vars.get('§SPOR') > 400 && vars.get('§SPOR') <= 500) {
        vars.setCF(5);
    }
    
    //#6
    if (vars.get('§SPOR') > 500 && vars.get('§SPOR') <= 600) {
        vars.setCF(6);
    }
    
    //#7
    if (vars.get('§SPOR') > 600 && vars.get('§SPOR') <= 700) {
        vars.setCF(7);
    }
    
    //#8
    if (vars.get('§SPOR') > 700 && vars.get('§SPOR') <= 800) {
        vars.setCF(8);
    }
    // GENERATED

    return vars.output;
};
