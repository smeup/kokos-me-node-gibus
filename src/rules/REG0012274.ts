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

export const REG0012274: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0012274
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = §WS003PAS01
    // #2
    // THEN:
    // *SET *CON-A = 'P072'
    // #3
    // COND:
    // §VR_ABB_FRA = '01' OR §VR_ABB_FRA = '02'
    // THEN:
    // *SET *CON-A = 'P055'
    // """
    // RESPONSE:
    //#1
    vars.setCF(vars.get('§WS003PAS01'));
    
    //#2
    vars.setCON_A('P072');
    
    //#3
    if (vars.get('§VR_ABB_FRA') == '01' || vars.get('§VR_ABB_FRA') == '02') {
        vars.setCON_A('P055');
    }
    // GENERATED

    return vars.output;
};
