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

export const REG0002379: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0002379
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_FAM2_DUETTO = §SI
    // THEN:
    // *SET *CON-A = §VERN_PLAST
    // ELSE:
    // *SET *LG = ''
    // #2
    // COND:
    // §FS_DUE_2G_ZIP
    // THEN:
    // *SET *CF = #2
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_FAM2_DUETTO') == vars.get('§SI')) {
        vars.setCON_A(vars.get('§VERN_PLAST'));
    } else {
        vars.setLG('');
    }
    
    //#2
    if (vars.get('§FS_DUE_2G_ZIP')) {
        vars.setCF(2);
    }
    // GENERATED

    return vars.output;
};
