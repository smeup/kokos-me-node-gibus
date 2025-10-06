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

export const REG0007198: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0007198
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §ALTE_TC > #0
    // THEN:
    // *SET *CF = #4
    // #3
    // COND:
    // §ALTE_TC > #200
    // THEN:
    // *SET *CF = #6
    // #4
    // COND:
    // §FS_CLI_ZIP_TWI = §SI
    // THEN:
    // *SET *CF = #12
    // #5
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    //#2
    if (vars.get('§ALTE_TC') > 0) {
        vars.setCF(4);
    }
    //#3
    if (vars.get('§ALTE_TC') > 200) {
        vars.setCF(6);
    }
    //#4
    if (vars.get('§FS_CLI_ZIP_TWI') == vars.get('§SI')) {
        vars.setCF(12);
    }
    //#5
    vars.setCF(0);
    // GENERATED

    return vars.output;
};
