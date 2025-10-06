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

export const REG0008395: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0008395
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET §DUMMYN1 = [ §N_MODULI + #1 ]
    // #2
    // THEN:
    // *SET *CF = [ §DUMMYN1 * §NR_FRANGI ]
    // #3
    // COND:
    // §FS_MAKI = §SI
    // THEN:
    // *SET *LG = ''
    // #4
    // COND:
    // §FS_FAM2_FLY_R = §SI
    // THEN:
    // *SET §DUMMYN2 = [ §NR_FRANGI - #2 ]
    // #5
    // COND:
    // §FS_FAM2_FLY_R = §SI
    // THEN:
    // *SET *CF = [ §DUMMYN1 * §DUMMYN2 ]
    // """
    // RESPONSE:
    //#1
    vars.setDUMMYN1(vars.get('§N_MODULI') + 1);
    
    //#2
    vars.setCF(vars.get('§DUMMYN1') * vars.get('§NR_FRANGI'));
    
    //#3
    if (vars.get('§FS_MAKI') == vars.get('§SI')) {
        vars.setLG('');
    }
    
    //#4
    if (vars.get('§FS_FAM2_FLY_R') == vars.get('§SI')) {
        vars.setDUMMYN2(vars.get('§NR_FRANGI') - 2);
    }
    
    //#5
    if (vars.get('§FS_FAM2_FLY_R') == vars.get('§SI')) {
        vars.setCF(vars.get('§DUMMYN1') * vars.get('§DUMMYN2'));
    }
    // GENERATED

    return vars.output;
};
