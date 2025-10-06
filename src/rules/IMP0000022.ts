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

export const IMP0000022: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: IMP0000022
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_SCRIGNO_250 = §SI
    // THEN:
    // *SET *CON-A = §VERN_FRONTALE
    // *SET *LG = ''
    // ELSE:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_SCRIGNO_250') == vars.get('§SI')) {
        vars.setCON_A(vars.get('§VERN_FRONTALE'));
        vars.setLG('');
    } else {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
