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

export const REG0013118: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0013118
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_FAM2_QUADRA = §SI OR §FS_FAM2_JEANS = §SI OR §FS_FAM2_165 = §SI
    // THEN:
    // *SET *CF = #1
    // ELSE:
    // *SET *CF = #0
    // #2
    // COND:
    // §FS_ACC_CEN = §SI
    // THEN:
    // *SET *CF = #0
    // #3
    // COND:
    // §FS_ACC_FIN = §SI
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_FAM2_QUADRA') == vars.get('§SI') || vars.get('§FS_FAM2_JEANS') == vars.get('§SI') || vars.get('§FS_FAM2_165') == vars.get('§SI')) {
        vars.setCF(1);
    } else {
        vars.setCF(0);
    }
    
    //#2
    if (vars.get('§FS_ACC_CEN') == vars.get('§SI')) {
        vars.setCF(0);
    }
    
    //#3
    if (vars.get('§FS_ACC_FIN') == vars.get('§SI')) {
        vars.setCF(0);
    }
    
    // GENERATED

    return vars.output;
};
