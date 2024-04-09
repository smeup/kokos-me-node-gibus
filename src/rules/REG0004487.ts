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

export const REG0004487: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0004487
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET §DUMMYN1 = #0
    // #2
    // COND:
    // ( §VE_COM_LSX='C' ) OR ( §VE_COM_LSX='B+C' )
    // THEN:
    // *SET §DUMMYN1 = [*CF + #1]
    // #3
    // COND:
    // ( §VE_COM_LSX='C' ) OR ( §VE_COM_LSX='B+C' )
    // THEN:
    // *SET *CF = §DUMMYN1
    // #4
    // COND:
    // ( §VE_COM_LDX='C' ) OR ( §VE_COM_LDX='B+C' )
    // THEN:
    // *SET §DUMMYN1 = [*CF + #1]
    // #5
    // COND:
    // ( §VE_COM_LDX='C' ) OR ( §VE_COM_LDX='B+C' )
    // THEN:
    // *SET *CF = §DUMMYN1
    // #6
    // COND:
    // ( §VE_COM_CE='C' ) OR ( §VE_COM_CE='B+C' )
    // THEN:
    // *SET §DUMMYN1 = [*CF + #1]
    // #7
    // COND:
    // ( §VE_COM_CE='C' ) OR ( §VE_COM_CE='B+C' )
    // THEN:
    // *SET *CF = §DUMMYN1
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setDUMMYN1(0);
    
    //#2
    if (vars.get('§VE_COM_LSX') == 'C' || vars.get('§VE_COM_LSX') == 'B+C') {
        vars.setDUMMYN1(vars.getCF() + 1);
    }
    
    //#3
    if (vars.get('§VE_COM_LSX') == 'C' || vars.get('§VE_COM_LSX') == 'B+C') {
        vars.setCF(vars.get('§DUMMYN1'));
    }
    
    //#4
    if (vars.get('§VE_COM_LDX') == 'C' || vars.get('§VE_COM_LDX') == 'B+C') {
        vars.setDUMMYN1(vars.getCF() + 1);
    }
    
    //#5
    if (vars.get('§VE_COM_LDX') == 'C' || vars.get('§VE_COM_LDX') == 'B+C') {
        vars.setCF(vars.get('§DUMMYN1'));
    }
    
    //#6
    if (vars.get('§VE_COM_CE') == 'C' || vars.get('§VE_COM_CE') == 'B+C') {
        vars.setDUMMYN1(vars.getCF() + 1);
    }
    
    //#7
    if (vars.get('§VE_COM_CE') == 'C' || vars.get('§VE_COM_CE') == 'B+C') {
        vars.setCF(vars.get('§DUMMYN1'));
    }
    
    // GENERATED

    return vars.output;
};
