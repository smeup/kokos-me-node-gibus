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

export const REG0000732: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0000732
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET *CON-A = §VERN_PLAST
    // #2
    // COND:
    // §FS_11_QUJ = §SI AND §NR_VER_FRO < #1
    // THEN:
    // *SET *CF = #1
    // #3
    // COND:
    // §FS_TEL_RUL_FRO = §SI AND §TI_FRO = '02'
    // THEN:
    // *SET *CF = #1
    // #4
    // COND:
    // §FS_FRO_TOL = §SI
    // THEN:
    // *SET *LG = ''
    // #5
    // COND:
    // §FS_13_QU = §SI AND §NR_VER_FRO < #1
    // THEN:
    // *SET *CF = #1
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setCON_A(vars.get('§VERN_PLAST'));
    
    //#2
    if (vars.get('§FS_11_QUJ') == vars.get('§SI') && vars.get('§NR_VER_FRO') < 1) {
        vars.setCF(1);
    }
    
    //#3
    if (vars.get('§FS_TEL_RUL_FRO') == vars.get('§SI') && vars.get('§TI_FRO') == '02') {
        vars.setCF(1);
    }
    
    //#4
    if (vars.get('§FS_FRO_TOL') == vars.get('§SI')) {
        vars.setLG('');
    }
    
    //#5
    if (vars.get('§FS_13_QU') == vars.get('§SI') && vars.get('§NR_VER_FRO') < 1) {
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
