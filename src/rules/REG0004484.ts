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

export const REG0004484: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0004484
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF=#0
    // #2
    // THEN:
    // *SET *CF=[ §N_ANTE - #1 ]
    // #3
    // COND:
    // ( ( §TIPO_GLISSE = 'ADX' ) AND ( §VE_COM_LSX='B' ) ) OR ( ( §TIPO_GLISSE = 'ASX' ) AND ( §VE_COM_LDX='B' ) )
    // THEN:
    // *SET *CF=[ §N_ANTE - #2 ]
    // #4
    // COND:
    // ( ( §TIPO_GLISSE = 'BDX' )  AND ( §VE_COM_LSX='B' ) ) OR ( ( §TIPO_GLISSE = 'BSX' ) AND ( §VE_COM_LDX='B' ) )
    // THEN:
    // *SET *CF=[ §N_ANTE - #2 ]
    // #5
    // COND:
    // ( §TIPO_GLISSE = 'CDX' AND  §VE_COM_LSX='B' ) OR ( §TIPO_GLISSE = 'CSX' AND §VE_COM_LDX='B' )
    // THEN:
    // *SET *CF=[ §N_ANTE - #2 ]
    // #6
    // COND:
    // ( ( §TIPO_GLISSE='D' ) OR ( §TIPO_GLISSE='E' ) OR  ( §TIPO_GLISSE='F' ) ) AND ( §VE_COM_CE<>'B' )
    // THEN:
    // *SET *CF=[ §N_ANTE - #2 ]
    // #7
    // COND:
    // ( ( §TIPO_GLISSE='D' ) OR ( §TIPO_GLISSE='E' ) OR ( §TIPO_GLISSE='F' ) ) AND ( §VE_COM_CE='B' )
    // THEN:
    // *SET *CF= [ §N_ANTE - #4 ]
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    vars.setCF(vars.get('§N_ANTE') - 1);
    
    //#3
    if ((vars.get('§TIPO_GLISSE') == 'ADX' && vars.get('§VE_COM_LSX') == 'B') || (vars.get('§TIPO_GLISSE') == 'ASX' && vars.get('§VE_COM_LDX') == 'B')) {
        vars.setCF(vars.get('§N_ANTE') - 2);
    }
    
    //#4
    if ((vars.get('§TIPO_GLISSE') == 'BDX' && vars.get('§VE_COM_LSX') == 'B') || (vars.get('§TIPO_GLISSE') == 'BSX' && vars.get('§VE_COM_LDX') == 'B')) {
        vars.setCF(vars.get('§N_ANTE') - 2);
    }
    
    //#5
    if ((vars.get('§TIPO_GLISSE') == 'CDX' && vars.get('§VE_COM_LSX') == 'B') || (vars.get('§TIPO_GLISSE') == 'CSX' && vars.get('§VE_COM_LDX') == 'B')) {
        vars.setCF(vars.get('§N_ANTE') - 2);
    }
    
    //#6
    if ((vars.get('§TIPO_GLISSE') == 'D' || vars.get('§TIPO_GLISSE') == 'E' || vars.get('§TIPO_GLISSE') == 'F') && vars.get('§VE_COM_CE') != 'B') {
        vars.setCF(vars.get('§N_ANTE') - 2);
    }
    
    //#7
    if ((vars.get('§TIPO_GLISSE') == 'D' || vars.get('§TIPO_GLISSE') == 'E' || vars.get('§TIPO_GLISSE') == 'F') && vars.get('§VE_COM_CE') == 'B') {
        vars.setCF(vars.get('§N_ANTE') - 4);
    }
    
    // GENERATED

    return vars.output;
};
