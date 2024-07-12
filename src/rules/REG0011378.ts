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

export const REG0011378: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0011378
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET §DUMMYB1 = ''
    // #2
    // COND:
    // §FS_FAM2_JOY = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #3
    // COND:
    // §FS_FAM2_TWIST = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #4
    // COND:
    // §FS_FAM2_ZENIT = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #5
    // COND:
    // §DUMMYB1 = §SI
    // THEN:
    // *SET *CF = #2
    // #6
    // COND:
    // §DUMMYB1 = §SI AND §FS_FAM2_ADDL = §SI
    // THEN:
    // *SET *CF = #1
    // #7
    // COND:
    // §DUMMYB1 = §SI AND §FS_FAM2_ADDF = §SI
    // THEN:
    // *SET *CF = #1
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setDUMMYB1('');
    
    //#2
    if (vars.get('§FS_FAM2_JOY') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    
    //#3
    if (vars.get('§FS_FAM2_TWIST') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    
    //#4
    if (vars.get('§FS_FAM2_ZENIT') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    
    //#5
    if (vars.get('§DUMMYB1') == vars.get('§SI')) {
        vars.setCF(2);
    }
    
    //#6
    if ((vars.get('§DUMMYB1') == vars.get('§SI')) && (vars.get('§FS_FAM2_ADDL') == vars.get('§SI'))) {
        vars.setCF(1);
    }
    
    //#7
    if ((vars.get('§DUMMYB1') == vars.get('§SI')) && (vars.get('§FS_FAM2_ADDF') == vars.get('§SI'))) {
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
