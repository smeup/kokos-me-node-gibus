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

export const REG0004555: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0004555
    // REQUEST:
    // """
    // #1
    // COND:
    // ( §SPESS_VETRO_MM='10' ) AND ( §VE_GUISUP_2VIE > #0 )
    // THEN:
    // *SET §DUMMYN1=[ §VE_GUISUP_2VIE * #2 * §N_VIE ]
    // #2
    // COND:
    // ( §SPESS_VETRO_MM='10' ) AND ( §VE_GUISUP_2VIE > #0 )
    // THEN:
    // *SET *CF = [ §DUMMYN1/#100 ]
    // #3
    // COND:
    // ( §SPESS_VETRO_MM='10' ) AND ( §VE_GUISUP_3VIE >#0 )
    // THEN:
    // *SET §DUMMYN1=[ §VE_GUISUP_3VIE * #2 * §N_VIE ]
    // #4
    // COND:
    // ( §SPESS_VETRO_MM='10' ) AND ( §VE_GUISUP_3VIE >#0 )
    // THEN:
    // *SET *CF= [ §DUMMYN1/#100 ]
    // #5
    // COND:
    // ( §SPESS_VETRO_MM='10' ) AND ( §VE_GUISUP_4VIE > #0 )
    // THEN:
    // *SET §DUMMYN1=[ §VE_GUISUP_4VIE * #2 * §N_VIE ]
    // #6
    // COND:
    // ( §SPESS_VETRO_MM='10' ) AND ( §VE_GUISUP_4VIE >#0 )
    // THEN:
    // *SET *CF=[ §DUMMYN1/#100 ]
    // #7
    // COND:
    // §SPESS_VETRO_MM<>'10'
    // THEN:
    // *SET *CF=#0
    // """
    // RESPONSE:
    //#1
    if (vars.get('§SPESS_VETRO_MM') == '10' && vars.get('§VE_GUISUP_2VIE') > 0) {
        vars.setDUMMYN1(vars.get('§VE_GUISUP_2VIE') * 2 * vars.get('§N_VIE'));
    }
    
    //#2
    if (vars.get('§SPESS_VETRO_MM') == '10' && vars.get('§VE_GUISUP_2VIE') > 0) {
        vars.setCF(vars.get('§DUMMYN1') / 100);
    }
    
    //#3
    if (vars.get('§SPESS_VETRO_MM') == '10' && vars.get('§VE_GUISUP_3VIE') > 0) {
        vars.setDUMMYN1(vars.get('§VE_GUISUP_3VIE') * 2 * vars.get('§N_VIE'));
    }
    
    //#4
    if (vars.get('§SPESS_VETRO_MM') == '10' && vars.get('§VE_GUISUP_3VIE') > 0) {
        vars.setCF(vars.get('§DUMMYN1') / 100);
    }
    
    //#5
    if (vars.get('§SPESS_VETRO_MM') == '10' && vars.get('§VE_GUISUP_4VIE') > 0) {
        vars.setDUMMYN1(vars.get('§VE_GUISUP_4VIE') * 2 * vars.get('§N_VIE'));
    }
    
    //#6
    if (vars.get('§SPESS_VETRO_MM') == '10' && vars.get('§VE_GUISUP_4VIE') > 0) {
        vars.setCF(vars.get('§DUMMYN1') / 100);
    }
    
    //#7
    if (vars.get('§SPESS_VETRO_MM') != '10') {
        vars.setCF(0);
    }
    
    // GENERATED

    return vars.output;
};
