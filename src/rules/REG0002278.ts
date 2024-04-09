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

export const REG0002278: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0002278
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = [§LARG * #2 / #100 + #0,2]
    // #2
    // COND:
    // §VERN_1_COM = '0055' OR §VERN_1_COM = '0053' OR §VERN_1_COM = '0065' OR                                                      §VR_ABB = '01' OR §VR_ABB = '02'
    // THEN:
    // *SET *CM = '220002'
    // """
    // RESPONSE:
    //#1
    vars.setCF(vars.get('§LARG') * 2 / 100 + 0.2);
    
    //#2
    if (vars.get('§VERN_1_COM') == '0055' || vars.get('§VERN_1_COM') == '0053' || vars.get('§VERN_1_COM') == '0065' || vars.get('§VR_ABB') == '01' || vars.get('§VR_ABB') == '02') {
        vars.setCM('220002');
    }
    // GENERATED

    return vars.output;
};
