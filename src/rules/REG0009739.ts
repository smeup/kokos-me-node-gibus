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

export const REG0009739: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0009739
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET §DUMMYA1 = §TES_TW_2_MAT
    // #2
    // COND:
    // §TES_TW_2_ACR = §SI
    // THEN:
    // *SET *CF = #1
    // #3
    // COND:
    // §TES_TW_2_POL = §SI
    // THEN:
    // *SET *CF = #1
    // #4
    // COND:
    // §TES_TW_2_CRI = §SI
    // THEN:
    // *SET *CF = #1
    // #5
    // COND:
    // §DUMMYA1 = '0119'
    // THEN:
    // *SET *CF = #1
    // #6
    // COND:
    // §DUMMYA1 = '0118'
    // THEN:
    // *SET *CF = #1
    // #7
    // COND:
    // §DUMMYA1 = '0114'
    // THEN:
    // *SET *CF = #1
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setDUMMYA1(vars.get('§TES_TW_2_MAT'));
    //#2
    if (vars.get('§TES_TW_2_ACR') == vars.get('§SI')) {
        vars.setCF(1);
    }
    //#3
    if (vars.get('§TES_TW_2_POL') == vars.get('§SI')) {
        vars.setCF(1);
    }
    //#4
    if (vars.get('§TES_TW_2_CRI') == vars.get('§SI')) {
        vars.setCF(1);
    }
    //#5
    if (vars.get('§DUMMYA1') == '0119') {
        vars.setCF(1);
    }
    //#6
    if (vars.get('§DUMMYA1') == '0118') {
        vars.setCF(1);
    }
    //#7
    if (vars.get('§DUMMYA1') == '0114') {
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
