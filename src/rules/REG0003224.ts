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

export const REG0003224: Rule = (iv) => {

    const vars = new Variables(iv);
    
    // GENERATED
    // RULE: REG0003224
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET §DUMMYN1 = #0
    // *SET *CF = #0
    // #2
    // COND:
    // §TRA_TET_ANT1 > #0
    // THEN:
    // *SET *CF = [§DUMMYN1 + #1]
    // #3
    // COND:
    // §FS_TRA_TET_FRO = §SI
    // THEN:
    // *SET §DUMMYN1 = *CF
    // #4
    // COND:
    // §FS_TRA_TET_FRO = §SI
    // THEN:
    // *SET *CF = [§DUMMYN1 + #1]
    // #5
    // COND:
    // §FS_TRA_TET_ANA = §SI
    // THEN:
    // *SET §DUMMYN1 = *CF
    // #6
    // COND:
    // §FS_TRA_TET_ANA = §SI
    // THEN:
    // *SET *CF = [§DUMMYN1 + #1]
    // """
    // RESPONSE:
    //#1
    vars.setDUMMYN1(0);
    vars.setCF(0);
    //#2
    if (vars.get('§TRA_TET_ANT1') > 0) {
        vars.setCF(vars.get('§DUMMYN1') + 1);
    }
    //#3
    if (vars.get('§FS_TRA_TET_FRO') == vars.get('§SI')) {
        vars.setDUMMYN1(vars.get('§CF'));
    }
    //#4
    if (vars.get('§FS_TRA_TET_FRO') == vars.get('§SI')) {
        vars.setCF(vars.get('§DUMMYN1') + 1);
    }
    //#5
    if (vars.get('§FS_TRA_TET_ANA') == vars.get('§SI')) {
        vars.setDUMMYN1(vars.get('§CF'));
    }
    //#6
    if (vars.get('§FS_TRA_TET_ANA') == vars.get('§SI')) {
        vars.setCF(vars.get('§DUMMYN1') + 1);
    }
    // GENERATED
    vars.setCF(0);
    return vars.output;
};
