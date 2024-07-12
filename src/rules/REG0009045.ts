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

export const REG0009045: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0009045
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET §DUMMYB1 = ''
    // *SET *CON-A = §VERN_1_COM
    // #2
    // COND:
    // §FS_FAM2_AZIMUT = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // *SET §DUMMYN1 = #34
    // #3
    // COND:
    // §FS_ACC_LAT_DX = §SI AND §DUMMYB1 = §SI
    // THEN:
    // *SET *CF = #1
    // *SET *CON-B = [§SPOR - §DUMMYN1]
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setDUMMYB1('');
    vars.setCON_A(vars.get('§VERN_1_COM'));
    //#2
    if (vars.get('§FS_FAM2_AZIMUT') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
        vars.setDUMMYN1(34);
    }
    //#3
    if (vars.get('§FS_ACC_LAT_DX') == vars.get('§SI') && vars.get('§DUMMYB1') == vars.get('§SI')) {
        vars.setCF(1);
        vars.setCON_B(vars.get('§SPOR') - vars.get('§DUMMYN1'));
    }
    // GENERATED

    return vars.output;
};
