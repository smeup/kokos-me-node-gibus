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

export const REG0006952: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0006952
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #1
    // #2
    // COND:
    // §FS_ZIP = §SI
    // THEN:
    // *SET *CF = #0
    // #3
    // COND:
    // §FS_FAM2_SP = §SI
    // THEN:
    // *SET *CF = #0
    // #4
    // COND:
    // §FS_SP_0_GCT = §SI
    // THEN:
    // *SET *CF = #1
    // #5
    // COND:
    // §FS_DIM_5 = §SI
    // THEN:
    // *SET *CF = #1
    // #6
    // COND:
    // §FS_DIM_0G = §SI
    // THEN:
    // *SET *CF = #1
    // #7
    // COND:
    // §FS_FAM2_CLI_CAB = §SI
    // THEN:
    // *SET *CF = #1
    // """
    // RESPONSE:
    //#1
    vars.setCF(1);
    
    //#2
    if (vars.get('§FS_ZIP') == vars.get('§SI')) {
        vars.setCF(0);
    }
    
    //#3
    if (vars.get('§FS_FAM2_SP') == vars.get('§SI')) {
        vars.setCF(0);
    }
    
    //#4
    if (vars.get('§FS_SP_0_GCT') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#5
    if (vars.get('§FS_DIM_5') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#6
    if (vars.get('§FS_DIM_0G') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#7
    if (vars.get('§FS_FAM2_CLI_CAB') == vars.get('§SI')) {
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
