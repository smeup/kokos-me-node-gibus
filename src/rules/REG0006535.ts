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

export const REG0006535: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0006535
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A='P072'
    // #2
    // COND:
    // §VR_PLA_TEL='P055' OR §VR_PLA_TEL='P053'
    // THEN:
    // *SET *CON-A='P055'
    // #3
    // THEN:
    // *SET *CF = [ §NR_FRANGI_LED ]
    // """
    // RESPONSE:
    //#1
    vars.setCON_A('P072');
    
    //#2
    if (vars.get('§VR_PLA_TEL') == 'P055' || vars.get('§VR_PLA_TEL') == 'P053') {
        vars.setCON_A('P055');
    }
    
    //#3
    vars.setCF(vars.get('§NR_FRANGI_LED'));
    // GENERATED

    return vars.output;
};
