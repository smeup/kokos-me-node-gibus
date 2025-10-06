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

export const REG0005048: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0005048
    // REQUEST:
    // """
    // #1
    // COND:
    // §H_PO_AGG1_CAM1 >#0
    // THEN:
    // *SET *CON-A=§VERN_1_COM
    // *SET *CON-B=§H_PO_AGG1_CAM1
    // ELSE:
    // *SET *LG=''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§H_PO_AGG1_CAM1') > 0) {
        vars.setCON_A(vars.get('§VERN_1_COM'));
        vars.setCON_B(vars.get('§H_PO_AGG1_CAM1'));
    } else {
        vars.setLG('');
    }
    
    // GENERATED

    return vars.output;
};
