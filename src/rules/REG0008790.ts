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

export const REG0008790: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0008790
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET §DUMMYB1 = ''
    // *SET §DUMMYB2 = ''
    // #2
    // THEN:
    // *SET *CON-A = §VERN_1_COM
    // *SET §DUMMYN1 = #0
    // *SET §DUMMYN2 = #0
    // *SET §DUMMYN3 = #0
    // #3
    // COND:
    // §FS_ACC_LAT_SX = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #4
    // COND:
    // §FS_STA_MUR_ANT1 = §SI
    // THEN:
    // *SET §DUMMYB1 = ''
    // #5
    // COND:
    // §FS_ACC_LAT_DX = §SI
    // THEN:
    // *SET §DUMMYB2 = §SI
    // #6
    // COND:
    // §FS_STA_MUR_ANT2 = §SI
    // THEN:
    // *SET §DUMMYB2 = ''
    // #7
    // THEN:
    // *SET *CF = #1
    // *SET §DUMMYN3 = [§LARG - #30]
    // *SET §DUMMYN1 = #7,5
    // #8
    // COND:
    // §DUMMYB1 = §SI
    // THEN:
    // *SET §DUMMYN2 = [§DUMMYN3  + §DUMMYN1]
    // #9
    // COND:
    // §DUMMYB1 = §SI
    // THEN:
    // *SET §DUMMYN3  = §DUMMYN2
    // #10
    // COND:
    // §DUMMYB2 = §SI
    // THEN:
    // *SET §DUMMYN2 = [§DUMMYN3  + §DUMMYN1]
    // #11
    // COND:
    // §DUMMYB2 = §SI
    // THEN:
    // *SET §DUMMYN3  = §DUMMYN2
    // #12
    // COND:
    // §DUMMYN3 > #0
    // THEN:
    // *SET *CF = [§DUMMYN3  / #100]
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setDUMMYB1("");
    vars.setDUMMYB2("");
    //#2
    vars.setCON_A(vars.get('§VERN_1_COM'));
    vars.setDUMMYN1(0);
    vars.setDUMMYN2(0);
    vars.setDUMMYN3(0);
    //#3
    if (vars.get('§FS_ACC_LAT_SX') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    //#4
    if (vars.get('§FS_STA_MUR_ANT1') == vars.get('§SI')) {
        vars.setDUMMYB1("");
    }
    //#5
    if (vars.get('§FS_ACC_LAT_DX') == vars.get('§SI')) {
        vars.setDUMMYB2(vars.get('§SI'));
    }
    //#6
    if (vars.get('§FS_STA_MUR_ANT2') == vars.get('§SI')) {
        vars.setDUMMYB2("");
    }
    //#7
    vars.setCF(1);
    vars.setDUMMYN3(vars.get('§LARG') - 30);
    vars.setDUMMYN1(7.5);
    //#8
    if (vars.get('§DUMMYB1') == vars.get('§SI')) {
        vars.setDUMMYN2(vars.get('§DUMMYN3') + vars.get('§DUMMYN1'));
    }
    //#9
    if (vars.get('§DUMMYB1') == vars.get('§SI')) {
        vars.setDUMMYN3(vars.get('§DUMMYN2'));
    }
    //#10
    if (vars.get('§DUMMYB2') == vars.get('§SI')) {
        vars.setDUMMYN2(vars.get('§DUMMYN3') + vars.get('§DUMMYN1'));
    }
    //#11
    if (vars.get('§DUMMYB2') == vars.get('§SI')) {
        vars.setDUMMYN3(vars.get('§DUMMYN2'));
    }
    //#12
    if (vars.get('§DUMMYN3') > 0) {
        vars.setCF(vars.get('§DUMMYN3') / 100);
    }
    // GENERATED

    return vars.output;
};
