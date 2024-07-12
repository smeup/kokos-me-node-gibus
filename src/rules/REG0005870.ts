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

export const REG0005870: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0005870
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A=§VERN_1_COM
    // #2
    // THEN:
    // *SET *CON-A=§VERN_1_COM
    // #3
    // THEN:
    // *SET *CON-A=§VERN_1_COM
    // #4
    // THEN:
    // *SET *CF=#0
    // #5
    // THEN:
    // *SET *CF=#0
    // #6
    // COND:
    // §INN_MON_GA_LAT1='01'
    // THEN:
    // *SET *CF=#1
    // #7
    // COND:
    // §INN_MON_GA_LAT2='01'
    // THEN:
    // *SET *CF=#1
    // """
    // RESPONSE:
    //#1
    vars.setCON_A(vars.get('§VERN_1_COM'));
    //#2
    vars.setCON_A(vars.get('§VERN_1_COM'));
    //#3
    vars.setCON_A(vars.get('§VERN_1_COM'));
    //#4
    vars.setCF(0);
    //#5
    vars.setCF(0);
    //#6
    if (vars.get('§INN_MON_GA_LAT1') == '01') {
        vars.setCF(1);
    }
    //#7
    if (vars.get('§INN_MON_GA_LAT2') == '01') {
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
