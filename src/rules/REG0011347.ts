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

export const REG0011347: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0011347
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET §DUMMYB1 = ''
    // #2
    // THEN:
    // *SET §DUMMYN1 = #0
    // *SET §DUMMYN2 = #0
    // *SET §DUMMYN3 = #0
    // *SET §DUMMYN4 = #0
    // #3
    // COND:
    // §FS_CEN_GES_TC = §SI
    // THEN:
    // *SET §DUMMYN1 = #1
    // #4
    // COND:
    // §FS_ALIM_LED = §SI
    // THEN:
    // *SET §DUMMYN2 = #1
    // #5
    // COND:
    // §FS_ALIM_LED_PER = §SI
    // THEN:
    // *SET §DUMMYN3 = #1
    // #6
    // COND:
    // §FS_ALIM_LED_RGB = §SI
    // THEN:
    // *SET §DUMMYN4 = #1
    // #7
    // COND:
    // §FS_FAM2_JOY = §SI OR §FS_FAM2_AZIMUT = §SI
    // THEN:
    // *SET §DUMMYN2 = #0
    // *SET §DUMMYN3 = #0
    // *SET §DUMMYN4 = #0
    // #8
    // THEN:
    // *SET §DUMMYN5 = [§DUMMYN1 + §DUMMYN2 + §DUMMYN3 + §DUMMYN4]
    // #9
    // THEN:
    // *SET *CF = [ §DUMMYN5 * #2,5 ]
    // #10
    // COND:
    // §FS_NO_COM = §SI
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setDUMMYB1('');
    
    //#2
    vars.setDUMMYN1(0);
    vars.setDUMMYN2(0);
    vars.setDUMMYN3(0);
    vars.setDUMMYN4(0);
    
    //#3
    if (vars.get('§FS_CEN_GES_TC') == vars.get('§SI')) {
        vars.setDUMMYN1(1);
    }
    
    //#4
    if (vars.get('§FS_ALIM_LED') == vars.get('§SI')) {
        vars.setDUMMYN2(1);
    }
    
    //#5
    if (vars.get('§FS_ALIM_LED_PER') == vars.get('§SI')) {
        vars.setDUMMYN3(1);
    }
    
    //#6
    if (vars.get('§FS_ALIM_LED_RGB') == vars.get('§SI')) {
        vars.setDUMMYN4(1);
    }
    
    //#7
    if (vars.get('§FS_FAM2_JOY') == vars.get('§SI') || vars.get('§FS_FAM2_AZIMUT') == vars.get('§SI')) {
        vars.setDUMMYN2(0);
        vars.setDUMMYN3(0);
        vars.setDUMMYN4(0);
    }
    
    //#8
    vars.setDUMMYN5(vars.get('§DUMMYN1') + vars.get('§DUMMYN2') + vars.get('§DUMMYN3') + vars.get('§DUMMYN4'));
    
    //#9
    vars.setCF(vars.get('§DUMMYN5') * 2.5);
    
    //#10
    if (vars.get('§FS_NO_COM') == vars.get('§SI')) {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
