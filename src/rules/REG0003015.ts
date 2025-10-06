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

export const REG0003015: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0003015
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A = *COL
    // *SET *CON-B = *LUNG
    // *SET *CF = #0
    // #2
    // COND:
    // §FS_DIM_400 = §SI
    // THEN:
    // *SET *CF = #1
    // #3
    // COND:
    // §FS_SP_50Q = §SI
    // THEN:
    // *SET *CF = #1
    // #4
    // COND:
    // §FS_SPA_75 = §SI
    // THEN:
    // *SET *CF = #1
    // """
    // RESPONSE:
    //#1
    vars.setCON_A(vars.getCOL());
    vars.setCON_B(vars.getLUNG());
    vars.setCF(0);
    
    //#2
    if (vars.get('§FS_DIM_400') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#3
    if (vars.get('§FS_SP_50Q') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#4
    if (vars.get('§FS_SPA_75') == vars.get('§SI')) {
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
