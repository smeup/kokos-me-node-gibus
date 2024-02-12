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

export const REG0008838: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0008838
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET §DUMMYB1 = ''
    // *SET §DUMMYB2 = ''
    // *SET §DUMMYN1 = #0
    // #2
    // THEN:
    // *SET *CON-A = §VERN_1_COM
    // #3
    // COND:
    // §FS_FAM2_ZENIT = §SI AND §FS_ACC_LAT_ANT = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #4
    // COND:
    // §FS_FAM2_ZENIT = §SI AND §FS_STA_MUR_ANT1 = §SI AND §VER_STA_T01 <> '2021'
    // THEN:
    // *SET §DUMMYB1 = ''
    // #5
    // COND:
    // §FS_FAM2_ZENIT = §SI AND §FS_ACC_LAT_POS = §SI
    // THEN:
    // *SET §DUMMYB2 = §SI
    // #6
    // COND:
    // §FS_FAM2_ZENIT = §SI AND (§FS_STA_MUR_POS1 = §SI OR §FS_ST_MU_P1_ACC = §SI) AND §VER_STA_T01 <> '2021'
    // THEN:
    // *SET §DUMMYB2 = ''
    // #7
    // COND:
    // §FS_FAM2_ZENIT = §SI
    // THEN:
    // *SET *CF = #1
    // *SET *CON-B = [§SPOR - #30]
    // *SET §DUMMYN1 = #7,5
    // #8
    // COND:
    // §DUMMYB1 = §SI
    // THEN:
    // *SET §DUMMYN2 = [*CON-B + §DUMMYN1]
    // #9
    // COND:
    // §DUMMYB1 = §SI
    // THEN:
    // *SET *CON-B = §DUMMYN2
    // #10
    // COND:
    // §DUMMYB2 = §SI
    // THEN:
    // *SET §DUMMYN2 = [*CON-B + §DUMMYN1]
    // #11
    // COND:
    // §DUMMYB2 = §SI
    // THEN:
    // *SET *CON-B = §DUMMYN2
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setDUMMYB1("");
    vars.setDUMMYB2("");
    vars.setDUMMYN1(0);
    //#2
    vars.setCON_A(vars.get('§VERN_1_COM'));
    //#3
    if (vars.get('§FS_FAM2_ZENIT') == vars.get('§SI') && vars.get('§FS_ACC_LAT_ANT') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    //#4
    if (vars.get('§FS_FAM2_ZENIT') == vars.get('§SI') && vars.get('§FS_STA_MUR_ANT1') == vars.get('§SI') && vars.get('§VER_STA_T01') != '2021') {
        vars.setDUMMYB1("");
    }
    //#5
    if (vars.get('§FS_FAM2_ZENIT') == vars.get('§SI') && vars.get('§FS_ACC_LAT_POS') == vars.get('§SI')) {
        vars.setDUMMYB2(vars.get('§SI'));
    }
    //#6
    if (vars.get('§FS_FAM2_ZENIT') == vars.get('§SI') && (vars.get('§FS_STA_MUR_POS1') == vars.get('§SI') || vars.get('§FS_ST_MU_P1_ACC') == vars.get('§SI')) && vars.get('§VER_STA_T01') != '2021') {
        vars.setDUMMYB2("");
    }
    //#7
    if (vars.get('§FS_FAM2_ZENIT') == vars.get('§SI')) {
        vars.setCF(1);
        vars.setCON_B(vars.get('§SPOR') - 30);
        vars.setDUMMYN1(7.5);
    }
    //#8
    if (vars.get('§DUMMYB1') == vars.get('§SI')) {
        vars.setDUMMYN2(vars.get('§CON-B') + vars.get('§DUMMYN1'));
    }
    //#9
    if (vars.get('§DUMMYB1') == vars.get('§SI')) {
        vars.setCON_B(vars.get('§DUMMYN2'));
    }
    //#10
    if (vars.get('§DUMMYB2') == vars.get('§SI')) {
        vars.setDUMMYN2(vars.get('§CON-B') + vars.get('§DUMMYN1'));
    }
    //#11
    if (vars.get('§DUMMYB2') == vars.get('§SI')) {
        vars.setCON_B(vars.get('§DUMMYN2'));
    }
    // GENERATED

    return vars.output;
};
