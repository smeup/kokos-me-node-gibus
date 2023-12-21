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

export const REG0003127: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0003127
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF= #0
    // #2
    // COND:
    // (§L_PORTANTE2> #0 ) AND (§L_PORTANTE3 = #0 )  AND (§FS_FAM2_WALL=§SI)
    // THEN:
    // *SET *CF=#1
    // #3
    // COND:
    // (§L_PORTANTE2 > #0 ) AND (§L_PORTANTE3 > #0 ) AND (§FS_FAM2_WALL=§SI)
    // THEN:
    // *SET *CF=#2
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    //#2
    if ((vars.get('§L_PORTANTE2') > 0) && (vars.get('§L_PORTANTE3') == 0) && (vars.get('§FS_FAM2_WALL') == vars.get('§SI'))) {
        vars.setCF(1);
    }
    //#3
    if ((vars.get('§L_PORTANTE2') > 0) && (vars.get('§L_PORTANTE3') > 0) && (vars.get('§FS_FAM2_WALL') == vars.get('§SI'))) {
        vars.setCF(2);
    }
    // GENERATED

    return vars.output;
};
