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

export const REG0005786: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0005786
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_SX_SBA_POS1 = §SI
    // THEN:
    // *SET *CON-A = §VERN_1_COM
    // *SET *CON-B = §H_SX_SBA_POS1
    // ELSE:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_SX_SBA_POS1') == vars.get('§SI')) {
        vars.setCON_A(vars.get('§VERN_1_COM'));
        vars.setCON_B(vars.get('§H_SX_SBA_POS1'));
    } else {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
