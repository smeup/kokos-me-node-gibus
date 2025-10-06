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

export const REG0012175: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0012175
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET §DUMMYN1 = #0
    // *SET §DUMMYN2 = #0
    // *SET §DUMMYN3 = #0
    // #2
    // COND:
    // §FS_OPT_VOL = §SI
    // THEN:
    // *SET §DUMMYN1 = #3
    // #3
    // COND:
    // §FS_LED_BRA = §SI
    // THEN:
    // *SET §DUMMYN2 = #1
    // #4
    // COND:
    // §FS_LED_FRO = §SI
    // THEN:
    // *SET §DUMMYN3 = #1
    // #5
    // THEN:
    // *SET *CF = [ §DUMMYN1 + §DUMMYN2 + §DUMMYN3 ]
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setDUMMYN1(0);
    vars.setDUMMYN2(0);
    vars.setDUMMYN3(0);
    
    //#2
    if (vars.get('§FS_OPT_VOL') == vars.get('§SI')) {
        vars.setDUMMYN1(3);
    }
    
    //#3
    if (vars.get('§FS_LED_BRA') == vars.get('§SI')) {
        vars.setDUMMYN2(1);
    }
    
    //#4
    if (vars.get('§FS_LED_FRO') == vars.get('§SI')) {
        vars.setDUMMYN3(1);
    }
    
    //#5
    vars.setCF(vars.get('§DUMMYN1') + vars.get('§DUMMYN2') + vars.get('§DUMMYN3'));
    // GENERATED

    return vars.output;
};
