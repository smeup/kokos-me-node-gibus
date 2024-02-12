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

export const REG0005491: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0005491
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF=#0
    // *SET §DUMMYN1 =#0
    // #2
    // COND:
    // §FS_FAM2_VARIA =§SI
    // THEN:
    // *SET §DUMMYN1= [ §SPOR - #28 ]
    // #3
    // COND:
    // §FS_FAM2_AZIMUT = §SI
    // THEN:
    // *SET §DUMMYN1 = [ §SPOR - #35 ]
    // #4
    // COND:
    // ( §DUMMYN1 >#500 )
    // THEN:
    // *SET *CF=#1
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setDUMMYN1(0);
    //#2
    if (vars.get('§FS_FAM2_VARIA') == vars.get('§SI')) {
        vars.setDUMMYN1(vars.get('§SPOR') - 28);
    }
    //#3
    if (vars.get('§FS_FAM2_AZIMUT') == vars.get('§SI')) {
        vars.setDUMMYN1(vars.get('§SPOR') - 35);
    }
    //#4
    if (vars.get('§DUMMYN1') > 500) {
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
