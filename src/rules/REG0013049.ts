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

export const REG0013049: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0013049
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET *CON-A = §VERN_1_COM
    // #2
    // COND:
    // §FS_FAM2_VARIA = §SI AND §AUM_SPO_T01 <= #16 AND §AUM_SPO_T01 > #3
    // THEN:
    // *SET *CF = #2
    // #3
    // COND:
    // §FS_FAM2_TWIST = §SI AND §AUM_SPO_T01 <= #11
    // THEN:
    // *SET *CF = #2
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setCON_A(vars.get('§VERN_1_COM'));
    
    //#2
    if (vars.get('§FS_FAM2_VARIA') == vars.get('§SI') && vars.get('§AUM_SPO_T01') <= 16 && vars.get('§AUM_SPO_T01') > 3) {
        vars.setCF(2);
    }
    
    //#3
    if (vars.get('§FS_FAM2_TWIST') == vars.get('§SI') && vars.get('§AUM_SPO_T01') <= 11) {
        vars.setCF(2);
    }
    // GENERATED

    return vars.output;
};
