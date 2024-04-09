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

export const REG0004762: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0004762
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // (§FS_DIM_250 = §SI) OR (§FS_DIM_300 = §SI)  OR (§FS_MAR_30_13 = §SI) OR (§FS_MAR_30_50 = §SI)  OR (§FS_MAR_35_13 = §SI)
    // THEN:
    // *SET *CF = §NR_SUPP_MURO
    // #3
    // COND:
    // §FS_DIM_400 = §SI
    // THEN:
    // *SET *CF = §NR_SUPP_MURO
    // #4
    // COND:
    // §VERN_1_COM = '0055'
    // ELSE:
    // *SET *CF = #0
    // #5
    // THEN:
    // *SET *LG = ''
    // ELSE:
    // *SET *LG = ''
    // """
    // RESPONSE:
    
    //#1
    vars.setCF(0);
    //#2
    if ((vars.get('§FS_DIM_250') == vars.get('§SI')) || (vars.get('§FS_DIM_300') == vars.get('§SI')) || (vars.get('§FS_MAR_30_13') == vars.get('§SI')) || (vars.get('§FS_MAR_30_50') == vars.get('§SI')) || (vars.get('§FS_MAR_35_13') == vars.get('§SI'))) {
        vars.setCF(vars.get('§NR_SUPP_MURO'));
    }
    //#3
    if (vars.get('§FS_DIM_400') == vars.get('§SI')) {
        vars.setCF(vars.get('§NR_SUPP_MURO'));
    }
    //#4
    if (vars.get('§VERN_1_COM') != '0055') {
        vars.setCF(0);
    }
    //#5
    vars.setLG('');
    vars.setLG('');
    // GENERATED

    return vars.output;
};
