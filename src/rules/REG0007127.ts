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

export const REG0007127: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0007127
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET §DUMMYN1 = #0
    // #2
    // COND:
    // ( §FS_FAM2_165 <> §SI ) AND ( §N_MODULI = #3 )
    // THEN:
    // *SET §DUMMYN1= [ §LARG_M3 + #3,5 ]
    // #3
    // COND:
    // ( §FS_FAM2_165 = §SI ) AND ( §N_MODULI = #3 )
    // THEN:
    // *SET §DUMMYN1 = [ §LARG_M3 - #9,2 ]
    // #4
    // THEN:
    // *SET *CON-B = [ §DUMMYN1 / #100 ]
    // #5
    // COND:
    // §VR_LAM_ABB <> ''
    // THEN:
    // *SET *CON-A = §VR_LAM_ABB
    // ELSE:
    // *SET *CON-A = §VERN_1_COM
    // #6
    // COND:
    // §DUMMYN1 > #0
    // THEN:
    // *SET *CF = #1
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setDUMMYN1(0);
    
    //#2
    if ((vars.get('§FS_FAM2_165') != vars.get('§SI')) && (vars.get('§N_MODULI') == 3)) {
        vars.setDUMMYN1(vars.get('§LARG_M3') + 3.5);
    }
    
    //#3
    if ((vars.get('§FS_FAM2_165') == vars.get('§SI')) && (vars.get('§N_MODULI') == 3)) {
        vars.setDUMMYN1(vars.get('§LARG_M3') - 9.2);
    }
    
    //#4
    vars.setCON_B(vars.get('§DUMMYN1') / 100);
    
    //#5
    if (vars.get('§VR_LAM_ABB') != '') {
        vars.setCON_A(vars.get('§VR_LAM_ABB'));
    } else {
        vars.setCON_A(vars.get('§VERN_1_COM'));
    }
    
    //#6
    if (vars.get('§DUMMYN1') > 0) {
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
