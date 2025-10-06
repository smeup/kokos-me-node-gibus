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

export const REG0000399: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0000399
    // REQUEST:
    // """
    // #1
    // COND:
    // §L_RULLO_TG > #0
    // THEN:
    // *SET *CON-A = '0000'
    // *SET *CON-B = §L_RULLO_TG
    // *SET *CF = §NR_PZ_RULLO
    // ELSE:
    // *SET *LG = ''
    // #2
    // COND:
    // §FS_TEL_RUL = §SI
    // THEN:
    // *SET *LG = ''
    // #3
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    if (vars.get('§L_RULLO_TG') > 0) {
        vars.setCON_A('0000');
        vars.setCON_B(vars.get('§L_RULLO_TG'));
        vars.setCF(vars.get('§NR_PZ_RULLO'));
    } else {
        vars.setLG('');
    }
    
    //#2
    if (vars.get('§FS_TEL_RUL') == vars.get('§SI')) {
        vars.setLG('');
    }
    
    //#3
    vars.setCF(0);
    // GENERATED

    return vars.output;
};
