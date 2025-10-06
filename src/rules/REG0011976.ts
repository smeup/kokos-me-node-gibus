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

export const REG0011976: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0011976
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §SPOR_TS = #150
    // THEN:
    // *SET *CF = #0,545
    // #3
    // COND:
    // §SPOR_TS = #200
    // THEN:
    // *SET *CF = #0,8
    // #4
    // COND:
    // §SPOR_TS = #225
    // THEN:
    // *SET *CF = #0,92
    // #5
    // COND:
    // §SPOR_TS = #250
    // THEN:
    // *SET *CF = #1,045
    // #6
    // COND:
    // §SPOR_TS = #300
    // THEN:
    // *SET *CF = #1,29
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
    if (vars.get('§SPOR_TS') == 150) {
        vars.setCF(0.545);
    }
    
    //#3
    if (vars.get('§SPOR_TS') == 200) {
        vars.setCF(0.8);
    }
    
    //#4
    if (vars.get('§SPOR_TS') == 225) {
        vars.setCF(0.92);
    }
    
    //#5
    if (vars.get('§SPOR_TS') == 250) {
        vars.setCF(1.045);
    }
    
    //#6
    if (vars.get('§SPOR_TS') == 300) {
        vars.setCF(1.29);
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
