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

export const REG0011680: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0011680
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET §DUMMYN1 = §NR_FRANGI
    // #2
    // COND:
    // §FS_LAM_BIO = §SI
    // THEN:
    // *SET §DUMMYN1 = #1
    // #3
    // COND:
    // §L_SCA_LAM <= #450
    // THEN:
    // *SET *CF = §DUMMYN1
    // #4
    // COND:
    // §L_SCA_LAM <= #400
    // THEN:
    // *SET *CF = #0
    // #5
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setDUMMYN1(vars.get('§NR_FRANGI'));
    
    //#2
    if (vars.get('§FS_LAM_BIO') == vars.get('§SI')) {
        vars.setDUMMYN1(1);
    }
    
    //#3
    if (vars.get('§L_SCA_LAM') <= 450) {
        vars.setCF(vars.get('§DUMMYN1'));
    }
    
    //#4
    if (vars.get('§L_SCA_LAM') <= 400) {
        vars.setCF(0);
    }
    
    //#5
    vars.setCF(0);
    // GENERATED

    return vars.output;
};
