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

export const REG0000396: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0000396
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_FAM2_TOLO = §SI AND §TI_RUL_TS <> '06'
    // THEN:
    // *SET *CON-A = *COL
    // *SET *CON-B = *LUNG
    // ELSE:
    // *SET *LG = ''
    // #2
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_FAM2_TOLO') == vars.get('§SI') && vars.get('§TI_RUL_TS') != '06') {
        vars.setCON_A(vars.getCOL());
        vars.setCON_B(vars.getLUNG());
    } else {
        vars.setLG('');
    }
    
    //#2
    vars.setCF(0);
    
    // GENERATED

    return vars.output;
};
