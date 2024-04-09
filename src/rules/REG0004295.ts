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

export const REG0004295: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0004295
    // REQUEST:
    // """
    // #1
    // COND:
    // §P_PAS_CAV1_IN_S > #0
    // THEN:
    // *SET *CON-A = §VERN_1_COM
    // *SET *CON-B = [§P_PAS_CAV1_IN_S + #0,4]
    // *SET *S2= [§P_PAS_CAV1_IN_S + #0,4]
    // ELSE:
    // *SET *LG=''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§P_PAS_CAV1_IN_S') > 0) {
        vars.setCON_A(vars.get('§VERN_1_COM'));
        vars.setCON_B(vars.get('§P_PAS_CAV1_IN_S') + 0.4);
        vars.setS2(vars.get('§P_PAS_CAV1_IN_S') + 0.4);
    } else {
        vars.setLG('');
    }
    
    // GENERATED

    return vars.output;
};
