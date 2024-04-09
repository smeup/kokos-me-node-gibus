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

export const REG0004489: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0004489
    // REQUEST:
    // """
    // #1
    // COND:
    // ( §VE_COM_LSX='S' ) OR ( §VE_COM_LDX='S' )
    // THEN:
    // *SET *CF=[ #1 + §VE_QTA_POMELLO ]
    // #2
    // COND:
    // ( §VE_COM_LSX='S' ) AND ( §VE_COM_LDX='S' )
    // THEN:
    // *SET *CF=[ §VE_QTA_POMELLO + #2 ]
    // #3
    // COND:
    // ( §VE_COM_LSX<>'S' ) AND ( §VE_COM_LDX<>'S' )
    // THEN:
    // *SET *CF=[ §VE_QTA_POMELLO + #0 ]
    // #4
    // COND:
    // ( §VE_COM_CE='S' ) AND (( §VE_COM_LSX='S' ) OR ( §VE_COM_LDX='S' ))
    // THEN:
    // *SET *CF=#3
    // #5
    // COND:
    // ( §VE_COM_CE='S' ) AND ( §VE_COM_LSX='S' ) AND ( §VE_COM_LDX='S' )
    // THEN:
    // *SET *CF=#4
    // """
    // RESPONSE:
    //#1
    if (vars.get('§VE_COM_LSX') == 'S' || vars.get('§VE_COM_LDX') == 'S') {
        vars.setCF(1 + vars.get('§VE_QTA_POMELLO'));
    }
    
    //#2
    if (vars.get('§VE_COM_LSX') == 'S' && vars.get('§VE_COM_LDX') == 'S') {
        vars.setCF(vars.get('§VE_QTA_POMELLO') + 2);
    }
    
    //#3
    if (vars.get('§VE_COM_LSX') != 'S' && vars.get('§VE_COM_LDX') != 'S') {
        vars.setCF(vars.get('§VE_QTA_POMELLO') + 0);
    }
    
    //#4
    if (vars.get('§VE_COM_CE') == 'S' && (vars.get('§VE_COM_LSX') == 'S' || vars.get('§VE_COM_LDX') == 'S')) {
        vars.setCF(3);
    }
    
    //#5
    if (vars.get('§VE_COM_CE') == 'S' && vars.get('§VE_COM_LSX') == 'S' && vars.get('§VE_COM_LDX') == 'S') {
        vars.setCF(4);
    }
    
    // GENERATED

    return vars.output;
};
