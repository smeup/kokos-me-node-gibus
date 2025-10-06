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

export const REG0000760: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0000760
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_SP_0_GC = §SI OR §FS_DIM_0G = §SI OR §FS_DIM_6G = §SI OR §FS_TEKA_0G = §SI OR §FS_TEKA_GC = §SI
    // THEN:
    // *SET *CON-A = *COL
    // *SET *CON-B = *LUNG
    // ELSE:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_SP_0_GC') == vars.get('§SI') || vars.get('§FS_DIM_0G') == vars.get('§SI') || vars.get('§FS_DIM_6G') == vars.get('§SI') || vars.get('§FS_TEKA_0G') == vars.get('§SI') || vars.get('§FS_TEKA_GC') == vars.get('§SI')) {
        vars.setCON_A(vars.getCOL());
        vars.setCON_B(vars.getLUNG());
    } else {
        vars.setLG('');
    }
    
    // GENERATED

    return vars.output;
};
