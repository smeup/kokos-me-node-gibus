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

export const REG0009447: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0009447
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET §DUMMYB1 = ''
    // #2
    // COND:
    // §FS_NODO = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #3
    // COND:
    // §FS_TXT = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #4
    // THEN:
    // *SET §DUMMYB2 = ''
    // #5
    // COND:
    // §FS_LED_CAS = §SI
    // THEN:
    // *SET §DUMMYB2 = §SI
    // #6
    // COND:
    // §FS_LED_FRO = §SI
    // THEN:
    // *SET §DUMMYB2 = §SI
    // #7
    // COND:
    // §DUMMYB1 = §SI AND §DUMMYB2 = §SI
    // THEN:
    // *SET *CF = #1
    // #8
    // COND:
    // §FS_SEGNO = §SI AND §FS_RUL_85_LIS = §SI AND §FS_LED_FRO = §SI
    // THEN:
    // *SET *CF = #1
    // #9
    // COND:
    // §FS_LED_T01 = §SI
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setDUMMYB1('');
    
    //#2
    if (vars.get('§FS_NODO') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    
    //#3
    if (vars.get('§FS_TXT') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    
    //#4
    vars.setDUMMYB2('');
    
    //#5
    if (vars.get('§FS_LED_CAS') == vars.get('§SI')) {
        vars.setDUMMYB2(vars.get('§SI'));
    }
    
    //#6
    if (vars.get('§FS_LED_FRO') == vars.get('§SI')) {
        vars.setDUMMYB2(vars.get('§SI'));
    }
    
    //#7
    if (vars.get('§DUMMYB1') == vars.get('§SI') && vars.get('§DUMMYB2') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#8
    if (vars.get('§FS_SEGNO') == vars.get('§SI') && vars.get('§FS_RUL_85_LIS') == vars.get('§SI') && vars.get('§FS_LED_FRO') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#9
    if (vars.get('§FS_LED_T01') == vars.get('§SI')) {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
