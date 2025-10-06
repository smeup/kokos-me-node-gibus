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

export const REG0010587: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0010587
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_APERTURA_CEN = §SI
    // THEN:
    // *SET §DUMMYN1 = #2
    // ELSE:
    // *SET §DUMMYN1 = #1
    // #2
    // COND:
    // §FS_DOP_GU_GLISS = §SI
    // THEN:
    // *SET §DUMMYN3 = #2
    // ELSE:
    // *SET §DUMMYN3 = #1
    // #3
    // COND:
    // §FS_VET_SCORR = §SI AND §SPESS_VETRO_MM = '10'
    // THEN:
    // *SET *CF = [ ( §N_ANTE - §DUMMYN1 ) * §DUMMYN3 ]
    // *SET *CON-A = 'P000'
    // *SET *CON-B = #300
    // ELSE:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_APERTURA_CEN') == vars.get('§SI')) {
        vars.setDUMMYN1(2);
    } else {
        vars.setDUMMYN1(1);
    }
    
    //#2
    if (vars.get('§FS_DOP_GU_GLISS') == vars.get('§SI')) {
        vars.setDUMMYN3(2);
    } else {
        vars.setDUMMYN3(1);
    }
    
    //#3
    if ((vars.get('§FS_VET_SCORR') == vars.get('§SI')) && (vars.get('§SPESS_VETRO_MM') == '10')) {
        vars.setCF((vars.get('§N_ANTE') - vars.get('§DUMMYN1')) * vars.get('§DUMMYN3'));
        vars.setCON_A('P000');
        vars.setCON_B(300);
    } else {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
