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

export const REG0008221: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0008221
    // REQUEST:
    // """
    // #1
    // COND:
    // §FRANGITRATTA >#0 AND §FRANGITRATTA<=#100
    // THEN:
    // *SET *CF=#2
    // #2
    // COND:
    // §FRANGITRATTA >#100 AND §FRANGITRATTA<=#200
    // THEN:
    // *SET *CF=#4
    // #3
    // COND:
    // §FRANGITRATTA >#200 AND §FRANGITRATTA<=#300
    // THEN:
    // *SET *CF=#6
    // #4
    // COND:
    // §FRANGITRATTA >#300 AND §FRANGITRATTA<=#400
    // THEN:
    // *SET *CF=#8
    // #5
    // COND:
    // §FRANGITRATTA >#400 AND §FRANGITRATTA<=#500
    // THEN:
    // *SET *CF=#10
    // #6
    // COND:
    // §FRANGITRATTA >#500 AND §FRANGITRATTA<=#600
    // THEN:
    // *SET *CF=#12
    // #7
    // COND:
    // §FRANGITRATTA >#600 AND §FRANGITRATTA<=#700
    // THEN:
    // *SET *CF=#14
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FRANGITRATTA') > 0 && vars.get('§FRANGITRATTA') <= 100) {
        vars.setCF(2);
    }
    
    //#2
    if (vars.get('§FRANGITRATTA') > 100 && vars.get('§FRANGITRATTA') <= 200) {
        vars.setCF(4);
    }
    
    //#3
    if (vars.get('§FRANGITRATTA') > 200 && vars.get('§FRANGITRATTA') <= 300) {
        vars.setCF(6);
    }
    
    //#4
    if (vars.get('§FRANGITRATTA') > 300 && vars.get('§FRANGITRATTA') <= 400) {
        vars.setCF(8);
    }
    
    //#5
    if (vars.get('§FRANGITRATTA') > 400 && vars.get('§FRANGITRATTA') <= 500) {
        vars.setCF(10);
    }
    
    //#6
    if (vars.get('§FRANGITRATTA') > 500 && vars.get('§FRANGITRATTA') <= 600) {
        vars.setCF(12);
    }
    
    //#7
    if (vars.get('§FRANGITRATTA') > 600 && vars.get('§FRANGITRATTA') <= 700) {
        vars.setCF(14);
    }
    
    // GENERATED

    return vars.output;
};
