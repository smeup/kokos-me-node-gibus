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

export const REG0008257: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0008257
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_ATT_PARETE = §SI
    // THEN:
    // *SET *CON-A = §VERN_1_COM
    // *SET *CON-B = #16,4
    // ELSE:
    // *SET *LG=''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_ATT_PARETE') == vars.get('§SI')) {
        vars.setCON_A(vars.get('§VERN_1_COM'));
        vars.setCON_B(16.4);
    } else {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
