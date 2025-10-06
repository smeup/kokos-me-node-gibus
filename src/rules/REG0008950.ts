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

export const REG0008950: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0008950
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET *CON-A = §VERN_1_COM
    // *SET §DUMMYB1 = ''
    // *SET §DUMMYB2 = ''
    // #2
    // COND:
    // §LU_SCO_ACC2 > #0
    // THEN:
    // *SET *CON-B = §LU_SCO_ACC2
    // *SET *CF = #1
    // #3
    // COND:
    // §FS_FAM2_ZENIT = §SI AND §FS_ACC_LAT_ANT = §SI
    // THEN:
    // *SET *CON-B = [§LARG - #36,5]
    // *SET *CF = #1
    // #4
    // COND:
    // §VER_SCO_T01 = '2020'
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setCON_A(vars.get('§VERN_1_COM'));
    vars.setDUMMYB1('');
    vars.setDUMMYB2('');
    
    //#2
    if (vars.get('§LU_SCO_ACC2') > 0) {
        vars.setCON_B(vars.get('§LU_SCO_ACC2'));
        vars.setCF(1);
    }
    
    //#3
    if (vars.get('§FS_FAM2_ZENIT') == vars.get('§SI') && vars.get('§FS_ACC_LAT_ANT') == vars.get('§SI')) {
        vars.setCON_B(vars.get('§LARG') - 36.5);
        vars.setCF(1);
    }
    
    //#4
    if (vars.get('§VER_SCO_T01') == '2020') {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
