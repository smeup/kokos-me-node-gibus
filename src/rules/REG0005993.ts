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

export const REG0005993: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0005993
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF=#0
    // #2
    // COND:
    // §FS_FAM2_CLI_ZIP=§SI
    // THEN:
    // *SET *CF = [ §NR_ZAVOR_AGG + §NR_ZAVOR_FRONTA ]
    // #3
    // COND:
    // §FS_TEL_TWI = §SI
    // THEN:
    // *SET *CF = [ §NR_ZAVOR_AGG + §NR_ZAVOR_FRONTA ]
    // #4
    // COND:
    // §FS_TEL_RUL_FRO = §SI AND §TI_FRO = '03'
    // THEN:
    // *SET *CF = [ §NR_ZAVOR_AGG + §NR_ZAVOR_FRONTA ]
    // #5
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
        vars.setCF(vars.get('§NR_ZAVOR_AGG') + vars.get('§NR_ZAVOR_FRONTA'));
    }
    
    //#3
    if (vars.get('§FS_TEL_TWI') == vars.get('§SI')) {
        vars.setCF(vars.get('§NR_ZAVOR_AGG') + vars.get('§NR_ZAVOR_FRONTA'));
    }
    
    //#4
    if (vars.get('§FS_TEL_RUL_FRO') == vars.get('§SI') && vars.get('§TI_FRO') == '03') {
        vars.setCF(vars.get('§NR_ZAVOR_AGG') + vars.get('§NR_ZAVOR_FRONTA'));
    }
    
    //#5
    if (vars.get('§NR_VER_ZAV') == 1) {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
