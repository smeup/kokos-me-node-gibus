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

export const REG0011389: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0011389
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §FS_FAM2_TWIST = §SI
    // THEN:
    // *SET *CF = #2
    // #3
    // THEN:
    // *SET §DUMMYB1 = ''
    // #4
    // COND:
    // §FS_FAM2_VARIA = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #5
    // COND:
    // §FS_FAM2_AZIMUT = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #6
    // COND:
    // §DUMMYB1 = §SI
    // THEN:
    // *SET *CF = #2
    // #7
    // COND:
    // §DUMMYB1 = §SI AND §FS_FAM2_ADDL = §SI
    // THEN:
    // *SET *CF = #1
    // #8
    // COND:
    // §DUMMYB1 = §SI AND §FS_FAM2_ADDF = §SI
    // THEN:
    // *SET *CF = #1
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    //#2
    if (vars.get('§FS_FAM2_TWIST') == vars.get('§SI')) {
        vars.setCF(2);
    }
    //#3
    vars.setDUMMYB1('');
    //#4
    if (vars.get('§FS_FAM2_VARIA') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    //#5
    if (vars.get('§FS_FAM2_AZIMUT') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    //#6
    if (vars.get('§DUMMYB1') == vars.get('§SI')) {
        vars.setCF(2);
    }
    //#7
    if ((vars.get('§DUMMYB1') == vars.get('§SI')) && (vars.get('§FS_FAM2_ADDL') == vars.get('§SI'))) {
        vars.setCF(1);
    }
    //#8
    if ((vars.get('§DUMMYB1') == vars.get('§SI')) && (vars.get('§FS_FAM2_ADDF') == vars.get('§SI'))) {
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
