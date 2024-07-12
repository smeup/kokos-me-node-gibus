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

export const REG0012442: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0012442
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §FS_FAM2_100 = §SI AND §VER_STA_T01 = '2021'
    // THEN:
    // *SET *CF = [ §N_MODULI ]
    // #3
    // COND:
    // §FS_FAM2_JEANS = §SI AND §VER_STA_T01 = '2021'
    // THEN:
    // *SET *CF = [ §N_MODULI ]
    // #4
    // COND:
    // §VERN_1_COM <> ''
    // THEN:
    // *SET *CON-A = §VERN_1_COM
    // #5
    // COND:
    // §VR_PROF_TET <> ''
    // THEN:
    // *SET *CON-A = §VR_PROF_TET
    // #6
    // COND:
    // §VR_TRA_TET <> ''
    // THEN:
    // *SET *CON-A = §VR_TRA_TET
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (vars.get('§FS_FAM2_100') == vars.get('§SI') && vars.get('§VER_STA_T01') == '2021') {
        vars.setCF(vars.get('§N_MODULI'));
    }
    
    //#3
    if (vars.get('§FS_FAM2_JEANS') == vars.get('§SI') && vars.get('§VER_STA_T01') == '2021') {
        vars.setCF(vars.get('§N_MODULI'));
    }
    
    //#4
    if (vars.get('§VERN_1_COM') !== '') {
        vars.setCON_A(vars.get('§VERN_1_COM'));
    }
    
    //#5
    if (vars.get('§VR_PROF_TET') !== '') {
        vars.setCON_A(vars.get('§VR_PROF_TET'));
    }
    
    //#6
    if (vars.get('§VR_TRA_TET') !== '') {
        vars.setCON_A(vars.get('§VR_TRA_TET'));
    }
    // GENERATED

    return vars.output;
};
