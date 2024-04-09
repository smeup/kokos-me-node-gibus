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

export const REG0011595: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0011595
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET §DUMMYN1 = #0
    // *SET §DUMMYN2 = #0
    // #2
    // COND:
    // §AL_LED_TUB = '250405' AND §FS_LED_CAS = §SI
    // THEN:
    // *SET §DUMMYN1 = #1
    // #3
    // COND:
    // §AL_LED_TUB = '250405' AND §FS_LED_FRO = §SI
    // THEN:
    // *SET §DUMMYN2 = #1
    // #4
    // THEN:
    // *SET *CF = [§DUMMYN1 + §DUMMYN2]
    // #5
    // COND:
    // §NR_BAR_LUN > #0
    // ELSE:
    // *SET *LG = ''
    // #6
    // COND:
    // §TI_TEM_LED = #4000
    // THEN:
    // *SET *LG = ''
    // #7
    // THEN:
    // *SET *CF = #0
    // *SET §DUMMYN1 = #0
    // *SET §DUMMYN2 = #0
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setDUMMYN1(0);
    vars.setDUMMYN2(0);
    
    //#2
    if (vars.get('§AL_LED_TUB') == '250405' && vars.get('§FS_LED_CAS') == vars.get('§SI')) {
        vars.setDUMMYN1(1);
    }
    
    //#3
    if (vars.get('§AL_LED_TUB') == '250405' && vars.get('§FS_LED_FRO') == vars.get('§SI')) {
        vars.setDUMMYN2(1);
    }
    
    //#4
    vars.setCF(vars.get('§DUMMYN1') + vars.get('§DUMMYN2'));
    
    //#5
    if (vars.get('§NR_BAR_LUN') > 0) {
    } else {
        vars.setLG('');
    }
    
    //#6
    if (vars.get('§TI_TEM_LED') == 4000) {
        vars.setLG('');
    }
    
    //#7
    vars.setCF(0);
    vars.setDUMMYN1(0);
    vars.setDUMMYN2(0);
    // GENERATED

    return vars.output;
};
