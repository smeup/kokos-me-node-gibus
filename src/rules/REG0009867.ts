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

export const REG0009867: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0009867
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // THEN:
    // *SET §DUMMYN1 = #0
    // *SET §DUMMYN2 = #0
    // #3
    // COND:
    // §FS_LED_PER_FRA = §SI
    // THEN:
    // *SET §DUMMYN2 = [§DUMMYN1 + #1]
    // #4
    // COND:
    // §FS_LED_PER_FRA = §SI
    // THEN:
    // *SET §DUMMYN1 = §DUMMYN2
    // #5
    // COND:
    // §FS_LED_PER_FRB = §SI
    // THEN:
    // *SET §DUMMYN2 = [§DUMMYN1 + #1]
    // #6
    // COND:
    // §FS_LED_PER_FRB = §SI
    // THEN:
    // *SET §DUMMYN1 = §DUMMYN2
    // #7
    // COND:
    // §FS_LED_PER_DX = §SI
    // THEN:
    // *SET §DUMMYN2 = [§DUMMYN1 + #1]
    // #8
    // COND:
    // §FS_LED_PER_DX = §SI
    // THEN:
    // *SET §DUMMYN1 = §DUMMYN2
    // #9
    // COND:
    // §FS_LED_PER_SX = §SI
    // THEN:
    // *SET §DUMMYN2 = [§DUMMYN1 + #1]
    // #10
    // COND:
    // §FS_LED_PER_SX = §SI
    // THEN:
    // *SET §DUMMYN1 = §DUMMYN2
    // #11
    // COND:
    // §DUMMYN1 >= #1
    // THEN:
    // *SET *CF = #1
    // #12
    // COND:
    // §DUMMYN1 >= #3
    // THEN:
    // *SET *CF = #2
    // #13
    // COND:
    // §FS_LED_PER_DX = §SI AND §FS_LED_PER_FRB = §SI
    // THEN:
    // *SET *CF = #2
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    //#2
    vars.setDUMMYN1(0);
    vars.setDUMMYN2(0);
    //#3
    if (vars.get('§FS_LED_PER_FRA') == vars.get('§SI')) {
        vars.setDUMMYN2(vars.get('§DUMMYN1') + 1);
    }
    //#4
    if (vars.get('§FS_LED_PER_FRA') == vars.get('§SI')) {
        vars.setDUMMYN1(vars.get('§DUMMYN2'));
    }
    //#5
    if (vars.get('§FS_LED_PER_FRB') == vars.get('§SI')) {
        vars.setDUMMYN2(vars.get('§DUMMYN1') + 1);
    }
    //#6
    if (vars.get('§FS_LED_PER_FRB') == vars.get('§SI')) {
        vars.setDUMMYN1(vars.get('§DUMMYN2'));
    }
    //#7
    if (vars.get('§FS_LED_PER_DX') == vars.get('§SI')) {
        vars.setDUMMYN2(vars.get('§DUMMYN1') + 1);
    }
    //#8
    if (vars.get('§FS_LED_PER_DX') == vars.get('§SI')) {
        vars.setDUMMYN1(vars.get('§DUMMYN2'));
    }
    //#9
    if (vars.get('§FS_LED_PER_SX') == vars.get('§SI')) {
        vars.setDUMMYN2(vars.get('§DUMMYN1') + 1);
    }
    //#10
    if (vars.get('§FS_LED_PER_SX') == vars.get('§SI')) {
        vars.setDUMMYN1(vars.get('§DUMMYN2'));
    }
    //#11
    if (vars.get('§DUMMYN1') >= 1) {
        vars.setCF(1);
    }
    //#12
    if (vars.get('§DUMMYN1') >= 3) {
        vars.setCF(2);
    }
    //#13
    if ((vars.get('§FS_LED_PER_DX') == vars.get('§SI')) && (vars.get('§FS_LED_PER_FRB') == vars.get('§SI'))) {
        vars.setCF(2);
    }
    // GENERATED

    return vars.output;
};
