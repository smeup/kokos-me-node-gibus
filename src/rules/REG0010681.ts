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

export const REG0010681: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0010681
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET §DUMMYB1 = ''
    // *SET *CF = #0
    // #2
    // COND:
    // §FS_AN_AGG1_CAM1 = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #3
    // COND:
    // §SC_AN_AGG1_CAM1 = §SI
    // THEN:
    // *SET §DUMMYB1 = ''
    // #4
    // COND:
    // §DUMMYB1 = §SI
    // THEN:
    // *SET *CF = #1
    // """
    // RESPONSE:
    //#1
    vars.setDUMMYB1('');
    vars.setCF(0);
    
    //#2
    if (vars.get('§FS_AN_AGG1_CAM1') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    
    //#3
    if (vars.get('§SC_AN_AGG1_CAM1') == vars.get('§SI')) {
        vars.setDUMMYB1('');
    }
    
    //#4
    if (vars.get('§DUMMYB1') == vars.get('§SI')) {
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
