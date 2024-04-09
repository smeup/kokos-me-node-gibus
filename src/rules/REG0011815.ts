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

export const REG0011815: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0011815
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §FS_ZIP <> §SI
    // THEN:
    // *SET *LG = ''
    // #3
    // COND:
    // ( §FS_FAM2_DUETTO = §SI ) OR ( §FS_11_QUJ = §SI )
    // THEN:
    // *SET *CF = #1
    // #4
    // COND:
    // §FS_RUL_70_LIS = §SI AND §FS_FAM2_CLI_ZIP = §SI
    // THEN:
    // *SET *CF = #1
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (vars.get('§FS_ZIP') != vars.get('§SI')) {
        vars.setLG('');
    }
    
    //#3
    if ((vars.get('§FS_FAM2_DUETTO') == vars.get('§SI')) || (vars.get('§FS_11_QUJ') == vars.get('§SI'))) {
        vars.setCF(1);
    }
    
    //#4
    if ((vars.get('§FS_RUL_70_LIS') == vars.get('§SI')) && (vars.get('§FS_FAM2_CLI_ZIP') == vars.get('§SI'))) {
        vars.setCF(1);
    }
    
    // GENERATED

    return vars.output;
};
