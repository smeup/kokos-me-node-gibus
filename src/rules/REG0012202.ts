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

export const REG0012202: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0012202
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET §DUMMYN1 = #2
    // *SET §DUMMYN2 = #0
    // *SET §DUMMYN3 = #0
    // #2
    // COND:
    // §FS_CEN_GES_TC = §SI
    // THEN:
    // *SET §DUMMYN2 = #2
    // #3
    // COND:
    // §TIPO_AUDIO <> ''
    // THEN:
    // *SET §DUMMYN3 = #2
    // #4
    // THEN:
    // *SET *CF = [ §DUMMYN1 + §DUMMYN2 + §DUMMYN3 ]
    // """
    // RESPONSE:
    //#1
    vars.setDUMMYN1(2);
    vars.setDUMMYN2(0);
    vars.setDUMMYN3(0);
    //#2
    if (vars.get('§FS_CEN_GES_TC') == vars.get('§SI')) {
        vars.setDUMMYN2(2);
    }
    //#3
    if (vars.get('§TIPO_AUDIO') != '') {
        vars.setDUMMYN3(2);
    }
    //#4
    vars.setCF(vars.get('§DUMMYN1') + vars.get('§DUMMYN2') + vars.get('§DUMMYN3'));
    // GENERATED

    return vars.output;
};
