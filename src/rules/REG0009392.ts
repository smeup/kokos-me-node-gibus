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

export const REG0009392: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0009392
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET §DUMMYN1 = #0
    // *SET §DUMMYB1 = ''
    // *SET §DUMMYB2 = ''
    // #2
    // COND:
    // §SP_GU_FRON_QU = '05'
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #3
    // COND:
    // §FS_CLI_ZIP_TWI = §SI
    // THEN:
    // *SET §DUMMYN1 = [§L_FRONTALE + #2]
    // *SET §DUMMYB2 = §SI
    // #4
    // COND:
    // §DUMMYB1 = §SI AND §DUMMYB2 = §SI
    // THEN:
    // *SET *CF = [§DUMMYN1 / #100]
    // """
    // RESPONSE:
    Traduzione:
    //#1
    vars.setCF(0);
    vars.setDUMMYN1(0);
    vars.setDUMMYB1('');
    vars.setDUMMYB2('');
    //#2
    if (vars.get('§SP_GU_FRON_QU') == '05') {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    //#3
    if (vars.get('§FS_CLI_ZIP_TWI') == vars.get('§SI')) {
        vars.setDUMMYN1(vars.get('§L_FRONTALE') + 2);
        vars.setDUMMYB2(vars.get('§SI'));
    }
    //#4
    if (vars.get('§DUMMYB1') == vars.get('§SI') && vars.get('§DUMMYB2') == vars.get('§SI')) {
        vars.setCF(vars.get('§DUMMYN1') / 100);
    }

    // GENERATED

    return vars.output;
};
