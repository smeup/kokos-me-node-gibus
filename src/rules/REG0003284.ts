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

export const REG0003284: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0003284
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A=§VERN_1_COM
    // *SET *CF= [§N_MODULI + #1 ]
    // """
    // RESPONSE:
    //#1
    vars.setCON_A(vars.get('§VERN_1_COM'));
    vars.setCF(vars.get('§N_MODULI') + 1);
    // GENERATED

    return vars.output;
};
