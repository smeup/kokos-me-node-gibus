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

export const REG0001731: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0001731
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A = §VERN_1_COM
    // *SET *CF = #0
    // #2
    // COND:
    // (§FS_DIM_250 = §SI) OR (§FS_DIM_300 = §SI) OR (§FS_DIM_400 = §SI)
    // THEN:
    // *SET *CF = #1
    // #3
    // COND:
    // (§FS_MAR_30_13 = §SI) OR (§FS_MAR_30_50 = §SI) OR (§FS_MAR_35_13 = §SI)
    // THEN:
    // *SET *CF = #1
    // """
    // RESPONSE:
    //#1
    vars.setCON_A(vars.get('§VERN_1_COM'));
    vars.setCF(0);
    
    //#2
    if ((vars.get('§FS_DIM_250') == vars.get('§SI')) || (vars.get('§FS_DIM_300') == vars.get('§SI')) || (vars.get('§FS_DIM_400') == vars.get('§SI'))) {
        vars.setCF(1);
    }
    
    //#3
    if ((vars.get('§FS_MAR_30_13') == vars.get('§SI')) || (vars.get('§FS_MAR_30_50') == vars.get('§SI')) || (vars.get('§FS_MAR_35_13') == vars.get('§SI'))) {
        vars.setCF(1);
    }
    
    // GENERATED

    return vars.output;
};
