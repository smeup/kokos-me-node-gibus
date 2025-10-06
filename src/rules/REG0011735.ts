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

export const REG0011735: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0011735
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §FS_FAM2_AVIA = §SI
    // THEN:
    // *SET *CF = [ §N_MODULI + #1 ]
    // *SET *CON-A = §VERN_1_COM
    // *SET *CON-B = [ §J_INT_TIR_T01 - #8]
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (vars.get('§FS_FAM2_AVIA') == vars.get('§SI')) {
        vars.setCF(vars.get('§N_MODULI') + 1);
        vars.setCON_A(vars.get('§VERN_1_COM'));
        vars.setCON_B(vars.get('§J_INT_TIR_T01') - 8);
    }
    // GENERATED

    return vars.output;
};
