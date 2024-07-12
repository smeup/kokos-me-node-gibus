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

export const REG0007368: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0007368
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF=#0
    // #2
    // COND:
    // §SALVAGOCCIA > #0
    // THEN:
    // *SET *CF=#2
    // #3
    // COND:
    // §SALVAGOCCIA > #100
    // THEN:
    // *SET *CF=#2
    // #4
    // COND:
    // §SALVAGOCCIA > #200
    // THEN:
    // *SET *CF=#3
    // #5
    // COND:
    // §SALVAGOCCIA > #300
    // THEN:
    // *SET *CF=#4
    // #6
    // COND:
    // §SALVAGOCCIA > #400
    // THEN:
    // *SET *CF=#5
    // #7
    // COND:
    // §SALVAGOCCIA > #500
    // THEN:
    // *SET *CF=#6
    // #8
    // COND:
    // §SALVAGOCCIA > #600
    // THEN:
    // *SET *CF=#7
    // #9
    // COND:
    // §SALVAGOCCIA > #700
    // THEN:
    // *SET *CF=#8
    // #10
    // COND:
    // §SALVAGOCCIA > #800
    // THEN:
    // *SET *CF=#9
    // #11
    // COND:
    // §SALVAGOCCIA >#900
    // THEN:
    // *SET *CF=#10
    // #12
    // COND:
    // §SALVAGOCCIA > #1000
    // THEN:
    // *SET *CF=#11
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (vars.get('§SALVAGOCCIA') > 0) {
        vars.setCF(2);
    }
    
    //#3
    if (vars.get('§SALVAGOCCIA') > 100) {
        vars.setCF(2);
    }
    
    //#4
    if (vars.get('§SALVAGOCCIA') > 200) {
        vars.setCF(3);
    }
    
    //#5
    if (vars.get('§SALVAGOCCIA') > 300) {
        vars.setCF(4);
    }
    
    //#6
    if (vars.get('§SALVAGOCCIA') > 400) {
        vars.setCF(5);
    }
    
    //#7
    if (vars.get('§SALVAGOCCIA') > 500) {
        vars.setCF(6);
    }
    
    //#8
    if (vars.get('§SALVAGOCCIA') > 600) {
        vars.setCF(7);
    }
    
    //#9
    if (vars.get('§SALVAGOCCIA') > 700) {
        vars.setCF(8);
    }
    
    //#10
    if (vars.get('§SALVAGOCCIA') > 800) {
        vars.setCF(9);
    }
    
    //#11
    if (vars.get('§SALVAGOCCIA') > 900) {
        vars.setCF(10);
    }
    
    //#12
    if (vars.get('§SALVAGOCCIA') > 1000) {
        vars.setCF(11);
    }
    // GENERATED

    return vars.output;
};
