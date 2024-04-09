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

export const REG0004793: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0004793
    // REQUEST:
    // """
    // #1
    // COND:
    // §LARG >=§ALTE_TC
    // THEN:
    // *SET §DUMMYN1=§LARG
    // *SET §DUMMYN1=§ALTE_TC
    // ELSE:
    // *SET §DUMMYN1=§LARG
    // *SET §DUMMYN1=§ALTE_TC
    // #2
    // COND:
    // §LARG >=§ALTE_TC
    // THEN:
    // *SET *D_H= [ §DUMMYN1 + #10 ]
    // *SET *D_L=#28
    // *SET *D_P=#20
    // ELSE:
    // *SET *D_H= [ §DUMMYN1 + #10 ]
    // *SET *D_L=#28
    // *SET *D_P=#20
    // """
    // RESPONSE:
    
    //#1
    if (vars.get('§LARG') >= vars.get('§ALTE_TC')) {
        vars.setDUMMYN1(vars.get('§LARG'));
        vars.setDUMMYN1(vars.get('§ALTE_TC'));
    } else {
        vars.setDUMMYN1(vars.get('§LARG'));
        vars.setDUMMYN1(vars.get('§ALTE_TC'));
    }
    //#2
    if (vars.get('§LARG') >= vars.get('§ALTE_TC')) {
        vars.setD_H(vars.get('§DUMMYN1') + 10);
        vars.setD_L(28);
        vars.setD_P(20);
    } else {
        vars.setD_H(vars.get('§DUMMYN1') + 10);
        vars.setD_L(28);
        vars.setD_P(20);
    }
    // GENERATED

    return vars.output;
};
