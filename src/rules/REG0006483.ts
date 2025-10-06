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

export const REG0006483: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0006483
    // REQUEST:
    // """
    // #1
    // COND:
    // §VR_ABB = '07' OR §VR_ABB = '08' OR §VR_ABB = '06' OR §VERN_1_COM = '0079'
    // THEN:
    // *SET *CM = '141942'
    // """
    // RESPONSE:
    //#1
    if (vars.get('§VR_ABB') == '07' || vars.get('§VR_ABB') == '08' || vars.get('§VR_ABB') == '06' || vars.get('§VERN_1_COM') == '0079') {
        vars.setCM('141942');
    }
    // GENERATED

    return vars.output;
};
