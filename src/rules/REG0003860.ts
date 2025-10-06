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

export const REG0003860: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0003860
    // REQUEST:
    // """
    // #1
    // COND:
    // ( ( §GRO_LED_IN_S > #0 ) OR ( §GRO_LED_IN_L > #0  ) ) AND (§FS_FAM2_ZENIT<>§SI )
    // ELSE:
    // *SET *LG=''
    // """
    // RESPONSE:
    //#1
    if (((vars.get('§GRO_LED_IN_S') > 0) || (vars.get('§GRO_LED_IN_L') > 0)) && (vars.get('§FS_FAM2_ZENIT') != vars.get('§SI'))) {
    } else {
        vars.setLG("");
    }
    // GENERATED

    return vars.output;
};
