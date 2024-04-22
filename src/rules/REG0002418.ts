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

export const REG0002418: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0002418
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_FAM2_TEKA = §SI OR §FS_FAM2_DIM_TC = §SI OR §FS_FAM2_SP = §SI
    // #2
    // THEN:
    // *SET *CF = #0
    // #3
    // COND:
    // §FS_RULLO_70 = §SI
    // THEN:
    // *SET *CF = #1
    // #4
    // COND:
    // §FS_FAM2_CLI_CAB = §SI AND §VER_CAL_T01 = '2020'
    // THEN:
    // *SET *CF = #0
    // #5
    // COND:
    // §VER_CAL_T01 = '2020BG'
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_FAM2_TEKA') == vars.get('§SI') || vars.get('§FS_FAM2_DIM_TC') == vars.get('§SI') || vars.get('§FS_FAM2_SP') == vars.get('§SI')) {
    }
    
    //#2
    vars.setCF(0);
    
    //#3
    if (vars.get('§FS_RULLO_70') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#4
    if (vars.get('§FS_FAM2_CLI_CAB') == vars.get('§SI') && vars.get('§VER_CAL_T01') == '2020') {
        vars.setCF(0);
    }
    
    //#5
    if (vars.get('§VER_CAL_T01') == '2020BG') {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
