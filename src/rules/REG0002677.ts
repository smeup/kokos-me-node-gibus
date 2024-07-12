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

export const REG0002677: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0002677
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET *CON-A = *COL
    // *SET *CON-B = *LUNG
    // #2
    // COND:
    // §TS_TIPO_TETT = '02'
    // THEN:
    // *SET *CF = #1
    // #3
    // COND:
    // §TS_TIPO_TETT = '03'
    // THEN:
    // *SET *CF = #1
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setCON_A(vars.getCOL());
    vars.setCON_B(vars.getLUNG());
    
    //#2
    if (vars.get('§TS_TIPO_TETT') == '02') {
        vars.setCF(1);
    }
    
    //#3
    if (vars.get('§TS_TIPO_TETT') == '03') {
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
