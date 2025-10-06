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

export const REG0005310: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0005310
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A='P073'
    // #2
    // COND:
    // §VERN_1_COM='0055' OR §VR_ABB = '01'
    // THEN:
    // *SET *CON-A='P055'
    // #3
    // COND:
    // §VERN_1_COM='0053' OR §VR_ABB = '02'
    // THEN:
    // *SET *CON-A='P053'
    // #4
    // COND:
    // §VERN_1_COM='0069' OR §VR_ABB = '06'
    // THEN:
    // *SET *CON-A='P069'
    // """
    // RESPONSE:
    //#1
    vars.setCON_A('P073');
    
    //#2
    if (vars.get('§VERN_1_COM') == '0055' || vars.get('§VR_ABB') == '01') {
        vars.setCON_A('P055');
    }
    
    //#3
    if (vars.get('§VERN_1_COM') == '0053' || vars.get('§VR_ABB') == '02') {
        vars.setCON_A('P053');
    }
    
    //#4
    if (vars.get('§VERN_1_COM') == '0069' || vars.get('§VR_ABB') == '06') {
        vars.setCON_A('P069');
    }
    
    // GENERATED

    return vars.output;
};
