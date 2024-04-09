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

export const REG0002419: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0002419
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §FS_RUL_78_LIS = §SI
    // THEN:
    // *SET *CF = #1
    // #3
    // COND:
    // §FS_RUL_NOR_80 = §SI
    // THEN:
    // *SET *CF = #1
    // #4
    // COND:
    // §FS_ROL_80 = §SI
    // THEN:
    // *SET *CF = #1
    // #5
    // THEN:
    // *SET *CON-A = '0080'
    // *SET *CON-B = #100
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (vars.get('§FS_RUL_78_LIS') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#3
    if (vars.get('§FS_RUL_NOR_80') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#4
    if (vars.get('§FS_ROL_80') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#5
    vars.setCON_A('0080');
    vars.setCON_B(100);
    // GENERATED

    return vars.output;
};
