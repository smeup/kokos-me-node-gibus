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

export const REG0012291: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0012291
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §FS_VOL_SPA = §SI
    // THEN:
    // *SET *CF = #1
    // #3
    // COND:
    // §FS_VOL_SPA = §SI AND §L_RUL_MST > #500
    // THEN:
    // *SET *CF = #2
    // #4
    // COND:
    // *CF > #0
    // THEN:
    // *SET *CON-A = 'P134'
    // *SET *CON-B = [ ( §L_RULLO + #3 ) / *CF ]
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (vars.get('§FS_VOL_SPA') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#3
    if (vars.get('§FS_VOL_SPA') == vars.get('§SI') && vars.get('§L_RUL_MST') > 500) {
        vars.setCF(2);
    }
    
    //#4
    if (vars.getCF() > 0) {
        vars.setCON_A('P134');
        vars.setCON_B((vars.get('§L_RULLO') + 3) / vars.getCF());
    }
    // GENERATED

    return vars.output;
};
