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

export const REG0011620: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0011620
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §TI_TEM_LED = #4000
    // ELSE:
    // *SET *LG = ''
    // #3
    // COND:
    // (§AL_LED_TUB = '250405' ) OR (§AL_LED_TUB = '250480')
    // ELSE:
    // *SET *LG = ''
    // #4
    // COND:
    // §FS_LED_FRO = §SI AND §FS_LED_CAS = §SI
    // ELSE:
    // *SET *LG = ''
    // #5
    // THEN:
    // *SET §DUMMYN1 = [ §NR_BAR_COR * #5 ]
    // #6
    // THEN:
    // *SET §DUMMYN2 = [ §NR_BAR_COR * #7 ]
    // #7
    // THEN:
    // *SET §DUMMYN3 = [ §DUMMYN1 + §DUMMYN2 ]
    // #8
    // COND:
    // §DUMMYN3 >= #28
    // THEN:
    // *SET *CF = #2
    // #9
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (vars.get('§TI_TEM_LED') == 4000) {
    } else {
        vars.setLG('');
    }
    
    //#3
    if ((vars.get('§AL_LED_TUB') == '250405') || (vars.get('§AL_LED_TUB') == '250480')) {
    } else {
        vars.setLG('');
    }
    
    //#4
    if ((vars.get('§FS_LED_FRO') == vars.get('§SI')) && (vars.get('§FS_LED_CAS') == vars.get('§SI'))) {
    } else {
        vars.setLG('');
    }
    
    //#5
    vars.setDUMMYN1(vars.get('§NR_BAR_COR') * 5);
    
    //#6
    vars.setDUMMYN2(vars.get('§NR_BAR_COR') * 7);
    
    //#7
    vars.setDUMMYN3(vars.get('§DUMMYN1') + vars.get('§DUMMYN2'));
    
    //#8
    if (vars.get('§DUMMYN3') >= 28) {
        vars.setCF(2);
    }
    
    //#9
    vars.setCF(0);
    // GENERATED

    return vars.output;
};
