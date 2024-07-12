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

export const REG0009177: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0009177
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET *CON-A = §VERN_1_COM
    // *SET §DUMMYB1 = ''
    // #2
    // COND:
    // §FS_FAM2_TWIST = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // *SET §DUMMYN1 = #32
    // #3
    // COND:
    // §DUMMYB1 = §SI
    // THEN:
    // *SET *CF = #2
    // *SET *CON-B = [§LARG - §DUMMYN1]
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setCON_A(vars.get('§VERN_1_COM'));
    vars.setDUMMYB1('');
    //#2
    if (vars.get('§FS_FAM2_TWIST') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
        vars.setDUMMYN1(32);
    }
    //#3
    if (vars.get('§DUMMYB1') == vars.get('§SI')) {
        vars.setCF(2);
        vars.setCON_B(vars.get('§LARG') - vars.get('§DUMMYN1'));
    }
    // GENERATED

    return vars.output;
};
