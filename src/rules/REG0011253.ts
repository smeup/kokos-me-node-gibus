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

export const REG0011253: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0011253
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // THEN:
    // *SET §DUMMYB1 = ''
    // #3
    // COND:
    // §ATTACCO = '19'
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #4
    // THEN:
    // *SET §DUMMYB2 = ''
    // #5
    // COND:
    // §FS_SP_1 = §SI
    // THEN:
    // *SET §DUMMYB2 = §SI
    // #6
    // COND:
    // §FS_TEKA_1 = §SI
    // THEN:
    // *SET §DUMMYB2 = §SI
    // #7
    // COND:
    // §DUMMYB1 = §SI AND §DUMMYB2 = §SI
    // THEN:
    // *SET *CF = #1
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    vars.setDUMMYB1('');
    
    //#3
    if (vars.get('§ATTACCO') == '19') {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    
    //#4
    vars.setDUMMYB2('');
    
    //#5
    if (vars.get('§FS_SP_1') == vars.get('§SI')) {
        vars.setDUMMYB2(vars.get('§SI'));
    }
    
    //#6
    if (vars.get('§FS_TEKA_1') == vars.get('§SI')) {
        vars.setDUMMYB2(vars.get('§SI'));
    }
    
    //#7
    if (vars.get('§DUMMYB1') == vars.get('§SI') && vars.get('§DUMMYB2') == vars.get('§SI')) {
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
