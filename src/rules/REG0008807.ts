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

export const REG0008807: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0008807
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET §DUMMYB1 = ''
    // *SET *CON-A = §VERN_1_COM
    // #2
    // COND:
    // §FS_FAM2_ZENIT = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // *SET §DUMMYN1 = #30,6
    // *SET §DUMMYN2 = #30,6
    // *SET §DUMMYN3 = #30,6
    // #3
    // COND:
    // §FS_FAM2_AZIMUT = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // *SET §DUMMYN1 = #34,4
    // *SET §DUMMYN2 = #32,5
    // *SET §DUMMYN3 = #30,7
    // #4
    // COND:
    // §DUMMYB1 = §SI
    // THEN:
    // *SET *CON-B = [§LARG - §DUMMYN1]
    // *SET *CF = #1
    // #5
    // COND:
    // §DUMMYB1 = §SI AND (§FS_ACC_LAT_SX = §SI OR §FS_ACC_LAT_DX = §SI)
    // THEN:
    // *SET *CON-B = [§LARG - §DUMMYN2]
    // *SET *CF = #1
    // #6
    // COND:
    // §DUMMYB1 = §SI AND (§FS_ACC_LAT_SX = §SI AND §FS_ACC_LAT_DX = §SI)
    // THEN:
    // *SET *CON-B = [§LARG - §DUMMYN3]
    // *SET *CF = #1
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setDUMMYB1("");
    vars.setCON_A(vars.get('§VERN_1_COM'));
    
    //#2
    if (vars.get('§FS_FAM2_ZENIT') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
        vars.setDUMMYN1(30.6);
        vars.setDUMMYN2(30.6);
        vars.setDUMMYN3(30.6);
    }
    
    //#3
    if (vars.get('§FS_FAM2_AZIMUT') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
        vars.setDUMMYN1(34.4);
        vars.setDUMMYN2(32.5);
        vars.setDUMMYN3(30.7);
    }
    
    //#4
    if (vars.get('§DUMMYB1') == vars.get('§SI')) {
        vars.setCON_B(vars.get('§LARG') - vars.get('§DUMMYN1'));
        vars.setCF(1);
    }
    
    //#5
    if (vars.get('§DUMMYB1') == vars.get('§SI') && (vars.get('§FS_ACC_LAT_SX') == vars.get('§SI') || vars.get('§FS_ACC_LAT_DX') == vars.get('§SI'))) {
        vars.setCON_B(vars.get('§LARG') - vars.get('§DUMMYN2'));
        vars.setCF(1);
    }
    
    //#6
    if (vars.get('§DUMMYB1') == vars.get('§SI') && (vars.get('§FS_ACC_LAT_SX') == vars.get('§SI') && vars.get('§FS_ACC_LAT_DX') == vars.get('§SI'))) {
        vars.setCON_B(vars.get('§LARG') - vars.get('§DUMMYN3'));
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
