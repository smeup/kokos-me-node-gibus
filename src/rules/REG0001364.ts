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

export const REG0001364: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0001364
    // REQUEST:
    // """
    // #1
    // COND:
    // §FO_TELO2 = §SI
    // THEN:
    // *SET *CM = §TESS2_HID
    // ELSE:
    // *SET *LG = ''
    // #2
    // THEN:
    // *SET *CF = §CONSUMO_TELO
    // #3
    // COND:
    // §CON_TEL_EFF > #0
    // THEN:
    // *SET *CF = §CON_TEL_EFF
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FO_TELO2') == vars.get('§SI')) {
        vars.setCM(vars.get('§TESS2_HID'));
    } else {
        vars.setLG('');
    }
    
    //#2
    vars.setCF(vars.get('§CONSUMO_TELO'));
    
    //#3
    if (vars.get('§CON_TEL_EFF') > 0) {
        vars.setCF(vars.get('§CON_TEL_EFF'));
    }
    // GENERATED

    return vars.output;
};
