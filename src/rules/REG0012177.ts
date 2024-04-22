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

export const REG0012177: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0012177
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET §DUMMYB1 = ''
    // #2
    // COND:
    // §FS_LED_FRO = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #3
    // COND:
    // §FS_LED_BRA = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #4
    // COND:
    // §FS_OPT_VOL = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #5
    // COND:
    // §DUMMYB1 = §SI
    // THEN:
    // *SET *CF = [ §L_RULLO / #100 ]
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setDUMMYB1('');
    
    //#2
    if (vars.get('§FS_LED_FRO') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    
    //#3
    if (vars.get('§FS_LED_BRA') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    
    //#4
    if (vars.get('§FS_OPT_VOL') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    
    //#5
    if (vars.get('§DUMMYB1') == vars.get('§SI')) {
        vars.setCF(vars.get('§L_RULLO') / 100);
    }
    // GENERATED

    return vars.output;
};
