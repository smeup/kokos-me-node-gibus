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

export const REG0002301: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0002301
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_ZIP <> §SI
    // ELSE:
    // *SET *LG = ''
    // #2
    // COND:
    // §FS_FAM2_TEKA = §SI OR §FS_FAM2_DIM_TC = §SI OR §FS_FAM2_SP = §SI
    // THEN:
    // *SET *LG = ''
    // #3
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_ZIP') !== vars.get('§SI')) {
        vars.setLG('');
    } else {
        vars.setLG('');
    }
    
    //#2
    if (vars.get('§FS_FAM2_TEKA') == vars.get('§SI') || vars.get('§FS_FAM2_DIM_TC') == vars.get('§SI') || vars.get('§FS_FAM2_SP') == vars.get('§SI')) {
        vars.setLG('');
    }
    
    //#3
    vars.setCF(0);
    // GENERATED

    return vars.output;
};
