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

export const REG0012971: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0012971
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET *CON-A = 'P072'
    // *SET *CON-B = [§L_GAM - #35]
    // #2
    // COND:
    // §NR_SCA_TEL > #0
    // THEN:
    // *SET *CF = §NR_SCA_TEL
    // #3
    // COND:
    // §TI_GAM_OPT = '02'
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setCON_A('P072');
    vars.setCON_B(vars.get('§L_GAM') - 35);
    
    //#2
    if (vars.get('§NR_SCA_TEL') > 0) {
        vars.setCF(vars.get('§NR_SCA_TEL'));
    }
    
    //#3
    if (vars.get('§TI_GAM_OPT') == '02') {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
