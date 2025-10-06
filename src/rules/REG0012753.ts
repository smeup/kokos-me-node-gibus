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

export const REG0012753: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0012753
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §FS_ANT1_T01 = §SI AND §FS_SCA_MON_ANT1 = §SI
    // THEN:
    // *SET *CF = #1
    // #3
    // COND:
    // §FS_ANT1_T02 = §SI AND §FS_SCA_MON_ANT1 = §SI
    // THEN:
    // *SET *CF = #0
    // #4
    // COND:
    // §SC_TE_MON_ANT1 = §SI
    // ELSE:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (vars.get('§FS_ANT1_T01') == vars.get('§SI') && vars.get('§FS_SCA_MON_ANT1') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#3
    if (vars.get('§FS_ANT1_T02') == vars.get('§SI') && vars.get('§FS_SCA_MON_ANT1') == vars.get('§SI')) {
        vars.setCF(0);
    }
    
    //#4
    if (vars.get('§SC_TE_MON_ANT1') == vars.get('§SI')) {
    } else {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
