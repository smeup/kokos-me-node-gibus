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

export const REG0000226: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0000226
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_RULLO_80 = §SI OR §FS_ROL_80 = §SI OR §FS_RUL_NOR_80 = §SI
    // THEN:
    // *SET *CON-A = *COL
    // *SET *CON-B = *LUNG
    // ELSE:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_RULLO_80') == vars.get('§SI') || vars.get('§FS_ROL_80') == vars.get('§SI') || vars.get('§FS_RUL_NOR_80') == vars.get('§SI')) {
        vars.setCON_A(vars.getCOL());
        vars.setCON_B(vars.getLUNG());
    } else {
        vars.setLG('');
    }
    
    // GENERATED

    return vars.output;
};
