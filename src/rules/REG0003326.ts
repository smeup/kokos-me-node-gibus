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

export const REG0003326: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0003326
    // REQUEST:
    // """
    // #1
    // COND:
    // §H_ANT_M2 > #0
    // THEN:
    // *SET *CON-A=§VERN_1_COM
    // *SET *CON-B=§H_ANT_M2
    // ELSE:
    // *SET *LG=''
    // #2
    // COND:
    // §AR_ANT2_T01 <> ''
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    if (vars.get('§H_ANT_M2') > 0) {
        vars.setCON_A(vars.get('§VERN_1_COM'));
        vars.setCON_B(vars.get('§H_ANT_M2'));
    } else {
        vars.setLG('');
    }
    
    //#2
    if (vars.get('§AR_ANT2_T01') !== '') {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
