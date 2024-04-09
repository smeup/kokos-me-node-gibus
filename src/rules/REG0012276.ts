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

export const REG0012276: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0012276
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET *CON-A = *COL
    // *SET *CON-B = *LUNG
    // #2
    // THEN:
    // *SET §DUMMYB1 = ''
    // *SET §DUMMYB2 = ''
    // #3
    // COND:
    // §FS_SPA_60 = §SI OR §FS_SPA_75 = §SI OR §FS_COMBI_60 = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #4
    // COND:
    // §FS_LED_FRO = §SI
    // THEN:
    // *SET §DUMMYB2 = §SI
    // #5
    // COND:
    // §DUMMYB1 = §SI AND §DUMMYB2 = §SI
    // THEN:
    // *SET *CF = #1
    // #6
    // COND:
    // §FS_SPA_75 = §SI AND #1 = #2
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setCON_A(vars.getCOL());
    vars.setCON_B(vars.getLUNG());
    //#2
    vars.setDUMMYB1('');
    vars.setDUMMYB2('');
    //#3
    if (vars.get('§FS_SPA_60') == vars.get('§SI') || vars.get('§FS_SPA_75') == vars.get('§SI') || vars.get('§FS_COMBI_60') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    //#4
    if (vars.get('§FS_LED_FRO') == vars.get('§SI')) {
        vars.setDUMMYB2(vars.get('§SI'));
    }
    //#5
    if (vars.get('§DUMMYB1') == vars.get('§SI') && vars.get('§DUMMYB2') == vars.get('§SI')) {
        vars.setCF(1);
    }
    //#6
    if (vars.get('§FS_SPA_75') == vars.get('§SI') && 1 == 2) {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
