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

export const REG0009916: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0009916
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET §DUMMYN1 = #0
    // *SET §DUMMYB1 = ''
    // #2
    // COND:
    // §FS_CLI_ZIP_9 = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #3
    // COND:
    // §FS_CLI_ZIP_11 = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #4
    // COND:
    // §FS_CLI_ZIP_13 = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #5
    // COND:
    // §FS_CLI_ZIP_15 = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #6
    // COND:
    // §DUMMYB1 = §SI
    // THEN:
    // *SET §DUMMYN1 = [§LARG - #1,4]
    // #7
    // COND:
    // §DUMMYB1 = §SI AND §FS_UP = §SI
    // THEN:
    // *SET §DUMMYN1 = [§LARG - #1,5]
    // #8
    // COND:
    // §DUMMYB1 = §SI
    // THEN:
    // *SET *CF = [§DUMMYN1 / #100]
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setDUMMYN1(0);
    vars.setDUMMYB1('');
    
    //#2
    if (vars.get('§FS_CLI_ZIP_9') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    
    //#3
    if (vars.get('§FS_CLI_ZIP_11') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    
    //#4
    if (vars.get('§FS_CLI_ZIP_13') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    
    //#5
    if (vars.get('§FS_CLI_ZIP_15') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    
    //#6
    if (vars.get('§DUMMYB1') == vars.get('§SI')) {
        vars.setDUMMYN1(vars.get('§LARG') - 1.4);
    }
    
    //#7
    if ((vars.get('§DUMMYB1') == vars.get('§SI')) && (vars.get('§FS_UP') == vars.get('§SI'))) {
        vars.setDUMMYN1(vars.get('§LARG') - 1.5);
    }
    
    //#8
    if (vars.get('§DUMMYB1') == vars.get('§SI')) {
        vars.setCF(vars.get('§DUMMYN1') / 100);
    }
    // GENERATED

    return vars.output;
};
