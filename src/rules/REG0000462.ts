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

export const REG0000462: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0000462
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
    // §SPOR <= #187
    // THEN:
    // *SET *CF = #2
    // #3
    // COND:
    // §SPOR > #300 AND §SPOR <= #380
    // THEN:
    // *SET *CF = #4
    // #4
    // COND:
    // §SPOR > #380 AND §SPOR <= #500
    // THEN:
    // *SET *CF = #2
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_ZEROGRADI') == vars.get('§SI') || vars.get('§FS_GUI_ZER') == vars.get('§SI') || vars.get('§FS_ACC_GUI_ZER') == vars.get('§SI')) {
        vars.setCF(0);
    } else {
        vars.setLG('');
    }
    //#2
    if (vars.get('§SPOR') <= 187) {
        vars.setCF(2);
    }
    //#3
    if (vars.get('§SPOR') > 300 && vars.get('§SPOR') <= 380) {
        vars.setCF(4);
    }
    //#4
    if (vars.get('§SPOR') > 380 && vars.get('§SPOR') <= 500) {
        vars.setCF(2);
    }

    // GENERATED

    return vars.output;
};
