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

export const REG0011678: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0011678
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET *CON-A = §VERN_1_COM
    // #2
    // COND:
    // §VERN_1_COM = '0053' OR §VERN_1_COM = '0055' OR §VERN_1_COM = '0059' OR §VERN_1_COM = '0065' OR §VERN_1_COM = '0069'
    // THEN:
    // *SET *CF = #1
    // #3
    // COND:
    // §VERN_1_COM = '0070' OR §VERN_1_COM = '0073' OR §VERN_1_COM = '0076' OR §VERN_1_COM = '0103' OR §VERN_1_COM = '0107'
    // THEN:
    // *SET *CF = #1
    // #4
    // COND:
    // §VERN_1_COM = '0121' OR §VERN_1_COM = '0127' OR §VERN_1_COM = '0130' OR §VERN_1_COM = '0131' OR §VERN_1_COM = '0147'
    // THEN:
    // *SET *CF = #1
    // #5
    // COND:
    // §VERN_1_COM = '0616' OR §VERN_1_COM = '0172' OR §VERN_1_COM = '0208' OR §VERN_1_COM = '0224' OR §VERN_1_COM = '0258'
    // THEN:
    // *SET *CF = #1
    // #6
    // COND:
    // §VERN_1_COM = '0266' OR §VERN_1_COM = '0617' OR §VERN_1_COM = '0280' OR §VERN_1_COM = '0285' OR §VERN_1_COM = '0293'
    // THEN:
    // *SET *CF = #1
    // #7
    // COND:
    // §VERN_1_COM = '0316' OR §VERN_1_COM = '0618' OR §VERN_1_COM = '0323' OR §VERN_1_COM = '0324'
    // THEN:
    // *SET *CF = #1
    // #8
    // COND:
    // §VERN_1_COM = '0619' OR §VERN_1_COM = '0620' OR §VERN_1_COM = '0621'
    // THEN:
    // *SET *CF = #1
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setCON_A(vars.get('§VERN_1_COM'));
    //#2
    if (vars.get('§VERN_1_COM') == '0053' || vars.get('§VERN_1_COM') == '0055' || vars.get('§VERN_1_COM') == '0059' || vars.get('§VERN_1_COM') == '0065' || vars.get('§VERN_1_COM') == '0069') {
        vars.setCF(1);
    }
    //#3
    if (vars.get('§VERN_1_COM') == '0070' || vars.get('§VERN_1_COM') == '0073' || vars.get('§VERN_1_COM') == '0076' || vars.get('§VERN_1_COM') == '0103' || vars.get('§VERN_1_COM') == '0107') {
        vars.setCF(1);
    }
    //#4
    if (vars.get('§VERN_1_COM') == '0121' || vars.get('§VERN_1_COM') == '0127' || vars.get('§VERN_1_COM') == '0130' || vars.get('§VERN_1_COM') == '0131' || vars.get('§VERN_1_COM') == '0147') {
        vars.setCF(1);
    }
    //#5
    if (vars.get('§VERN_1_COM') == '0616' || vars.get('§VERN_1_COM') == '0172' || vars.get('§VERN_1_COM') == '0208' || vars.get('§VERN_1_COM') == '0224' || vars.get('§VERN_1_COM') == '0258') {
        vars.setCF(1);
    }
    //#6
    if (vars.get('§VERN_1_COM') == '0266' || vars.get('§VERN_1_COM') == '0617' || vars.get('§VERN_1_COM') == '0280' || vars.get('§VERN_1_COM') == '0285' || vars.get('§VERN_1_COM') == '0293') {
        vars.setCF(1);
    }
    //#7
    if (vars.get('§VERN_1_COM') == '0316' || vars.get('§VERN_1_COM') == '0618' || vars.get('§VERN_1_COM') == '0323' || vars.get('§VERN_1_COM') == '0324') {
        vars.setCF(1);
    }
    //#8
    if (vars.get('§VERN_1_COM') == '0619' || vars.get('§VERN_1_COM') == '0620' || vars.get('§VERN_1_COM') == '0621') {
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
