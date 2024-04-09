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

export const REG0006739: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0006739
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET §DUMMYN1 = [ §LARG - #30 ]
    // #2
    // THEN:
    // *SET *CF = [ §DUMMYN1/#100 ]
    // #3
    // THEN:
    // *SET *CON-A ='P072'
    // #4
    // COND:
    // §VERN_1_COM ='0055' OR §VR_ABB='01'
    // THEN:
    // *SET *CON-A='P055'
    // #5
    // COND:
    // §VERN_1_COM ='0053' OR §VR_ABB='02'
    // THEN:
    // *SET *CON-A='P053'
    // """
    // RESPONSE:
    //#1
    vars.setDUMMYN1(vars.get('§LARG') - 30);
    
    //#2
    vars.setCF(vars.get('§DUMMYN1') / 100);
    
    //#3
    vars.setCON_A('P072');
    
    //#4
    if (vars.get('§VERN_1_COM') == '0055' || vars.get('§VR_ABB') == '01') {
        vars.setCON_A('P055');
    }
    
    //#5
    if (vars.get('§VERN_1_COM') == '0053' || vars.get('§VR_ABB') == '02') {
        vars.setCON_A('P053');
    }
    
    // GENERATED

    return vars.output;
};
