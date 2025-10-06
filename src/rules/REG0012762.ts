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

export const REG0012762: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0012762
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET §DUMMYN1 = #0
    // *SET §DUMMYN2 = #0
    // #2
    // COND:
    // §FS_LED_LAT_SX = §SI
    // THEN:
    // *SET §DUMMYN1 = #1
    // #3
    // COND:
    // §FS_LED_LAT_DX = §SI
    // THEN:
    // *SET §DUMMYN2 = #1
    // #4
    // THEN:
    // *SET *CF = [(§DUMMYN1 + §DUMMYN2) * §NR_FRANGI_LED]
    // """
    // RESPONSE:
    //#1
    vars.setDUMMYN1(0);
    vars.setDUMMYN2(0);
    
    //#2
    if (vars.get('§FS_LED_LAT_SX') == vars.get('§SI')) {
        vars.setDUMMYN1(1);
    }
    
    //#3
    if (vars.get('§FS_LED_LAT_DX') == vars.get('§SI')) {
        vars.setDUMMYN2(1);
    }
    
    //#4
    vars.setCF((vars.get('§DUMMYN1') + vars.get('§DUMMYN2')) * vars.get('§NR_FRANGI_LED'));
    // GENERATED

    return vars.output;
};
