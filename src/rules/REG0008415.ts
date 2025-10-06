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

export const REG0008415: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0008415
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = §PD_LARG_ML
    // *SET *CON-A = §VERN_1_COM
    // *SET *CON-B = #50
    // #2
    // COND:
    // §FS_OPT_VOL = §SI
    // THEN:
    // *SET *CF = #0
    // #3
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    vars.setCF(vars.get('§PD_LARG_ML'));
    vars.setCON_A(vars.get('§VERN_1_COM'));
    vars.setCON_B(50);
    
    //#2
    if (vars.get('§FS_OPT_VOL') == vars.get('§SI')) {
        vars.setCF(0);
    }
    
    //#3
    vars.setCF(0);
    // GENERATED

    return vars.output;
};
