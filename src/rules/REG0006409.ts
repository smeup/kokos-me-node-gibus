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

export const REG0006409: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0006409
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF=#0
    // #2
    // COND:
    // ( ( §TIPO_GLISSE = 'D' ) OR ( §TIPO_GLISSE= 'E' ) OR ( §TIPO_GLISSE='F' ) ) AND ( §VE_COM_CE='B' )
    // THEN:
    // *SET *CF=#1
    // #3
    // COND:
    // ( ( §TIPO_GLISSE = 'D' ) OR ( §TIPO_GLISSE= 'E' ) OR ( §TIPO_GLISSE='F' ) ) AND ( §VE_COM_CE='B+C' )
    // THEN:
    // *SET *CF=#1
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if ((vars.get('§TIPO_GLISSE') == 'D' || vars.get('§TIPO_GLISSE') == 'E' || vars.get('§TIPO_GLISSE') == 'F') && vars.get('§VE_COM_CE') == 'B') {
        vars.setCF(1);
    }
    
    //#3
    if ((vars.get('§TIPO_GLISSE') == 'D' || vars.get('§TIPO_GLISSE') == 'E' || vars.get('§TIPO_GLISSE') == 'F') && vars.get('§VE_COM_CE') == 'B+C') {
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
