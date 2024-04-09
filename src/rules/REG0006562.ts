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

export const REG0006562: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0006562
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET §DUMMYN1=#0
    // #2
    // THEN:
    // *SET §DUMMYN1 = [ §LARG_M1 - #2,8 ]
    // #3
    // COND:
    // §DUMMYN1>#40 AND §DUMMYN1<=#80
    // THEN:
    // *SET *CF=#1
    // #4
    // COND:
    // §DUMMYN1>#80 AND §DUMMYN1<=#120
    // THEN:
    // *SET *CF=#2
    // #5
    // COND:
    // §DUMMYN1>#120 AND §DUMMYN1<=#160
    // THEN:
    // *SET *CF=#3
    // #6
    // COND:
    // §DUMMYN1>#160 AND §DUMMYN1<=#200
    // THEN:
    // *SET *CF=#4
    // #7
    // COND:
    // §DUMMYN1>#200 AND §DUMMYN1<=#240
    // THEN:
    // *SET *CF=#5
    // #8
    // COND:
    // §DUMMYN1>#240 AND §DUMMYN1<=#280
    // THEN:
    // *SET *CF=#6
    // #9
    // COND:
    // §DUMMYN1>#280 AND §DUMMYN1<=#320
    // THEN:
    // *SET *CF=#6
    // #10
    // COND:
    // §DUMMYN1>#320 AND §DUMMYN1<=#360
    // THEN:
    // *SET *CF=#7
    // #11
    // COND:
    // §DUMMYN1>#360 AND §DUMMYN1<=#400
    // THEN:
    // *SET *CF=#8
    // #12
    // COND:
    // §DUMMYN1>#400 AND §DUMMYN1<=#440
    // THEN:
    // *SET *CF=#9
    // #13
    // COND:
    // §DUMMYN1>#440 AND §DUMMYN1<=#480
    // THEN:
    // *SET *CF=#10
    // #14
    // COND:
    // §DUMMYN1>#480 AND §DUMMYN1<=#520
    // THEN:
    // *SET *CF=#11
    // #15
    // COND:
    // §DUMMYN1>#520 AND §DUMMYN1<=#560
    // THEN:
    // *SET *CF=#12
    // #16
    // COND:
    // §DUMMYN1>#560 AND §DUMMYN1<=#600
    // THEN:
    // *SET *CF=#13
    // #17
    // COND:
    // §DUMMYN1>#600 AND §DUMMYN1<=#640
    // THEN:
    // *SET *CF=#14
    // #18
    // COND:
    // §DUMMYN1>#640 AND §DUMMYN1<=#680
    // THEN:
    // *SET *CF=#15
    // #19
    // COND:
    // §DUMMYN1>#680 AND §DUMMYN1<=#720
    // THEN:
    // *SET *CF=#16
    // #20
    // COND:
    // §DUMMYN1>#720 AND §DUMMYN1<=#800
    // THEN:
    // *SET *CF=#17
    // """
    // RESPONSE:
    //#1
    vars.setDUMMYN1(0);
    
    //#2
    vars.setDUMMYN1(vars.get('§LARG_M1') - 2.8);
    
    //#3
    if (vars.get('§DUMMYN1') > 40 && vars.get('§DUMMYN1') <= 80) {
        vars.setCF(1);
    }
    
    //#4
    if (vars.get('§DUMMYN1') > 80 && vars.get('§DUMMYN1') <= 120) {
        vars.setCF(2);
    }
    
    //#5
    if (vars.get('§DUMMYN1') > 120 && vars.get('§DUMMYN1') <= 160) {
        vars.setCF(3);
    }
    
    //#6
    if (vars.get('§DUMMYN1') > 160 && vars.get('§DUMMYN1') <= 200) {
        vars.setCF(4);
    }
    
    //#7
    if (vars.get('§DUMMYN1') > 200 && vars.get('§DUMMYN1') <= 240) {
        vars.setCF(5);
    }
    
    //#8
    if (vars.get('§DUMMYN1') > 240 && vars.get('§DUMMYN1') <= 280) {
        vars.setCF(6);
    }
    
    //#9
    if (vars.get('§DUMMYN1') > 280 && vars.get('§DUMMYN1') <= 320) {
        vars.setCF(6);
    }
    
    //#10
    if (vars.get('§DUMMYN1') > 320 && vars.get('§DUMMYN1') <= 360) {
        vars.setCF(7);
    }
    
    //#11
    if (vars.get('§DUMMYN1') > 360 && vars.get('§DUMMYN1') <= 400) {
        vars.setCF(8);
    }
    
    //#12
    if (vars.get('§DUMMYN1') > 400 && vars.get('§DUMMYN1') <= 440) {
        vars.setCF(9);
    }
    
    //#13
    if (vars.get('§DUMMYN1') > 440 && vars.get('§DUMMYN1') <= 480) {
        vars.setCF(10);
    }
    
    //#14
    if (vars.get('§DUMMYN1') > 480 && vars.get('§DUMMYN1') <= 520) {
        vars.setCF(11);
    }
    
    //#15
    if (vars.get('§DUMMYN1') > 520 && vars.get('§DUMMYN1') <= 560) {
        vars.setCF(12);
    }
    
    //#16
    if (vars.get('§DUMMYN1') > 560 && vars.get('§DUMMYN1') <= 600) {
        vars.setCF(13);
    }
    
    //#17
    if (vars.get('§DUMMYN1') > 600 && vars.get('§DUMMYN1') <= 640) {
        vars.setCF(14);
    }
    
    //#18
    if (vars.get('§DUMMYN1') > 640 && vars.get('§DUMMYN1') <= 680) {
        vars.setCF(15);
    }
    
    //#19
    if (vars.get('§DUMMYN1') > 680 && vars.get('§DUMMYN1') <= 720) {
        vars.setCF(16);
    }
    
    //#20
    if (vars.get('§DUMMYN1') > 720 && vars.get('§DUMMYN1') <= 800) {
        vars.setCF(17);
    }
    // GENERATED

    return vars.output;
};
