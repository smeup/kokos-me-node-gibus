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

export const REG0013057: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0013057
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET *CON-A = §VR_LAME
    // #2
    // COND:
    // §FS_FAM2_JOY = §SI
    // THEN:
    // *SET *CF = #1
    // *SET *CON-B = [ §L_BAN_FRA - #0,6 ]
    // *SET *CON-B = [§LARG - #20,2 - #0,6]
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setCON_A(vars.get('§VR_LAME'));
    
    //#2
    if (vars.get('§FS_FAM2_JOY') == vars.get('§SI')) {
        vars.setCF(1);
        vars.setCON_B(vars.get('§L_BAN_FRA') - 0.6);
        vars.setCON_B(vars.get('§LARG') - 20.2 - 0.6);
    }
    // GENERATED

    return vars.output;
};
