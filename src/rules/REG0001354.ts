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

export const REG0001354: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0001354
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_SPI_BLO_TER = §SI
    // THEN:
    // *SET *CON-A = 'P055'
    // ELSE:
    // *SET *LG = ''
    // #2
    // COND:
    // §FS_DIM_0G = §SI OR §FS_DIM_6G = §SI OR §FS_TEKA_0G = §SI
    // ELSE:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_SPI_BLO_TER') == vars.get('§SI')) {
        vars.setCON_A('P055');
    } else {
        vars.setLG('');
    }
    //#2
    if ((vars.get('§FS_DIM_0G') == vars.get('§SI')) || (vars.get('§FS_DIM_6G') == vars.get('§SI')) || (vars.get('§FS_TEKA_0G') == vars.get('§SI'))) {
    } else {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
