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

export const REG0000461: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0000461
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_ZEROGRADI = §SI OR §FS_GUI_ZER = §SI  OR §FS_ACC_GUI_ZER = §SI
    // THEN:
    // *SET *CF = #461,1
    // ELSE:
    // *SET *LG = ''
    // #2
    // COND:
    // §SPOR > #197
    // THEN:
    // *SET *CF = #706,3
    // #3
    // COND:
    // §SPOR > #300
    // THEN:
    // *SET *CF = #898,1
    // #4
    // COND:
    // §SPOR > #380
    // THEN:
    // *SET *CF = #1148,3
    // #5
    // COND:
    // §SPOR > #500
    // THEN:
    // *SET *CF = #1398,5
    // #6
    // THEN:
    // *SET §DUMMYN1 = [*CF / #100]
    // #7
    // THEN:
    // *SET *CF = §DUMMYN1
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_ZEROGRADI') == vars.get('§SI') || vars.get('§FS_GUI_ZER') == vars.get('§SI') || vars.get('§FS_ACC_GUI_ZER') == vars.get('§SI')) {
        vars.setCF(461.1);
    } else {
        vars.setLG('');
    }
    //#2
    if (vars.get('§SPOR') > 197) {
        vars.setCF(706.3);
    }
    //#3
    if (vars.get('§SPOR') > 300) {
        vars.setCF(898.1);
    }
    //#4
    if (vars.get('§SPOR') > 380) {
        vars.setCF(1148.3);
    }
    //#5
    if (vars.get('§SPOR') > 500) {
        vars.setCF(1398.5);
    }
    //#6
    vars.setDUMMYN1(vars.getCF() / 100);
    //#7
    vars.setCF(vars.getDUMMYN1());
    // GENERATED

    return vars.output;
};
