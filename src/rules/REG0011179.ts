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

export const REG0011179: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0011179
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = [§PD_SPOR_ML_DOWN * #2]
    // #2
    // THEN:
    // *SET *CON-A = §VERN_1_COM
    // #3
    // COND:
    // §VERN_1_COM = '0055'
    // THEN:
    // *SET *CON-A = '0055'
    // #4
    // COND:
    // §VERN_1_COM = '0073'
    // THEN:
    // *SET *CON-A = '0073'
    // #5
    // COND:
    // §PD_SP_50_ML_DOW > #0
    // THEN:
    // *SET *CF = §PD_SP_50_ML_DOW
    // #6
    // COND:
    // §PD_SPOR_ML_UP > #0
    // THEN:
    // *SET *CF = [ §PD_SPOR_ML_UP * #2 ]
    // """
    // RESPONSE:
    //#1
    vars.setCF(vars.get('§PD_SPOR_ML_DOWN') * 2);
    //#2
    vars.setCON_A(vars.get('§VERN_1_COM'));
    //#3
    if (vars.get('§VERN_1_COM') == '0055') {
        vars.setCON_A('0055');
    }
    //#4
    if (vars.get('§VERN_1_COM') == '0073') {
        vars.setCON_A('0073');
    }
    //#5
    if (vars.get('§PD_SP_50_ML_DOW') > 0) {
        vars.setCF(vars.get('§PD_SP_50_ML_DOW'));
    }
    //#6
    if (vars.get('§PD_SPOR_ML_UP') > 0) {
        vars.setCF(vars.get('§PD_SPOR_ML_UP') * 2);
    }
    // GENERATED

    return vars.output;
};
