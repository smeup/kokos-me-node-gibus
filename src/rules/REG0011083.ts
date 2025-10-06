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

export const REG0011083: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0011083
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET *CON-A = *COL
    // *SET *CON-B = *LUNG
    // #2
    // COND:
    // §FS_FAM2_TWIST = §SI
    // THEN:
    // *SET *CF = #1
    // #3
    // THEN:
    // *SET *CON-A = §VERN_1_COM
    // #4
    // COND:
    // §VERN_1_COM = '0055'
    // THEN:
    // *SET *CON-A = '0227'
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setCON_A(vars.get('*COL'));
    vars.setCON_B(vars.get('*LUNG'));
    
    //#2
    if (vars.get('§FS_FAM2_TWIST') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#3
    vars.setCON_A(vars.get('§VERN_1_COM'));
    
    //#4
    if (vars.get('§VERN_1_COM') == '0055') {
        vars.setCON_A('0227');
    }
    // GENERATED

    return vars.output;
};
