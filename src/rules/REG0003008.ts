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

export const REG0003008: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0003008
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §TI_FRO = '01'
    // THEN:
    // *SET *CON-A = *COL
    // *SET *CON-B = *LUNG
    // *SET *CF = #1
    // #3
    // COND:
    // §FS_TEL_RUL_FRO = §SI
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (vars.get('§TI_FRO') == '01') {
        vars.setCON_A(vars.getCOL());
        vars.setCON_B(vars.getLUNG());
        vars.setCF(1);
    }
    
    //#3
    if (vars.get('§FS_TEL_RUL_FRO') == vars.get('§SI')) {
        vars.setCF(0);
    }
    
    // GENERATED

    return vars.output;
};
