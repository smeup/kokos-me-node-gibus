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

export const REG0008081: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0008081
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §SALVAGOCCIA > #0
    // THEN:
    // *SET *CON-A=§VERN_1_COM
    // *SET *CON-B=§SALVAGOCCIA
    // *SET *CF=§NR_SALVAGOCCIA
    // #3
    // COND:
    // §SALVAGOCCIA>#700
    // THEN:
    // *SET *CON-B=#700
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (vars.get('§SALVAGOCCIA') > 0) {
        vars.setCON_A(vars.get('§VERN_1_COM'));
        vars.setCON_B(vars.get('§SALVAGOCCIA'));
        vars.setCF(vars.get('§NR_SALVAGOCCIA'));
    }
    
    //#3
    if (vars.get('§SALVAGOCCIA') > 700) {
        vars.setCON_B(700);
    }
    // GENERATED

    return vars.output;
};
