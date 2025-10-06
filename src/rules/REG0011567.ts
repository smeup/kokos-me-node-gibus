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

export const REG0011567: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0011567
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §TI_ALI_T07 = '01'
    // THEN:
    // *SET *CF = #1
    // #3
    // THEN:
    // *SET §DUMMYN1 = [§LARG * §SPOR / #10000]
    // #4
    // COND:
    // §DUMMYN1 > #12
    // THEN:
    // *SET *CF = #0
    // #5
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    //#2
    if (vars.get('§TI_ALI_T07') == '01') {
        vars.setCF(1);
    }
    //#3
    vars.setDUMMYN1(vars.get('§LARG') * vars.get('§SPOR') / 10000);
    //#4
    if (vars.get('§DUMMYN1') > 12) {
        vars.setCF(0);
    }
    //#5
    vars.setCF(0);
    // GENERATED

    return vars.output;
};
