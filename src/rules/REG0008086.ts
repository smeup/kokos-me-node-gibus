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

export const REG0008086: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0008086
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET §DUMMYN1 = [ §N_MODULI + #1 ]
    // #2
    // THEN:
    // *SET §DUMMYN2 = §NR_FRANGI
    // #3
    // COND:
    // §TIPO_P_TELO1 = 'FLY'
    // THEN:
    // *SET §DUMMYN2 = [ §NR_FRANGI - #2 ]
    // #4
    // THEN:
    // *SET *CF = [ §DUMMYN1 * §DUMMYN2 ]
    // #5
    // COND:
    // §FS_MAKI = §SI
    // THEN:
    // *SET *LG=''
    // """
    // RESPONSE:
    //#1
    vars.setDUMMYN1(vars.get('§N_MODULI') + 1);
    
    //#2
    vars.setDUMMYN2(vars.get('§NR_FRANGI'));
    
    //#3
    if (vars.get('§TIPO_P_TELO1') == 'FLY') {
        vars.setDUMMYN2(vars.get('§NR_FRANGI') - 2);
    }
    
    //#4
    vars.setCF(vars.get('§DUMMYN1') * vars.get('§DUMMYN2'));
    
    //#5
    if (vars.get('§FS_MAKI') == vars.get('§SI')) {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
