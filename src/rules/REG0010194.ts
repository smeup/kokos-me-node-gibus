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

export const REG0010194: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0010194
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET *CON-A = *COL
    // *SET *CON-B = *LUNG
    // #2
    // COND:
    // §FS_11_QUJ = §SI AND §NR_VER_FRO >= #1
    // THEN:
    // *SET *CF = #1
    // #3
    // COND:
    // §FS_13_QU = §SI AND §NR_VER_FRO >= #1
    // THEN:
    // *SET *CF = #1
    // #4
    // COND:
    // §FS_CHI_VAR = §SI AND §NR_VER_FRO >= #1
    // THEN:
    // *SET *CF = #1
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setCON_A(vars.getCOL());
    vars.setCON_B(vars.getLUNG());
    
    //#2
    if (vars.get('§FS_11_QUJ') == vars.get('§SI') && vars.get('§NR_VER_FRO') >= 1) {
        vars.setCF(1);
    }
    
    //#3
    if (vars.get('§FS_13_QU') == vars.get('§SI') && vars.get('§NR_VER_FRO') >= 1) {
        vars.setCF(1);
    }
    
    //#4
    if (vars.get('§FS_CHI_VAR') == vars.get('§SI') && vars.get('§NR_VER_FRO') >= 1) {
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
