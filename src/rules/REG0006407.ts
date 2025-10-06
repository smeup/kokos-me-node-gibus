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

export const REG0006407: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0006407
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF=#0
    // #2
    // COND:
    // ( §TIPO_GLISSE='ADX' OR §TIPO_GLISSE='BDX' OR §TIPO_GLISSE='CDX' )  AND ( §VE_COM_LDX='B'  OR §VE_COM_LDX='B+C')
    // THEN:
    // *SET *CF=#1
    // #3
    // COND:
    // ( §TIPO_GLISSE ='ASX' OR §TIPO_GLISSE ='BSX' OR  §TIPO_GLISSE ='CSX' ) AND ( §VE_COM_LSX='B' OR §VE_COM_LSX='B+C')
    // THEN:
    // *SET *CF=#1
    // #4
    // COND:
    // ( ( §TIPO_GLISSE='D' ) OR ( §TIPO_GLISSE='E' ) OR ( §TIPO_GLISSE='F' ) )
    // THEN:
    // *SET *CF=#0
    // *SET §DUMMYN1=#0
    // #5
    // COND:
    // ( ( §TIPO_GLISSE='D' ) OR ( §TIPO_GLISSE='E' ) OR ( §TIPO_GLISSE='F' ) ) AND                                                 ( §VE_COM_LSX='B' OR §VE_COM_LSX='B+C')
    // THEN:
    // *SET §DUMMYN1 = [*CF + #1]
    // #6
    // COND:
    // ( ( §TIPO_GLISSE='D' ) OR ( §TIPO_GLISSE='E' ) OR ( §TIPO_GLISSE='F' ) ) AND                                                 ( §VE_COM_LSX='B' OR §VE_COM_LSX='B+C')
    // THEN:
    // *SET *CF= §DUMMYN1
    // #7
    // COND:
    // ( ( §TIPO_GLISSE='D' ) OR ( §TIPO_GLISSE='E' ) OR ( §TIPO_GLISSE='F' ) ) AND                                                 ( §VE_COM_LDX='B' OR §VE_COM_LDX='B+C')
    // THEN:
    // *SET §DUMMYN1 = [*CF + #1]
    // #8
    // COND:
    // ( ( §TIPO_GLISSE='D' ) OR ( §TIPO_GLISSE='E' ) OR ( §TIPO_GLISSE='F' ) ) AND                                                 ( §VE_COM_LDX='B' OR §VE_COM_LDX='B+C')
    // THEN:
    // *SET *CF= §DUMMYN1
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if ((vars.get('§TIPO_GLISSE') == 'ADX' || vars.get('§TIPO_GLISSE') == 'BDX' || vars.get('§TIPO_GLISSE') == 'CDX') && (vars.get('§VE_COM_LDX') == 'B' || vars.get('§VE_COM_LDX') == 'B+C')) {
        vars.setCF(1);
    }
    
    //#3
    if ((vars.get('§TIPO_GLISSE') == 'ASX' || vars.get('§TIPO_GLISSE') == 'BSX' || vars.get('§TIPO_GLISSE') == 'CSX') && (vars.get('§VE_COM_LSX') == 'B' || vars.get('§VE_COM_LSX') == 'B+C')) {
        vars.setCF(1);
    }
    
    //#4
    if (vars.get('§TIPO_GLISSE') == 'D' || vars.get('§TIPO_GLISSE') == 'E' || vars.get('§TIPO_GLISSE') == 'F') {
        vars.setCF(0);
        vars.setDUMMYN1(0);
    }
    
    //#5
    if ((vars.get('§TIPO_GLISSE') == 'D' || vars.get('§TIPO_GLISSE') == 'E' || vars.get('§TIPO_GLISSE') == 'F') && (vars.get('§VE_COM_LSX') == 'B' || vars.get('§VE_COM_LSX') == 'B+C')) {
        vars.setDUMMYN1(vars.getCF() + 1);
    }
    
    //#6
    if ((vars.get('§TIPO_GLISSE') == 'D' || vars.get('§TIPO_GLISSE') == 'E' || vars.get('§TIPO_GLISSE') == 'F') && (vars.get('§VE_COM_LSX') == 'B' || vars.get('§VE_COM_LSX') == 'B+C')) {
        vars.setCF(vars.get('§DUMMYN1'));
    }
    
    //#7
    if ((vars.get('§TIPO_GLISSE') == 'D' || vars.get('§TIPO_GLISSE') == 'E' || vars.get('§TIPO_GLISSE') == 'F') && (vars.get('§VE_COM_LDX') == 'B' || vars.get('§VE_COM_LDX') == 'B+C')) {
        vars.setDUMMYN1(vars.getCF() + 1);
    }
    
    //#8
    if ((vars.get('§TIPO_GLISSE') == 'D' || vars.get('§TIPO_GLISSE') == 'E' || vars.get('§TIPO_GLISSE') == 'F') && (vars.get('§VE_COM_LDX') == 'B' || vars.get('§VE_COM_LDX') == 'B+C')) {
        vars.setCF(vars.get('§DUMMYN1'));
    }
    // GENERATED

    return vars.output;
};
