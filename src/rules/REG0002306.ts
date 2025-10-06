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

export const REG0002306: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0002306
    // REQUEST:
    // """
    // #1
    // COND:
    // (§FS_DIM_0G = §SI) OR (§FS_DIM_5 = §SI)
    // THEN:
    // *SET *LG = ''
    // #2
    // COND:
    // §FS_MOT_DOP = §SI
    // THEN:
    // *SET *CF = #2
    // #3
    // COND:
    // §FS_TEN_VEC = §SI
    // THEN:
    // *SET *CF = #0
    // #4
    // COND:
    // §FS_SUP_MOT_T01 = §SI
    // THEN:
    // *SET *CF = #0
    // #5
    // COND:
    // §FS_CLI_ZIP_TWI = §SI AND §FS_TEL1_TWI = §NO
    // THEN:
    // *SET *CF = #0
    // #6
    // COND:
    // §FS_CLI_TWI_BG = §SI AND §FS_TEL1_TWI = §NO
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_DIM_0G') == vars.get('§SI') || vars.get('§FS_DIM_5') == vars.get('§SI')) {
        vars.setLG('');
    }
    
    //#2
    if (vars.get('§FS_MOT_DOP') == vars.get('§SI')) {
        vars.setCF(2);
    }
    
    //#3
    if (vars.get('§FS_TEN_VEC') == vars.get('§SI')) {
        vars.setCF(0);
    }
    
    //#4
    if (vars.get('§FS_SUP_MOT_T01') == vars.get('§SI')) {
        vars.setCF(0);
    }
    
    //#5
    if (vars.get('§FS_CLI_ZIP_TWI') == vars.get('§SI') && vars.get('§FS_TEL1_TWI') == vars.get('§NO')) {
        vars.setCF(0);
    }
    
    //#6
    if (vars.get('§FS_CLI_TWI_BG') == vars.get('§SI') && vars.get('§FS_TEL1_TWI') == vars.get('§NO')) {
        vars.setCF(0);
    }
    
    // GENERATED

    return vars.output;
};
