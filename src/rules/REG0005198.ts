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

export const REG0005198: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0005198
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §PER_1_L_TET_1 > #0 AND §FS_TET_PER_50 = §SI
    // THEN:
    // *SET *CON-A = 'P072'
    // *SET *CON-B = §PER_1_L_TET_1
    // *SET *CF = #1
    // #3
    // COND:
    // §VR_ABB = '01'
    // THEN:
    // *SET *CON-A = 'P055'
    // #4
    // COND:
    // §VR_ABB = '02'
    // THEN:
    // *SET *CON-A = 'P053'
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (vars.get('§PER_1_L_TET_1') > 0 && vars.get('§FS_TET_PER_50') == vars.get('§SI')) {
        vars.setCON_A('P072');
        vars.setCON_B(vars.get('§PER_1_L_TET_1'));
        vars.setCF(1);
    }
    
    //#3
    if (vars.get('§VR_ABB') == '01') {
        vars.setCON_A('P055');
    }
    
    //#4
    if (vars.get('§VR_ABB') == '02') {
        vars.setCON_A('P053');
    }
    // GENERATED

    return vars.output;
};
