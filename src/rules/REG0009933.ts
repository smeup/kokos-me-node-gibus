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

export const REG0009933: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0009933
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET *CON-A = §VERN_PLAST
    // #2
    // COND:
    // §FS_NODO = §SI
    // THEN:
    // *SET *CF = §NR_BRACCI
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setCON_A(vars.get('§VERN_PLAST'));
    
    //#2
    if (vars.get('§FS_NODO') == vars.get('§SI')) {
        vars.setCF(vars.get('§NR_BRACCI'));
    }
    // GENERATED

    return vars.output;
};
