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

export const REG0011979: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0011979
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §SPOR_TS = #200
    // THEN:
    // *SET *CF = #0,78
    // #3
    // COND:
    // §SPOR_TS = #250
    // THEN:
    // *SET *CF = #1,05
    // #4
    // COND:
    // §SPOR_TS = #300
    // THEN:
    // *SET *CF = #1,3
    // #5
    // COND:
    // §SPOR_TS = #350
    // THEN:
    // *SET *CF = #1,55
    // #6
    // COND:
    // §SPOR_TS = #400
    // THEN:
    // *SET *CF = #1,8
    // #7
    // COND:
    // §FS_LED_FRO = §SI OR §FS_OPT_VOL = SI
    // ELSE:
    // *SET *CF = #0
    // #8
    // COND:
    // §FS_LED_BRA = §SI
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (vars.get('§SPOR_TS') == 200) {
        vars.setCF(0.78);
    }
    
    //#3
    if (vars.get('§SPOR_TS') == 250) {
        vars.setCF(1.05);
    }
    
    //#4
    if (vars.get('§SPOR_TS') == 300) {
        vars.setCF(1.3);
    }
    
    //#5
    if (vars.get('§SPOR_TS') == 350) {
        vars.setCF(1.55);
    }
    
    //#6
    if (vars.get('§SPOR_TS') == 400) {
        vars.setCF(1.8);
    }
    
    //#7
    if (vars.get('§FS_LED_FRO') == vars.get('§SI') || vars.get('§FS_OPT_VOL') == vars.get('SI')) {
    } else {
        vars.setCF(0);
    }
    
    //#8
    if (vars.get('§FS_LED_BRA') == vars.get('§SI')) {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
