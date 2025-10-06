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

export const REG0009385: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0009385
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET *CON-A = §VERN_PLAST
    // #2
    // COND:
    // §NR_SPE_GUI > #0
    // THEN:
    // *SET *CF = §NR_SPE_GUI
    // #3
    // COND:
    // §FS_FAM2_CLI_ZIP = §SI
    // ELSE:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setCON_A(vars.get('§VERN_PLAST'));
    
    //#2
    if (vars.get('§NR_SPE_GUI') > 0) {
        vars.setCF(vars.get('§NR_SPE_GUI'));
    }
    
    //#3
    if (vars.get('§FS_FAM2_CLI_ZIP') == vars.get('§SI')) {
    } else {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
