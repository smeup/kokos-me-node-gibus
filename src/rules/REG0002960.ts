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

export const REG0002960: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0002960
    // REQUEST:
    // """
    // #1
    // COND:
    // §SALVAGOCCIA > #700
    // THEN:
    // *SET *CON-A = §VR_SALVAGOCCIA
    // *SET *CON-B = [§SALVAGOCCIA  / # 2]
    // ELSE:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§SALVAGOCCIA') > 700) {
        vars.setCON_A(vars.get('§VR_SALVAGOCCIA'));
        vars.setCON_B(vars.get('§SALVAGOCCIA') / 2);
    } else {
        vars.setLG('');
    }
    
    // GENERATED

    return vars.output;
};
