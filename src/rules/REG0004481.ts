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

export const REG0004481: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0004481
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF=#0
    // #2
    // COND:
    // ( §TIPO_GLISSE='ASX' ) OR ( §TIPO_GLISSE= 'D' )
    // THEN:
    // *SET *CF=#2
    // #3
    // COND:
    // ( §TIPO_GLISSE='BSX' ) OR (§TIPO_GLISSE='E' )
    // THEN:
    // *SET *CF=#4
    // #4
    // COND:
    // ( §TIPO_GLISSE='CSX' ) OR ( §TIPO_GLISSE='F' )
    // THEN:
    // *SET *CF=#6
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (vars.get('§TIPO_GLISSE') == 'ASX' || vars.get('§TIPO_GLISSE') == 'D') {
        vars.setCF(2);
    }
    
    //#3
    if (vars.get('§TIPO_GLISSE') == 'BSX' || vars.get('§TIPO_GLISSE') == 'E') {
        vars.setCF(4);
    }
    
    //#4
    if (vars.get('§TIPO_GLISSE') == 'CSX' || vars.get('§TIPO_GLISSE') == 'F') {
        vars.setCF(6);
    }
    // GENERATED

    return vars.output;
};
