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

export const REG0003129: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0003129
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = [§N_MODULI - #1]
    // #2
    // COND:
    // §FS_ACC_INI = §SI
    // THEN:
    // *SET *CF= [§N_MODULI + #0]
    // #3
    // COND:
    // §FS_ACC_FIN = §SI
    // THEN:
    // *SET *CF= [ §N_MODULI + #0]
    // #4
    // COND:
    // §FS_ACC_CEN = §SI
    // THEN:
    // *SET *CF = [§N_MODULI + #1]
    // """
    // RESPONSE:
    //#1
    vars.setCF(vars.get('§N_MODULI') - 1);
    
    //#2
    if (vars.get('§FS_ACC_INI') == vars.get('§SI')) {
        vars.setCF(vars.get('§N_MODULI') + 0);
    }
    
    //#3
    if (vars.get('§FS_ACC_FIN') == vars.get('§SI')) {
        vars.setCF(vars.get('§N_MODULI') + 0);
    }
    
    //#4
    if (vars.get('§FS_ACC_CEN') == vars.get('§SI')) {
        vars.setCF(vars.get('§N_MODULI') + 1);
    }
    
    // GENERATED

    return vars.output;
};
