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

export const REG0013282: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0013282
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = [ §LARG * #2 / #100 ]
    // #2
    // THEN:
    // *SET *CON-A = 'P055'
    // #3
    // THEN:
    // *SET §DUMMYA1 = §VR_ABB
    // #4
    // COND:
    // §DUMMYA1 = '01'
    // THEN:
    // *SET *CON-A = 'P055'
    // #5
    // COND:
    // §DUMMYA1 = '02'
    // THEN:
    // *SET *CON-A = 'P053'
    // #6
    // COND:
    // §DUMMYA1 = '03'
    // THEN:
    // *SET *CON-A = 'P106'
    // #7
    // COND:
    // §DUMMYA1 = '04' OR §DUMMYA1 = '05' OR §DUMMYA1 = '08'
    // THEN:
    // *SET *CON-A = 'P072'
    // #8
    // COND:
    // §DUMMYA1 = '07'
    // THEN:
    // *SET *CON-A = 'P070'
    // """
    // RESPONSE:
    
    //#1
    vars.setCF(vars.get('§LARG') * 2 / 100);
    //#2
    vars.setCON_A('P055');
    //#3
    vars.setDUMMYA1(vars.get('§VR_ABB'));
    //#4
    if (vars.get('§DUMMYA1') == '01') {
        vars.setCON_A('P055');
    }
    //#5
    if (vars.get('§DUMMYA1') == '02') {
        vars.setCON_A('P053');
    }
    //#6
    if (vars.get('§DUMMYA1') == '03') {
        vars.setCON_A('P106');
    }
    //#7
    if (vars.get('§DUMMYA1') == '04' || vars.get('§DUMMYA1') == '05' || vars.get('§DUMMYA1') == '08') {
        vars.setCON_A('P072');
    }
    //#8
    if (vars.get('§DUMMYA1') == '07') {
        vars.setCON_A('P070');
    }
    // GENERATED

    return vars.output;
};
