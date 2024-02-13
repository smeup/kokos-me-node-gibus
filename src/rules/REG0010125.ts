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

export const REG0010125: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0010125
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #1
    // #2
    // COND:
    // §TELO_ASS = '02'
    // THEN:
    // *SET *CF = #0
    // #3
    // COND:
    // §TELO_ASS = '03'
    // THEN:
    // *SET *CF = #0
    // #4
    // COND:
    // §FS_TIPO_LED = '02'
    // THEN:
    // *SET *CF = #0
    // #5
    // COND:
    // §TELO_ASS = '06'
    // THEN:
    // *SET *CF = #0
    // #6
    // COND:
    // §FS_PTEL_MED_CF = §SI
    // THEN:
    // *SET *CF = #1
    // """
    // RESPONSE:
    //#1
    vars.setCF(1);
    //#2
    if (vars.get('§TELO_ASS') == '02') {
        vars.setCF(0);
    }
    //#3
    if (vars.get('§TELO_ASS') == '03') {
        vars.setCF(0);
    }
    //#4
    if (vars.get('§FS_TIPO_LED') == '02') {
        vars.setCF(0);
    }
    //#5
    if (vars.get('§TELO_ASS') == '06') {
        vars.setCF(0);
    }
    //#6
    if (vars.get('§FS_PTEL_MED_CF') == vars.get('§SI')) {
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
