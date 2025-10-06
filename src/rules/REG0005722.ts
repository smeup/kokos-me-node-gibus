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

export const REG0005722: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0005722
    // REQUEST:
    // """
    // #1
    // COND:
    // ( ( §SUP_VELA>=#275 ) AND ( §SUP_VELA<=#375 ) ) AND ( ( §L_BOMA>=#385 ) AND ( §L_BOMA<=#525 ) )
    // THEN:
    // *SET *CF=#1
    // ELSE:
    // *SET *CF=#2
    // """
    // RESPONSE:
    //#1
    if ((vars.get('§SUP_VELA') >= 275 && vars.get('§SUP_VELA') <= 375) && (vars.get('§L_BOMA') >= 385 && vars.get('§L_BOMA') <= 525)) {
        vars.setCF(1);
    } else {
        vars.setCF(2);
    }
    // GENERATED

    return vars.output;
};
