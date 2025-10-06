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

export const REG0000714: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0000714
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A = *COL
    // *SET *CON-B = *LUNG
    // *SET *CF = #0
    // #2
    // COND:
    // §FS_FRO_TOL = §SI
    // THEN:
    // *SET *LG = ''
    // #3
    // COND:
    // §FS_11_QUJ = §SI AND §NR_VER_FRO < #1
    // THEN:
    // *SET *CF = #1
    // #4
    // COND:
    // §FS_13_QU = §SI AND §NR_VER_FRO < #1
    // THEN:
    // *SET *CF = #1
    // #5
    // COND:
    // §FS_CHI_VAR = §SI AND §NR_VER_FRO < #1
    // THEN:
    // *SET *CF = #1
    // """
    // RESPONSE:
    //#1
    vars.setCON_A(vars.getCOL());
    vars.setCON_B(vars.getLUNG());
    vars.setCF(0);
    
    //#2
    if (vars.get('§FS_FRO_TOL') == vars.get('§SI')) {
        vars.setLG('');
    }
    
    //#3
    if (vars.get('§FS_11_QUJ') == vars.get('§SI') && vars.get('§NR_VER_FRO') < 1) {
        vars.setCF(1);
    }
    
    //#4
    if (vars.get('§FS_13_QU') == vars.get('§SI') && vars.get('§NR_VER_FRO') < 1) {
        vars.setCF(1);
    }
    
    //#5
    if (vars.get('§FS_CHI_VAR') == vars.get('§SI') && vars.get('§NR_VER_FRO') < 1) {
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
