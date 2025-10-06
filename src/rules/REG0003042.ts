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

export const REG0003042: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0003042
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_DIDUE = §SI
    // THEN:
    // *SET *CON-A = §VERN_1_COM
    // *SET *CON-B = #50
    // ELSE:
    // *SET *LG= ''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_DIDUE') == vars.get('§SI')) {
        vars.setCON_A(vars.get('§VERN_1_COM'));
        vars.setCON_B(50);
    } else {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
