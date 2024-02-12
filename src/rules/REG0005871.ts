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

export const REG0005871: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0005871
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A=§VERN_1_COM
    // #2
    // THEN:
    // *SET *CON-A=§VERN_1_COM
    // *SET *CF = #1
    // #3
    // THEN:
    // *SET *CON-A=§VERN_1_COM
    // *SET *CF = #1
    // #4
    // COND:
    // §INN_MON_GA_LAT1 = '03'
    // THEN:
    // *SET *CF = #2
    // #5
    // COND:
    // §INN_MON_GA_LAT1 = '03'
    // THEN:
    // *SET *CF = #2
    // """
    // RESPONSE:
    //#1
    vars.setCON_A(vars.get('§VERN_1_COM'));
    //#2
    vars.setCON_A(vars.get('§VERN_1_COM'));
    vars.setCF(1);
    //#3
    vars.setCON_A(vars.get('§VERN_1_COM'));
    vars.setCF(1);
    //#4
    if (vars.get('§INN_MON_GA_LAT1') == '03') {
        vars.setCF(2);
    }
    //#5
    if (vars.get('§INN_MON_GA_LAT1') == '03') {
        vars.setCF(2);
    }
    // GENERATED

    return vars.output;
};
