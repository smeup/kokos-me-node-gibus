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

export const REG0001048: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0001048
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_ZEROGRADI = §SI
    // THEN:
    // *SET *CF = [§L_GUARN_CASS / #100]
    // *SET *CON-A = 'P072'
    // ELSE:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_ZEROGRADI') == vars.get('§SI')) {
        vars.setCF(vars.get('§L_GUARN_CASS') / 100);
        vars.setCON_A('P072');
    } else {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
