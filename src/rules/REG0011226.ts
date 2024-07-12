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

export const REG0011226: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0011226
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET §DUMMYB1 = ''
    // #2
    // COND:
    // §_LIN = 'IT' OR §_LIN = 'EN'
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #3
    // COND:
    // §_LIN <> 'DE' AND §_LIN <> 'FR' AND §_LIN <> 'ES'
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #4
    // COND:
    // §DUMMYB1 = §SI
    // THEN:
    // *SET *CF = #1
    // ELSE:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    vars.setDUMMYB1('');
    
    //#2
    if (vars.get('_LIN') == 'IT' || vars.get('_LIN') == 'EN') {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    
    //#3
    if (vars.get('_LIN') != 'DE' && vars.get('_LIN') != 'FR' && vars.get('_LIN') != 'ES') {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    
    //#4
    if (vars.get('§DUMMYB1') == vars.get('§SI')) {
        vars.setCF(1);
    } else {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
