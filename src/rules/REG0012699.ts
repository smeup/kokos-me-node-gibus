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

export const REG0012699: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0012699
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET *CON-A = 'P000'
    // #2
    // COND:
    // §FS_VOL_SPA = §SI AND §L_FRONTALE_TG > #352
    // THEN:
    // *SET *CF = #1
    // *SET *CON-B = #350
    // #3
    // COND:
    // §FS_VOL_SPA = §SI AND §L_FRONTALE_TG <= #352
    // THEN:
    // *SET *CF = #1
    // *SET *CON-B = [ §L_FRONTALE_TG  - #2  ]
    // #4
    // COND:
    // §FS_VOL_SPA = §SI
    // THEN:
    // *SET *CF = #1
    // *SET *CON-B = §L_FRONTALE_TG
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setCON_A('P000');
    
    //#2
    if (vars.get('§FS_VOL_SPA') == vars.get('§SI') && vars.get('§L_FRONTALE_TG') > 352) {
        vars.setCF(1);
        vars.setCON_B(350);
    }
    
    //#3
    if (vars.get('§FS_VOL_SPA') == vars.get('§SI') && vars.get('§L_FRONTALE_TG') <= 352) {
        vars.setCF(1);
        vars.setCON_B(vars.get('§L_FRONTALE_TG') - 2);
    }
    
    //#4
    if (vars.get('§FS_VOL_SPA') == vars.get('§SI')) {
        vars.setCF(1);
        vars.setCON_B(vars.get('§L_FRONTALE_TG'));
    }
    // GENERATED

    return vars.output;
};
