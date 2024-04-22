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

export const REG0011877: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0011877
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = [ §WS001_BP + §WS001_BC + §WS001_BL]
    // #2
    // THEN:
    // *SET §DUMMYN1 = [ *CF * #2]
    // #3
    // THEN:
    // *SET *CF = [ §DUMMYN1 + #1 + §WS001_BL ]
    // """
    // RESPONSE:
    //#1
    vars.setCF(vars.get('§WS001_BP') + vars.get('§WS001_BC') + vars.get('§WS001_BL'));
    
    //#2
    vars.setDUMMYN1(vars.getCF() * 2);
    
    //#3
    vars.setCF(vars.get('§DUMMYN1') + 1 + vars.get('§WS001_BL'));
    // GENERATED

    return vars.output;
};
