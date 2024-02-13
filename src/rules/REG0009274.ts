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

export const REG0009274: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0009274
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A=§VERN_1_COM
    // #2
    // THEN:
    // *SET *CF=#0
    // #3
    // COND:
    // §INN_MON_GA_LAT2='01'
    // THEN:
    // *SET *CF = [#1 * #0,5]
    // *SET *CF = #1
    // #4
    // COND:
    // §INN_MON_GA_LAT2='02'
    // THEN:
    // *SET *CF = [#2 * #0,5]
    // #5
    // COND:
    // §TI_IN_GA_LAT2 = '02'
    // ELSE:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    vars.setCON_A(vars.get('§VERN_1_COM'));
    //#2
    vars.setCF(0);
    //#3
    if (vars.get('§INN_MON_GA_LAT2') == '01') {
        vars.setCF(vars.get('#1') * vars.get('#0.5'));
        vars.setCF(vars.get('#1'));
    }
    //#4
    if (vars.get('§INN_MON_GA_LAT2') == '02') {
        vars.setCF(vars.get('#2') * vars.get('#0.5'));
    }
    //#5
    if (vars.get('§TI_IN_GA_LAT2') == '02') {
    } else {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
