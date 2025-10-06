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

export const REG0006093: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0006093
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET §DUMMYN1 = #1
    // *SET *CF = #0
    // #2
    // COND:
    // ( §LUNG_LISTELLO > #0 ) AND ( §LUNG_LISTELLO <= #25 )
    // THEN:
    // *SET *CF = [ #0,25 * §DUMMYN1 ]
    // #3
    // COND:
    // ( §LUNG_LISTELLO > #25 ) AND ( §LUNG_LISTELLO <= #50 )
    // THEN:
    // *SET *CF = [ #0,5 * §DUMMYN1 ]
    // #4
    // COND:
    // ( §LUNG_LISTELLO > #50 ) AND ( §LUNG_LISTELLO <= #75 )
    // THEN:
    // *SET *CF = [ #0,75 * §DUMMYN1 ]
    // #5
    // COND:
    // ( §LUNG_LISTELLO > #75 ) AND ( §LUNG_LISTELLO <= #100 )
    // THEN:
    // *SET *CF = §DUMMYN1
    // """
    // RESPONSE:
    //#1
    vars.setDUMMYN1(1);
    vars.setCF(0);
    //#2
    if ((vars.get('§LUNG_LISTELLO') > 0) && (vars.get('§LUNG_LISTELLO') <= 25)) {
        vars.setCF(0.25 * vars.get('§DUMMYN1'));
    }
    //#3
    if ((vars.get('§LUNG_LISTELLO') > 25) && (vars.get('§LUNG_LISTELLO') <= 50)) {
        vars.setCF(0.5 * vars.get('§DUMMYN1'));
    }
    //#4
    if ((vars.get('§LUNG_LISTELLO') > 50) && (vars.get('§LUNG_LISTELLO') <= 75)) {
        vars.setCF(0.75 * vars.get('§DUMMYN1'));
    }
    //#5
    if ((vars.get('§LUNG_LISTELLO') > 75) && (vars.get('§LUNG_LISTELLO') <= 100)) {
        vars.setCF(vars.get('§DUMMYN1'));
    }
    // GENERATED

    return vars.output;
};
