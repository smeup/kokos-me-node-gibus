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

export const REG0010048: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0010048
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §TELO_ASS = '02'
    // THEN:
    // *SET *CF = #1
    // #3
    // COND:
    // §TELO_ASS = '03'
    // THEN:
    // *SET *CF = #1
    // #4
    // COND:
    // §FS_TIPO_LED = '02'
    // THEN:
    // *SET *CF = #1
    // #5
    // COND:
    // §TELO_ASS = '06'
    // THEN:
    // *SET *CF = #1
    // #6
    // COND:
    // §FS_PTEL_MED_CF = §SI
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    //#2
    if (vars.get('§TELO_ASS') == '02') {
        vars.setCF(1);
    }
    //#3
    if (vars.get('§TELO_ASS') == '03') {
        vars.setCF(1);
    }
    //#4
    if (vars.get('§FS_TIPO_LED') == '02') {
        vars.setCF(1);
    }
    //#5
    if (vars.get('§TELO_ASS') == '06') {
        vars.setCF(1);
    }
    //#6
    if (vars.get('§FS_PTEL_MED_CF') == vars.get('§SI')) {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
