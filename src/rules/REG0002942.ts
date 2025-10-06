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

export const REG0002942: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0002942
    // REQUEST:
    // """
    // #1
    // COND:
    // §L_GUIDA_LAT_TG > #0
    // THEN:
    // *SET *CON-A = §VERN_GUIDE
    // *SET *CON-B = §L_GUIDA_LAT_TG
    // *SET *CF = #2
    // ELSE:
    // *SET *LG = ''
    // #2
    // COND:
    // §FS_ACC_GUI_ZER = §SI
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    if (vars.get('§L_GUIDA_LAT_TG') > 0) {
        vars.setCON_A(vars.get('§VERN_GUIDE'));
        vars.setCON_B(vars.get('§L_GUIDA_LAT_TG'));
        vars.setCF(2);
    } else {
        vars.setLG('');
    }
    
    //#2
    if (vars.get('§FS_ACC_GUI_ZER') == vars.get('§SI')) {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
