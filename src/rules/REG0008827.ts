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

export const REG0008827: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0008827
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET §DUMMYN1 = #0
    // #2
    // COND:
    // §FS_FAM2_ZENIT = §SI
    // THEN:
    // *SET §DUMMYN1 = [§LARG - #30]
    // #3
    // COND:
    // §DUMMYN1 > #0
    // THEN:
    // *SET *CF = [§DUMMYN1  / #100]
    // #4
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setDUMMYN1(0);
    //#2
    if (vars.get('§FS_FAM2_ZENIT') == vars.get('§SI')) {
        vars.setDUMMYN1(vars.get('§LARG') - 30);
    }
    //#3
    if (vars.get('§DUMMYN1') > 0) {
        vars.setCF(vars.get('§DUMMYN1') / 100);
    }
    //#4
    vars.setCF(0);
    // GENERATED

    return vars.output;
};
