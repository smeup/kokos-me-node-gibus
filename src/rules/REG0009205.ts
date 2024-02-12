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

export const REG0009205: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0009205
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A = §VERN_1_COM
    // *SET *CF = #0
    // #2
    // THEN:
    // *SET §DUMMYB1 = ''
    // *SET §DUMMYB2 = ''
    // *SET §DUMMYB3 = ''
    // #3
    // COND:
    // §FS_FAM2_TWIST = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // *SET §DUMMYN1 = #30
    // *SET §DUMMYN2 = #22,5
    // *SET §DUMMYN3 = #15
    // #4
    // COND:
    // §FS_ACC_LAT_ANT = §SI
    // THEN:
    // *SET §DUMMYB2 = §SI
    // #5
    // COND:
    // §FS_STA_MUR_ANT1 = §SI AND §VER_STA_T01 <> '2021'
    // THEN:
    // *SET §DUMMYB2 = ''
    // #6
    // COND:
    // §FS_ACC_LAT_POS = §SI
    // THEN:
    // *SET §DUMMYB3 = §SI
    // #7
    // COND:
    // ( §FS_STA_MUR_POS1 = §SI OR §FS_ST_MU_P1_ACC = §SI ) AND §VER_STA_T01 <> '2021'
    // THEN:
    // *SET §DUMMYB3 = ''
    // #8
    // COND:
    // §DUMMYB1 = §SI
    // THEN:
    // *SET *CF = #1
    // *SET *CON-B =  [§SPOR - §DUMMYN1]
    // #9
    // COND:
    // §DUMMYB1 = §SI AND (§DUMMYB2 = §SI OR §DUMMYB3 = §SI)
    // THEN:
    // *SET *CON-B =  [§SPOR - §DUMMYN2]
    // #10
    // COND:
    // §DUMMYB1 = §SI AND (§DUMMYB2 = §SI AND §DUMMYB3 = §SI)
    // THEN:
    // *SET *CON-B =  [§SPOR - §DUMMYN3]
    // """
    // RESPONSE:
    //#1
    vars.setCON_A(vars.get('§VERN_1_COM'));
    vars.setCF(0);
    //#2
    vars.setDUMMYB1('');
    vars.setDUMMYB2('');
    vars.setDUMMYB3('');
    //#3
    if (vars.get('§FS_FAM2_TWIST') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
        vars.setDUMMYN1(30);
        vars.setDUMMYN2(22.5);
        vars.setDUMMYN3(15);
    }
    //#4
    if (vars.get('§FS_ACC_LAT_ANT') == vars.get('§SI')) {
        vars.setDUMMYB2(vars.get('§SI'));
    }
    //#5
    if (vars.get('§FS_STA_MUR_ANT1') == vars.get('§SI') && vars.get('§VER_STA_T01') != '2021') {
        vars.setDUMMYB2('');
    }
    //#6
    if (vars.get('§FS_ACC_LAT_POS') == vars.get('§SI')) {
        vars.setDUMMYB3(vars.get('§SI'));
    }
    //#7
    if ((vars.get('§FS_STA_MUR_POS1') == vars.get('§SI') || vars.get('§FS_ST_MU_P1_ACC') == vars.get('§SI')) && vars.get('§VER_STA_T01') != '2021') {
        vars.setDUMMYB3('');
    }
    //#8
    if (vars.get('§DUMMYB1') == vars.get('§SI')) {
        vars.setCF(1);
        vars.setCON_B(vars.get('§SPOR') - vars.get('§DUMMYN1'));
    }
    //#9
    if (vars.get('§DUMMYB1') == vars.get('§SI') && (vars.get('§DUMMYB2') == vars.get('§SI') || vars.get('§DUMMYB3') == vars.get('§SI'))) {
        vars.setCON_B(vars.get('§SPOR') - vars.get('§DUMMYN2'));
    }
    //#10
    if (vars.get('§DUMMYB1') == vars.get('§SI') && vars.get('§DUMMYB2') == vars.get('§SI') && vars.get('§DUMMYB3') == vars.get('§SI')) {
        vars.setCON_B(vars.get('§SPOR') - vars.get('§DUMMYN3'));
    }
    // GENERATED

    return vars.output;
};
