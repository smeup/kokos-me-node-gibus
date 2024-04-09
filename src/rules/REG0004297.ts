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

export const REG0004297: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0004297
    // REQUEST:
    // """
    // #1
    // COND:
    // ( §GRO_LED_IN_S > #0 ) AND (§FS_FAM2_TWIST = §SI )
    // THEN:
    // *SET *CON-A = §VERN_1_COM
    // *SET *CON-B = [§GRO_LED_IN_S + #0,4]
    // ELSE:
    // *SET *LG=''
    // """
    // RESPONSE:
    //#1
    if ((vars.get('§GRO_LED_IN_S') > 0) && (vars.get('§FS_FAM2_TWIST') == vars.get('§SI'))) {
        vars.setCON_A(vars.get('§VERN_1_COM'));
        vars.setCON_B(vars.get('§GRO_LED_IN_S') + 0.4);
    } else {
        vars.setLG('');
    }
    
    // GENERATED

    return vars.output;
};
