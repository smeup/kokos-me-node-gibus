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

export const REG0008698: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0008698
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A = §VERN_1_COM
    // #2
    // COND:
    // §FS_FAM2_JOY = §SI
    // THEN:
    // *SET *CON-B = #24,7
    // #3
    // COND:
    // §FS_FAM2_ZENIT = §SI
    // THEN:
    // *SET *CON-B = #30,8
    // #4
    // COND:
    // §FS_FAM2_TWIST = §SI
    // THEN:
    // *SET *CON-B = #30,8
    // """
    // RESPONSE:
    //#1
    vars.setCON_A(vars.get('§VERN_1_COM'));
    //#2
    if (vars.get('§FS_FAM2_JOY') == vars.get('§SI')) {
        vars.setCON_B(24.7);
    }
    //#3
    if (vars.get('§FS_FAM2_ZENIT') == vars.get('§SI')) {
        vars.setCON_B(30.8);
    }
    //#4
    if (vars.get('§FS_FAM2_TWIST') == vars.get('§SI')) {
        vars.setCON_B(30.8);
    }
    // GENERATED

    return vars.output;
};
