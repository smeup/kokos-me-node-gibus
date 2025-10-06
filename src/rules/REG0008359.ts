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

export const REG0008359: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0008359
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET §DUMMYN1 = [ §L_GRO_1 + §L_GRO_2 + §L_GRO_3 ]
    // #2
    // COND:
    // §DUMMYN1>=#100 AND §DUMMYN1<#200
    // THEN:
    // *SET *CF=#1
    // #3
    // COND:
    // §DUMMYN1>=#200 AND §DUMMYN1<#300
    // THEN:
    // *SET *CF=#2
    // #4
    // COND:
    // §DUMMYN1>=#300 AND §DUMMYN1<#400
    // THEN:
    // *SET *CF=#3
    // #5
    // COND:
    // §DUMMYN1>=#400 AND §DUMMYN1<#500
    // THEN:
    // *SET *CF=#4
    // #6
    // COND:
    // §DUMMYN1>=#500 AND §DUMMYN1<#600
    // THEN:
    // *SET *CF=#5
    // #7
    // COND:
    // §DUMMYN1>=#600 AND §DUMMYN1<#700
    // THEN:
    // *SET *CF=#6
    // #8
    // COND:
    // §DUMMYN1>=#700 AND §DUMMYN1<#800
    // THEN:
    // *SET *CF=#7
    // #9
    // COND:
    // §DUMMYN1>=#800 AND §DUMMYN1<#900
    // THEN:
    // *SET *CF=#8
    // #10
    // COND:
    // §DUMMYN1>=#900 AND §DUMMYN1<#1000
    // THEN:
    // *SET *CF=#9
    // #11
    // COND:
    // §DUMMYN1>=#1000 AND §DUMMYN1<#1100
    // THEN:
    // *SET *CF=#10
    // #12
    // COND:
    // §DUMMYN1>=#1100 AND §DUMMYN1<#1200
    // THEN:
    // *SET *CF=#11
    // #13
    // COND:
    // §DUMMYN1>=#1200
    // THEN:
    // *SET *CF=#12
    // """
    // RESPONSE:
    //#1
    vars.setDUMMYN1(vars.get('§L_GRO_1') + vars.get('§L_GRO_2') + vars.get('§L_GRO_3'));
    
    //#2
    if (vars.get('§DUMMYN1') >= 100 && vars.get('§DUMMYN1') < 200) {
        vars.setCF(1);
    }
    
    //#3
    if (vars.get('§DUMMYN1') >= 200 && vars.get('§DUMMYN1') < 300) {
        vars.setCF(2);
    }
    
    //#4
    if (vars.get('§DUMMYN1') >= 300 && vars.get('§DUMMYN1') < 400) {
        vars.setCF(3);
    }
    
    //#5
    if (vars.get('§DUMMYN1') >= 400 && vars.get('§DUMMYN1') < 500) {
        vars.setCF(4);
    }
    
    //#6
    if (vars.get('§DUMMYN1') >= 500 && vars.get('§DUMMYN1') < 600) {
        vars.setCF(5);
    }
    
    //#7
    if (vars.get('§DUMMYN1') >= 600 && vars.get('§DUMMYN1') < 700) {
        vars.setCF(6);
    }
    
    //#8
    if (vars.get('§DUMMYN1') >= 700 && vars.get('§DUMMYN1') < 800) {
        vars.setCF(7);
    }
    
    //#9
    if (vars.get('§DUMMYN1') >= 800 && vars.get('§DUMMYN1') < 900) {
        vars.setCF(8);
    }
    
    //#10
    if (vars.get('§DUMMYN1') >= 900 && vars.get('§DUMMYN1') < 1000) {
        vars.setCF(9);
    }
    
    //#11
    if (vars.get('§DUMMYN1') >= 1000 && vars.get('§DUMMYN1') < 1100) {
        vars.setCF(10);
    }
    
    //#12
    if (vars.get('§DUMMYN1') >= 1100 && vars.get('§DUMMYN1') < 1200) {
        vars.setCF(11);
    }
    
    //#13
    if (vars.get('§DUMMYN1') >= 1200) {
        vars.setCF(12);
    }
    
    // GENERATED

    return vars.output;
};
