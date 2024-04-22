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

export const REG0002429: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0002429
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_RUL_85_LIS = §SI
    // ELSE:
    // *SET *LG = ''
    // #2
    // THEN:
    // *SET *CF = #0
    // #3
    // COND:
    // §FS_DIM_250 = §SI OR §FS_DIM_300 = §SI OR §FS_DIM_400 = §SI
    // THEN:
    // *SET *CF = #1
    // #4
    // COND:
    // §FS_MAR_30_13 = §SI OR §FS_MAR_30_50 = §SI OR §FS_MAR_35_13 = §SI
    // THEN:
    // *SET *CF = #1
    // #5
    // COND:
    // §FS_SP_50Q = §SI
    // THEN:
    // *SET *CF = #1
    // #6
    // COND:
    // §FS_SPA_60 = §SI
    // THEN:
    // *SET *CF = #1
    // #7
    // COND:
    // §FS_SPA_75 = §SI
    // THEN:
    // *SET *CF = #1
    // #8
    // COND:
    // §FS_AL_LED_T01 = §SI
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_RUL_85_LIS') == vars.get('§SI')) {
    } else {
        vars.setLG('');
    }
    
    //#2
    vars.setCF(0);
    
    //#3
    if (vars.get('§FS_DIM_250') == vars.get('§SI') || vars.get('§FS_DIM_300') == vars.get('§SI') || vars.get('§FS_DIM_400') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#4
    if (vars.get('§FS_MAR_30_13') == vars.get('§SI') || vars.get('§FS_MAR_30_50') == vars.get('§SI') || vars.get('§FS_MAR_35_13') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#5
    if (vars.get('§FS_SP_50Q') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#6
    if (vars.get('§FS_SPA_60') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#7
    if (vars.get('§FS_SPA_75') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#8
    if (vars.get('§FS_AL_LED_T01') == vars.get('§SI')) {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
