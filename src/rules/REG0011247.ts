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

export const REG0011247: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0011247
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET *CON-A = §VERN_1_COM
    // #2
    // THEN:
    // *SET *CON-B = [§SPOR - #26,1]
    // #3
    // COND:
    // §FS_ACC_LAT_ANT = §SI OR §FS_ACC_LAT_POS = §SI
    // THEN:
    // *SET *CON-B = [§SPOR - #21,6]
    // #4
    // COND:
    // §FS_ACC_LAT_ANT = §SI AND §FS_ACC_LAT_POS = §SI
    // THEN:
    // *SET *CON-B = [§SPOR - #17,2]
    // #5
    // THEN:
    // *SET §DUMMYB1 = ''
    // #6
    // COND:
    // §FS_LED_RGB_SX = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #7
    // COND:
    // §DUMMYB1 = §SI
    // THEN:
    // *SET *CF = #1
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setCON_A(vars.get('§VERN_1_COM'));
    
    //#2
    vars.setCON_B(vars.get('§SPOR') - 26.1);
    
    //#3
    if (vars.get('§FS_ACC_LAT_ANT') == vars.get('§SI') || vars.get('§FS_ACC_LAT_POS') == vars.get('§SI')) {
        vars.setCON_B(vars.get('§SPOR') - 21.6);
    }
    
    //#4
    if (vars.get('§FS_ACC_LAT_ANT') == vars.get('§SI') && vars.get('§FS_ACC_LAT_POS') == vars.get('§SI')) {
        vars.setCON_B(vars.get('§SPOR') - 17.2);
    }
    
    //#5
    vars.setDUMMYB1('');
    
    //#6
    if (vars.get('§FS_LED_RGB_SX') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    
    //#7
    if (vars.get('§DUMMYB1') == vars.get('§SI')) {
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
