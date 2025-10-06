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

export const REG0010009: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0010009
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A = §VERN_PLAST
    // *SET *CF = #0
    // #2
    // COND:
    // §FS_NODO = §SI
    // THEN:
    // *SET *CF = §NR_BRACCI
    // """
    // RESPONSE:
    //#1
    vars.setCON_A(vars.get('§VERN_PLAST'));
    vars.setCF(0);
    
    //#2
    if (vars.get('§FS_NODO') == vars.get('§SI')) {
        vars.setCF(vars.get('§NR_BRACCI'));
    }
    // GENERATED

    return vars.output;
};
