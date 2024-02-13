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

export const REG0002472: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0002472
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_DUE_2G_ZIP = §SI
    // THEN:
    // *SET *CON-A = 'P072'
    // *SET *CF = #2
    // ELSE:
    // *SET *LG = ''
    // #2
    // COND:
    // §FS_PIEDINI = '01'
    // THEN:
    // *SET *CON-B = [§L_PORTA_ZIP + #3,1]
    // ELSE:
    // *SET *CON-B = §L_PORTA_ZIP
    // #3
    // COND:
    // §FS_NO_GUI = §SI
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_DUE_2G_ZIP') == vars.get('§SI')) {
        vars.setCON_A('P072');
        vars.setCF(2);
    } else {
        vars.setLG('');
    }
    //#2
    if (vars.get('§FS_PIEDINI') == '01') {
        vars.setCON_B(vars.get('§L_PORTA_ZIP') + 3.1);
    } else {
        vars.setCON_B(vars.get('§L_PORTA_ZIP'));
    }
    //#3
    if (vars.get('§FS_NO_GUI') == vars.get('§SI')) {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
