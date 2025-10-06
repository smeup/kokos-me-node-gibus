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

export const REG0007914: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0007914
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §FS_FAM2_CLI_ZIP = §SI
    // THEN:
    // *SET *CF = §NR_ZAV_FR2
    // #3
    // COND:
    // §FS_TEL_TWI = §SI
    // THEN:
    // *SET *CF = §NR_ZAV_FR2
    // #4
    // COND:
    // §NR_VER_ZAV = #1
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (vars.get('§FS_FAM2_CLI_ZIP') == vars.get('§SI')) {
        vars.setCF(vars.get('§NR_ZAV_FR2'));
    }
    
    //#3
    if (vars.get('§FS_TEL_TWI') == vars.get('§SI')) {
        vars.setCF(vars.get('§NR_ZAV_FR2'));
    }
    
    //#4
    if (vars.get('§NR_VER_ZAV') == 1) {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
