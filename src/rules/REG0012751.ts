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

export const REG0012751: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0012751
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET §DUMMYN1 = #0
    // #2
    // THEN:
    // *SET §DUMMYN1 = [(§NR_FRANGI - #1) * #20 + #4,2]
    // #3
    // COND:
    // §FS_FAM2_VARIA = §SI AND §FS_ACC_LAT_ANT = §SI
    // THEN:
    // *SET §DUMMYN1 = [(§NR_FRANGI - #1) * #20 + #3,6]
    // #4
    // COND:
    // §FS_FAM2_VARIA = §SI AND §FS_ACC_LAT_POS = §SI
    // THEN:
    // *SET §DUMMYN1 = [(§NR_FRANGI - #1) * #20 + #3,6]
    // #5
    // COND:
    // §DUMMYN1 > #600
    // THEN:
    // *SET *CF = #1
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setDUMMYN1(0);
    //#2
    vars.setDUMMYN1((vars.get('§NR_FRANGI') - 1) * 20 + 4.2);
    //#3
    if (vars.get('§FS_FAM2_VARIA') == vars.get('§SI') && vars.get('§FS_ACC_LAT_ANT') == vars.get('§SI')) {
        vars.setDUMMYN1((vars.get('§NR_FRANGI') - 1) * 20 + 3.6);
    }
    //#4
    if (vars.get('§FS_FAM2_VARIA') == vars.get('§SI') && vars.get('§FS_ACC_LAT_POS') == vars.get('§SI')) {
        vars.setDUMMYN1((vars.get('§NR_FRANGI') - 1) * 20 + 3.6);
    }
    //#5
    if (vars.get('§DUMMYN1') > 600) {
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
