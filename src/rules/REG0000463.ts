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

export const REG0000463: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0000463
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_ZEROGRADI = §SI OR §FS_GUI_ZER = §SI OR §FS_ACC_GUI_ZER = §SI
    // THEN:
    // *SET *CF = #0
    // ELSE:
    // *SET *LG = ''
    // #2
    // COND:
    // §SPOR > #187 AND §SPOR <= #300
    // THEN:
    // *SET *CF = #2
    // #3
    // COND:
    // §SPOR > #380 AND §SPOR <= #500
    // THEN:
    // *SET *CF = #2
    // #4
    // COND:
    // §SPOR > #500
    // THEN:
    // *SET *CF = #4
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_ZEROGRADI') == vars.get('§SI') || vars.get('§FS_GUI_ZER') == vars.get('§SI') || vars.get('§FS_ACC_GUI_ZER') == vars.get('§SI')) {
        vars.setCF(0);
    } else {
        vars.setLG('');
    }
    //#2
    if (vars.get('§SPOR') > 187 && vars.get('§SPOR') <= 300) {
        vars.setCF(2);
    }
    //#3
    if (vars.get('§SPOR') > 380 && vars.get('§SPOR') <= 500) {
        vars.setCF(2);
    }
    //#4
    if (vars.get('§SPOR') > 500) {
        vars.setCF(4);
    }
    // GENERATED

    return vars.output;
};
