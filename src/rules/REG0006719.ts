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

export const REG0006719: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0006719
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET §DUMMYN1 =  [ §SPOR - #24 ]
    // #2
    // COND:
    // §DUMMYN1 >#100 AND §DUMMYN1<=#200
    // THEN:
    // *SET *CF=#2
    // #3
    // COND:
    // §DUMMYN1 >#200 AND §DUMMYN1<=#300
    // THEN:
    // *SET *CF=#3
    // #4
    // COND:
    // §DUMMYN1 >#300 AND §DUMMYN1<=#400
    // THEN:
    // *SET *CF=#4
    // #5
    // COND:
    // §DUMMYN1 >#400 AND §DUMMYN1<=#500
    // THEN:
    // *SET *CF=#5
    // #6
    // COND:
    // §DUMMYN1 >#500 AND §DUMMYN1<=#600
    // THEN:
    // *SET *CF=#6
    // #7
    // COND:
    // §DUMMYN1 >#600 AND §DUMMYN1<=#700
    // THEN:
    // *SET *CF=#7
    // #8
    // COND:
    // §DUMMYN1 >#700 AND §DUMMYN1<=#800
    // THEN:
    // *SET *CF=#8
    // #9
    // COND:
    // §DUMMYN1 >#800 AND §DUMMYN1<=#900
    // THEN:
    // *SET *CF=#9
    // """
    // RESPONSE:
    //#1
    vars.setDUMMYN1(vars.get('§SPOR') - 24);
    
    //#2
    if (vars.get('§DUMMYN1') > 100 && vars.get('§DUMMYN1') <= 200) {
        vars.setCF(2);
    }
    
    //#3
    if (vars.get('§DUMMYN1') > 200 && vars.get('§DUMMYN1') <= 300) {
        vars.setCF(3);
    }
    
    //#4
    if (vars.get('§DUMMYN1') > 300 && vars.get('§DUMMYN1') <= 400) {
        vars.setCF(4);
    }
    
    //#5
    if (vars.get('§DUMMYN1') > 400 && vars.get('§DUMMYN1') <= 500) {
        vars.setCF(5);
    }
    
    //#6
    if (vars.get('§DUMMYN1') > 500 && vars.get('§DUMMYN1') <= 600) {
        vars.setCF(6);
    }
    
    //#7
    if (vars.get('§DUMMYN1') > 600 && vars.get('§DUMMYN1') <= 700) {
        vars.setCF(7);
    }
    
    //#8
    if (vars.get('§DUMMYN1') > 700 && vars.get('§DUMMYN1') <= 800) {
        vars.setCF(8);
    }
    
    //#9
    if (vars.get('§DUMMYN1') > 800 && vars.get('§DUMMYN1') <= 900) {
        vars.setCF(9);
    }
    
    // GENERATED

    return vars.output;
};
