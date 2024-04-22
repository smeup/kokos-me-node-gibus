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

export const REG0003027: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0003027
    // REQUEST:
    // """
    // #1
    // COND:
    // §H_PO_AGG_MUR1 > #0
    // THEN:
    // *SET *CON-A = §VERN_1_COM
    // *SET *CON-B = §H_PO_AGG_MUR1
    // *SET *CF = [§NR_CAN_GAM_VAR - #1]
    // ELSE:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§H_PO_AGG_MUR1') > 0) {
        vars.setCON_A(vars.get('§VERN_1_COM'));
        vars.setCON_B(vars.get('§H_PO_AGG_MUR1'));
        vars.setCF(vars.get('§NR_CAN_GAM_VAR') - 1);
    } else {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
