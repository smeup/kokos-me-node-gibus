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

export const REG0010150: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0010150
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET §DUMMYB1 =''
    // #2
    // COND:
    // §FS_DYN_SX = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #3
    // COND:
    // §DUMMYB1 = §SI
    // THEN:
    // *SET *CF = [§NR_FRANGI + #2]
    // #4
    // COND:
    // §DUMMYB1 = §SI AND §FS_LED_LAT_SX = §SI
    // THEN:
    // *SET §DUMMYN1 = *CF
    // #5
    // COND:
    // §DUMMYB1 = §SI AND §FS_LED_LAT_SX = §SI
    // THEN:
    // *SET *CF = [§DUMMYN1 - §POS_PRI_LED - #1 + §NR_FRANGI_LED]
    // #6
    // COND:
    // §DUMMYB1 = §SI AND §NR_LED_LAT_SX > #0
    // THEN:
    // *SET §DUMMYN1 = *CF
    // #7
    // COND:
    // §DUMMYB1 = §SI AND §NR_LED_LAT_SX > #0
    // THEN:
    // *SET *CF = [§DUMMYN1 - §PO_PRI_LED_SX - #1 + §NR_LED_LAT_SX ]
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setDUMMYB1('');
    
    //#2
    if (vars.get('§FS_DYN_SX') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    
    //#3
    if (vars.get('§DUMMYB1') == vars.get('§SI')) {
        vars.setCF(vars.get('§NR_FRANGI') + 2);
    }
    
    //#4
    if (vars.get('§DUMMYB1') == vars.get('§SI') && vars.get('§FS_LED_LAT_SX') == vars.get('§SI')) {
        vars.setDUMMYN1(vars.getCF());
    }
    
    //#5
    if (vars.get('§DUMMYB1') == vars.get('§SI') && vars.get('§FS_LED_LAT_SX') == vars.get('§SI')) {
        vars.setCF(vars.get('§DUMMYN1') - vars.get('§POS_PRI_LED') - 1 + vars.get('§NR_FRANGI_LED'));
    }
    
    //#6
    if (vars.get('§DUMMYB1') == vars.get('§SI') && vars.get('§NR_LED_LAT_SX') > 0) {
        vars.setDUMMYN1(vars.getCF());
    }
    
    //#7
    if (vars.get('§DUMMYB1') == vars.get('§SI') && vars.get('§NR_LED_LAT_SX') > 0) {
        vars.setCF(vars.get('§DUMMYN1') - vars.get('§PO_PRI_LED_SX') - 1 + vars.get('§NR_LED_LAT_SX'));
    }
    // GENERATED

    return vars.output;
};
