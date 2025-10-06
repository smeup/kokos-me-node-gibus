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

export const REG0000764: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0000764
    // REQUEST:
    // """
    // #1
    // COND:
    // §L_TUBO_18_TG > #0
    // THEN:
    // *SET *CON-A = §VERN_1_COM
    // *SET *CON-B = §L_TUBO_18_TG
    // *SET *CF = §NR_TUBO_D18
    // ELSE:
    // *SET *LG = ''
    // #2
    // COND:
    // §L_TUBO_18_TG > #590
    // THEN:
    // *SET *CON-B = #500
    // """
    // RESPONSE:
    //#1
    if (vars.get('§L_TUBO_18_TG') > 0) {
        vars.setCON_A(vars.get('§VERN_1_COM'));
        vars.setCON_B(vars.get('§L_TUBO_18_TG'));
        vars.setCF(vars.get('§NR_TUBO_D18'));
    } else {
        vars.setLG('');
    }
    
    //#2
    if (vars.get('§L_TUBO_18_TG') > 590) {
        vars.setCON_B(500);
    }
    // GENERATED

    return vars.output;
};
