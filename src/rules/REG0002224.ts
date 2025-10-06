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

export const REG0002224: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0002224
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = 0
    // #2
    // COND:
    // §FIX_GUIDE = '01' AND (§FS_DUE_VER_ZIP = §SI OR §FS_DUE_1_ZIP = §SI)
    // THEN:
    // *SET *CF = #1
    // *SET *CON-A = §VERN_1_COM
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    //#2
    if (vars.get('§FIX_GUIDE') == '01' && (vars.get('§FS_DUE_VER_ZIP') == vars.get('§SI') || vars.get('§FS_DUE_1_ZIP') == vars.get('§SI'))) {
        vars.setCF(1);
        vars.setCON_A(vars.get('§VERN_1_COM'));
    }
    // GENERATED

    return vars.output;
};
