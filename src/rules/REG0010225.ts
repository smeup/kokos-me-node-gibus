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

export const REG0010225: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0010225
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET *CON-A = §VERN_1_COM
    // *SET §DUMMYB1 = ''
    // #2
    // COND:
    // §FS_FAM2_VARIA = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // *SET §DUMMYN1 = #25,1
    // #3
    // COND:
    // §DUMMYB1 = §SI
    // THEN:
    // *SET *CON-B = [§LARG - §DUMMYN1]
    // *SET *CF = #1
    // #4
    // COND:
    // §FS_ACC_LAT_ANT = §SI
    // ELSE:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setCON_A(vars.get('§VERN_1_COM'));
    vars.setDUMMYB1('');
    //#2
    if (vars.get('§FS_FAM2_VARIA') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
        vars.setDUMMYN1(25.1);
    }
    //#3
    if (vars.get('§DUMMYB1') == vars.get('§SI')) {
        vars.setCON_B(vars.get('§LARG') - vars.get('§DUMMYN1'));
        vars.setCF(1);
    }
    //#4
    if (vars.get('§FS_ACC_LAT_ANT') == vars.get('§SI')) {
    } else {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
