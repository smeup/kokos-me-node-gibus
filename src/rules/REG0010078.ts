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

export const REG0010078: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0010078
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET *CON-A = 'P072'
    // *SET *CON-B = [§H_DX_SBA_POS2 - #35]
    // #2
    // COND:
    // §SC_TE_DX_SB_PO2 = §SI
    // THEN:
    // *SET *CF = #1
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setCON_A('P072');
    vars.setCON_B(vars.get('§H_DX_SBA_POS2') - 35);
    
    //#2
    if (vars.get('§SC_TE_DX_SB_PO2') == vars.get('§SI')) {
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
