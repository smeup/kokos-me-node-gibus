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

export const REG0013291: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0013291
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // THEN:
    // *SET *CF = [§LARG * #2 / #100]
    // *SET *CON-A = 'P072'
    // #3
    // THEN:
    // *SET §DUMMYA1 = §VR_ABB
    // #4
    // COND:
    // §DUMMYA1 = '02'
    // THEN:
    // *SET *CON-A = 'P053'
    // #5
    // COND:
    // §DUMMYA1 = '01'
    // THEN:
    // *SET *CON-A = 'P055'
    // #6
    // COND:
    // §DUMMYA1 = '03'
    // THEN:
    // *SET *CON-A = 'P055'
    // #7
    // COND:
    // §DUMMYA1 = '07'
    // THEN:
    // *SET *CON-A = 'P070'
    // #8
    // COND:
    // §DUMMYA1 = '06'
    // THEN:
    // *SET *CON-A = 'P106'
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    vars.setCF(vars.get('§LARG') * 2 / 100);
    vars.setCON_A('P072');
    
    //#3
    vars.setDUMMYA1(vars.get('§VR_ABB'));
    
    //#4
    if (vars.get('§DUMMYA1') == '02') {
        vars.setCON_A('P053');
    }
    
    //#5
    if (vars.get('§DUMMYA1') == '01') {
        vars.setCON_A('P055');
    }
    
    //#6
    if (vars.get('§DUMMYA1') == '03') {
        vars.setCON_A('P055');
    }
    
    //#7
    if (vars.get('§DUMMYA1') == '07') {
        vars.setCON_A('P070');
    }
    
    //#8
    if (vars.get('§DUMMYA1') == '06') {
        vars.setCON_A('P106');
    }
    // GENERATED

    return vars.output;
};
