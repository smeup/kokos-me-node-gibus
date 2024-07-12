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

export const REG0011713: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0011713
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §FS_CLI_TWI_BG = §SI
    // THEN:
    // *SET *CF = #2
    // *SET *CON-A = §VERN_1_COM
    // *SET *CON-B = §L_GUIDA_FIX
    // #3
    // COND:
    // *CF = #2 AND (§TI_GU_T01 = '02' OR §TI_GU_T01 = '03')
    // THEN:
    // *SET *CF = #1
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    //#2
    if (vars.get('§FS_CLI_TWI_BG') == vars.get('§SI')) {
        vars.setCF(2);
        vars.setCON_A(vars.get('§VERN_1_COM'));
        vars.setCON_B(vars.get('§L_GUIDA_FIX'));
    }
    //#3
    if (vars.get('§CF') == 2 && (vars.get('§TI_GU_T01') == '02' || vars.get('§TI_GU_T01') == '03')) {
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
