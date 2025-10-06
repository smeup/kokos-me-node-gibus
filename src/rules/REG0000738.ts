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

export const REG0000738: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0000738
    // REQUEST:
    // """
    // #1
    // COND:
    // (§FS_11_QUJ = §SI) OR (§FS_13_QU = §SI)
    // THEN:
    // *SET *CON-A = §VERN_PLAST
    // ELSE:
    // *SET *LG = ''
    // #2
    // COND:
    // §FS_NO_GUI = §SI
    // THEN:
    // *SET *LG = ''
    // #3
    // COND:
    // *CON-A = 'P072'
    // THEN:
    // *SET *CON-A = 'P073'
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_11_QUJ') == vars.get('§SI') || vars.get('§FS_13_QU') == vars.get('§SI')) {
        vars.setCON_A(vars.get('§VERN_PLAST'));
    } else {
        vars.setLG('');
    }
    //#2
    if (vars.get('§FS_NO_GUI') == vars.get('§SI')) {
        vars.setLG('');
    }
    //#3
    if (vars.getCON_A() == 'P072') {
        vars.setCON_A('P073');
    }
    // GENERATED

    return vars.output;
};
