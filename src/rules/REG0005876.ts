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

export const REG0005876: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0005876
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A='P072'
    // #2
    // THEN:
    // *SET *CON-A='P072'
    // #3
    // THEN:
    // *SET *CON-A='P072'
    // #4
    // COND:
    // ( §VERN_1_COM='0055' ) OR ( §VERN_1_COM='0053' )
    // THEN:
    // *SET *CON-A='P055'
    // #5
    // COND:
    // ( §VERN_1_COM='0055' ) OR ( §VERN_1_COM='0053' )
    // THEN:
    // *SET *CON-A='P055'
    // #6
    // COND:
    // ( §VERN_1_COM='0055' ) OR ( §VERN_1_COM='0053' )
    // THEN:
    // *SET *CON-A='P055'
    // #7
    // COND:
    // §INN_MON_GA_LAT1 = '03'
    // THEN:
    // *SET *CF = #0
    // #8
    // COND:
    // §INN_MON_GA_LAT1 = '03'
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    vars.setCON_A('P072');
    //#2
    vars.setCON_A('P072');
    //#3
    vars.setCON_A('P072');
    //#4
    if ((vars.get('§VERN_1_COM') == '0055') || (vars.get('§VERN_1_COM') == '0053')) {
        vars.setCON_A('P055');
    }
    //#5
    if ((vars.get('§VERN_1_COM') == '0055') || (vars.get('§VERN_1_COM') == '0053')) {
        vars.setCON_A('P055');
    }
    //#6
    if ((vars.get('§VERN_1_COM') == '0055') || (vars.get('§VERN_1_COM') == '0053')) {
        vars.setCON_A('P055');
    }
    //#7
    if (vars.get('§INN_MON_GA_LAT1') == '03') {
        vars.setCF(0);
    }
    //#8
    if (vars.get('§INN_MON_GA_LAT1') == '03') {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
