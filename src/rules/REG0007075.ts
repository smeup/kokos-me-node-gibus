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

export const REG0007075: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0007075
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §FS_PO_SBA_POS2 = §SI
    // THEN:
    // *SET *CF = #1
    // *SET *CON-A = §VERN_1_COM
    // *SET *CON-B = §H_PO_SBA_POS2
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (vars.get('§FS_PO_SBA_POS2') == vars.get('§SI')) {
        vars.setCF(1);
        vars.setCON_A(vars.get('§VERN_1_COM'));
        vars.setCON_B(vars.get('§H_PO_SBA_POS2'));
    }
    // GENERATED

    return vars.output;
};
