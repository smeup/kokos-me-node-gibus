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

export const REG0008530: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0008530
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET *CON-A = *COL
    // *SET *CON-B = *LUNG
    // #2
    // COND:
    // §FS_NODO = §SI
    // THEN:
    // *SET *CF= #1
    // #3
    // COND:
    // §FS_PRO_PAR_T01 = §SI
    // THEN:
    // *SET *CF= #1
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setCON_A(vars.getCOL());
    vars.setCON_B(vars.getLUNG());
    
    //#2
    if (vars.get('§FS_NODO') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#3
    if (vars.get('§FS_PRO_PAR_T01') == vars.get('§SI')) {
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
