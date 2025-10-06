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

export const REG0002220: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0002220
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_TEKA_5 = §SI OR §FS_TEKA_0G = §SI
    // THEN:
    // *SET *CON-A = §VERN_1_COM
    // ELSE:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_TEKA_5') == vars.get('§SI') || vars.get('§FS_TEKA_0G') == vars.get('§SI')) {
        vars.setCON_A(vars.get('§VERN_1_COM'));
    } else {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
