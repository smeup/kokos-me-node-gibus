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

export const REG0002949: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0002949
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A = 'P065'
    // *SET *CON-B = [§SPOR - #20,3]
    // *SET *CF = #2
    // #2
    // COND:
    // §FS_ACC_GUI_ZER = §SI
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    vars.setCON_A('P065');
    vars.setCON_B(vars.get('§SPOR') - 20.3);
    vars.setCF(2);
    
    //#2
    if (vars.get('§FS_ACC_GUI_ZER') == vars.get('§SI')) {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
