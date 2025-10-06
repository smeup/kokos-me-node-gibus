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

export const REG0001658: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0001658
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = [§NR_GAM_NOR_ANT + §NR_GAM_NOR_CEN1 + §NR_GAM_NOR_POS]
    // *SET *CON-A = §VERN_1_COM
    // """
    // RESPONSE:
    //#1
    vars.setCF(vars.get('§NR_GAM_NOR_ANT') + vars.get('§NR_GAM_NOR_CEN1') + vars.get('§NR_GAM_NOR_POS'));
    vars.setCON_A(vars.get('§VERN_1_COM'));
    // GENERATED

    return vars.output;
};
