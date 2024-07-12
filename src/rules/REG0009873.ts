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

export const REG0009873: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0009873
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET §DUMMYB1 = ''
    // *SET §DUMMYB2 = ''
    // #2
    // COND:
    // §FS_LED_PER_DX = §SI AND §FS_LED_PER_FRA = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // ELSE:
    // *SET *LG = ''
    // #3
    // THEN:
    // *SET §DUMMYN1 = [§NR_SPO_GIB_FRO - #1]
    // #4
    // THEN:
    // *SET §DUMMYN2 = [§DUMMYN1 * #50]
    // #5
    // THEN:
    // *SET §DUMMYN1 = §DUMMYN2
    // #6
    // THEN:
    // *SET §DUMMYN3 = §GRO_LED_IN_L
    // #7
    // THEN:
    // *SET §DUMMYN2 = [§DUMMYN3 - §DUMMYN1]
    // #8
    // THEN:
    // *SET §DUMMYN1 = [§DUMMYN2 / #2]
    // #9
    // COND:
    // §DUMMYN1 > #40
    // THEN:
    // *SET *CF = #1
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setDUMMYB1('');
    vars.setDUMMYB2('');
    //#2
    if (vars.get('§FS_LED_PER_DX') == vars.get('§SI') && vars.get('§FS_LED_PER_FRA') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
    } else {
        vars.setLG('');
    }
    //#3
    vars.setDUMMYN1(vars.get('§NR_SPO_GIB_FRO') - 1);
    //#4
    vars.setDUMMYN2(vars.get('§DUMMYN1') * 50);
    //#5
    vars.setDUMMYN1(vars.get('§DUMMYN2'));
    //#6
    vars.setDUMMYN3(vars.get('§GRO_LED_IN_L'));
    //#7
    vars.setDUMMYN2(vars.get('§DUMMYN3') - vars.get('§DUMMYN1'));
    //#8
    vars.setDUMMYN1(vars.get('§DUMMYN2') / 2);
    //#9
    if (vars.get('§DUMMYN1') > 40) {
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
