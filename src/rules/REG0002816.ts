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

export const REG0002816: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0002816
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF=#0
    // #2
    // COND:
    // §FS_CHI_VAR = §SI
    // THEN:
    // *SET *CON-A = *COL
    // *SET *CON-B = *LUNG
    // *SET *CF = #1
    // #3
    // COND:
    // §FS_CLI_ZIP_TWI=§SI
    // THEN:
    // *SET *CON-A=*COL
    // *SET *CON-B=*LUNG
    // *SET *CF=#2
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    //#2
    if (vars.get('§FS_CHI_VAR') == vars.get('§SI')) {
        vars.setCON_A(vars.get('*COL'));
        vars.setCON_B(vars.get('*LUNG'));
        vars.setCF(1);
    }
    //#3
    if (vars.get('§FS_CLI_ZIP_TWI') == vars.get('§SI')) {
        vars.setCON_A(vars.get('*COL'));
        vars.setCON_B(vars.get('*LUNG'));
        vars.setCF(2);
    }
    // GENERATED

    return vars.output;
};
