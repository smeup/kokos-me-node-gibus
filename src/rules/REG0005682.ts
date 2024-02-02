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

export const REG0005682: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0005682
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A = '0072'
    // #2
    // COND:
    // §VERN_1_COM= '0055' OR §VERN_1_COM = '0053' OR §VR_ABB = '01' OR §VR_ABB = '02'
    // THEN:
    // *SET *CON-A = '0055'
    // #3
    // THEN:
    // *SET *CF = #0
    // #4
    // COND:
    // §TI_AST = '01'
    // THEN:
    // *SET *CF = #1
    // #5
    // COND:
    // §TI_AST = '03'
    // THEN:
    // *SET *CF = #1
    // """
    // RESPONSE:
    Traduzione:
    //#1
    vars.setCON_A('0072');
    //#2
    if (vars.get('§VERN_1_COM') == '0055' || vars.get('§VERN_1_COM') == '0053' || vars.get('§VR_ABB') == '01' || vars.get('§VR_ABB') == '02') {
        vars.setCON_A('0055');
    }
    //#3
    vars.setCF(0);
    //#4
    if (vars.get('§TI_AST') == '01') {
        vars.setCF(1);
    }
    //#5
    if (vars.get('§TI_AST') == '03') {
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
