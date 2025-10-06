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

export const REG0008727: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0008727
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET *CON-A = §VERN_1_COM
    // #2
    // THEN:
    // *SET *CON-B = [§LARG - #32,7]
    // #3
    // THEN:
    // *SET §DUMMYB1 = ''
    // #4
    // COND:
    // §SEN_APE_LAM = '01'
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #5
    // THEN:
    // *SET §DUMMYB2 = §SI
    // #6
    // COND:
    // §FS_LED_RGB_FRB = §SI
    // THEN:
    // *SET §DUMMYB2 = ''
    // #7
    // COND:
    // §AUM_SPO > #0
    // THEN:
    // *SET §DUMMYB1 = ''
    // #8
    // COND:
    // §AUM_LAR > #0
    // THEN:
    // *SET §DUMMYB1 = ''
    // #9
    // COND:
    // §DUMMYB1 = §SI AND §DUMMYB2 = §SI
    // THEN:
    // *SET *CF = #1
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setCON_A(vars.get('§VERN_1_COM'));
    //#2
    vars.setCON_B(vars.get('§LARG') - 32.7);
    //#3
    vars.setDUMMYB1('');
    //#4
    if (vars.get('§SEN_APE_LAM') == '01') {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    //#5
    vars.setDUMMYB2(vars.get('§SI'));
    //#6
    if (vars.get('§FS_LED_RGB_FRB') == vars.get('§SI')) {
        vars.setDUMMYB2('');
    }
    //#7
    if (vars.get('§AUM_SPO') > 0) {
        vars.setDUMMYB1('');
    }
    //#8
    if (vars.get('§AUM_LAR') > 0) {
        vars.setDUMMYB1('');
    }
    //#9
    if (vars.get('§DUMMYB1') == vars.get('§SI') && vars.get('§DUMMYB2') == vars.get('§SI')) {
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
