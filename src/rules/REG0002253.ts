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

export const REG0002253: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0002253
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET *CON-A = '0103'
    // #2
    // COND:
    // §L_TUBO_40_TG > 0
    // THEN:
    // *SET *CF = #1
    // *SET *CON-B = §L_TUBO_40_TG
    // #3
    // COND:
    // §FS_VOLANT = §SI AND §NR_PZ_RULLO = #2
    // THEN:
    // *SET *CF = #1
    // *SET *CON-B = #40
    // #4
    // COND:
    // §FS_VOL_SPA = §SI AND §NR_PZ_RULLO = #2
    // THEN:
    // *SET *CF = #1
    // *SET *CON-B = #40
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setCON_A('0103');
    
    //#2
    if (vars.get('§L_TUBO_40_TG') > 0) {
        vars.setCF(1);
        vars.setCON_B(vars.get('§L_TUBO_40_TG'));
    }
    
    //#3
    if (vars.get('§FS_VOLANT') == vars.get('§SI') && vars.get('§NR_PZ_RULLO') == 2) {
        vars.setCF(1);
        vars.setCON_B(40);
    }
    
    //#4
    if (vars.get('§FS_VOL_SPA') == vars.get('§SI') && vars.get('§NR_PZ_RULLO') == 2) {
        vars.setCF(1);
        vars.setCON_B(40);
    }
    // GENERATED

    return vars.output;
};
