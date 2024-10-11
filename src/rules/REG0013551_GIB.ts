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

export const REG0013551_GIB: Rule = (iv) => {

    const vars = new Variables(iv);

    let coef = 0;
    let tiTra =  vars.get("§TI_TRA_ANT_T01");
    if(tiTra == '60X100'){
        let nModuli = vars.get("§N_MODULI");
        coef = 0 + +nModuli; //nModuli è stringa
    }

    vars.setCF(coef);
    
    return vars.output;
};
