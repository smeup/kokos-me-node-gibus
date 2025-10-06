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

export const REG0004757: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0004757
    // REQUEST:
    // """
    // #1
    // COND:
    // (§FS_TEL_MED_CF = §SI) OR (§FS_TEL_VEL_CF = §SI)
    // THEN:
    // *SET *CM = §TESS_HID
    // *SET *CF = §CONSUMO_TELO
    // ELSE:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_TEL_MED_CF') == vars.get('§SI') || vars.get('§FS_TEL_VEL_CF') == vars.get('§SI')) {
        vars.setCM(vars.get('§TESS_HID'));
        vars.setCF(vars.get('§CONSUMO_TELO'));
    } else {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
