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

export const REG0004492: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0004492
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF= #0
    // #2
    // COND:
    // ( §VE_COM_LSX='P' ) OR ( §VE_COM_LDX='P' ) OR ( §VE_COM_LSX='C' ) OR ( §VE_COM_LDX='C' )
    // THEN:
    // *SET *CF=#2
    // #3
    // COND:
    // ( §VE_COM_LSX='P' ) AND (( §VE_COM_LDX='P' ) OR ( §VE_COM_LDX='C' ))
    // THEN:
    // *SET *CF=#4
    // #4
    // COND:
    // ( §VE_COM_LSX='C' ) AND (( §VE_COM_LDX='P' ) OR ( §VE_COM_LDX='C' ))
    // THEN:
    // *SET *CF=#4
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (vars.get('§VE_COM_LSX') == 'P' || vars.get('§VE_COM_LDX') == 'P' || vars.get('§VE_COM_LSX') == 'C' || vars.get('§VE_COM_LDX') == 'C') {
        vars.setCF(2);
    }
    
    //#3
    if (vars.get('§VE_COM_LSX') == 'P' && (vars.get('§VE_COM_LDX') == 'P' || vars.get('§VE_COM_LDX') == 'C')) {
        vars.setCF(4);
    }
    
    //#4
    if (vars.get('§VE_COM_LSX') == 'C' && (vars.get('§VE_COM_LDX') == 'P' || vars.get('§VE_COM_LDX') == 'C')) {
        vars.setCF(4);
    }
    
    // GENERATED

    return vars.output;
};
