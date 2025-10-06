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

export const REG0013039: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0013039
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET §DUMMYN1 = #0
    // #2
    // COND:
    // §FS_FAM2_VARIA = §SI
    // THEN:
    // *SET §DUMMYN1 = [ §L_BAN_FRA + #2 ]
    // #3
    // COND:
    // §FS_FAM2_TWIST = §SI
    // THEN:
    // *SET §DUMMYN1 = [ §L_BAN_FRA + #1,7 ]
    // #4
    // COND:
    // §FS_FAM2_JOY = §SI
    // THEN:
    // *SET §DUMMYN1 = [ §L_BAN_FRA - #0,6 ]
    // #5
    // THEN:
    // *SET *CF = [ §DUMMYN1 / #100 ]
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setDUMMYN1(0);
    //#2
    if (vars.get('§FS_FAM2_VARIA') == vars.get('§SI')) {
        vars.setDUMMYN1(vars.get('§L_BAN_FRA') + 2);
    }
    //#3
    if (vars.get('§FS_FAM2_TWIST') == vars.get('§SI')) {
        vars.setDUMMYN1(vars.get('§L_BAN_FRA') + 1.7);
    }
    //#4
    if (vars.get('§FS_FAM2_JOY') == vars.get('§SI')) {
        vars.setDUMMYN1(vars.get('§L_BAN_FRA') - 0.6);
    }
    //#5
    vars.setCF(vars.get('§DUMMYN1') / 100);
    // GENERATED

    return vars.output;
};
