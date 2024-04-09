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

export const REG0009427: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0009427
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A = §VR_PLA_TEL
    // #2
    // THEN:
    // *SET §DUMMYN1 = §NR_FRANGI
    // #3
    // COND:
    // §TIPO_PLANA = '01'
    // THEN:
    // *SET §DUMMYN1 = [ §NR_FRANGI - §X_CHI_RET ]
    // #4
    // THEN:
    // *SET *CF = [ §DUMMYN1 * #2 ]
    // """
    // RESPONSE:
    //#1
    vars.setCON_A(vars.get('§VR_PLA_TEL'));
    
    //#2
    vars.setDUMMYN1(vars.get('§NR_FRANGI'));
    
    //#3
    if (vars.get('§TIPO_PLANA') == '01') {
        vars.setDUMMYN1(vars.get('§NR_FRANGI') - vars.get('§X_CHI_RET'));
    }
    
    //#4
    vars.setCF(vars.get('§DUMMYN1') * 2);
    // GENERATED

    return vars.output;
};
