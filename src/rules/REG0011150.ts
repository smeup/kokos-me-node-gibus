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

export const REG0011150: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0011150
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_FAM2_165=§SI
    // THEN:
    // *SET *CON-A=*COL
    // *SET *CON-B=*LUNG
    // *SET *S2 = *LUNG
    // ELSE:
    // *SET *LG=''
    // #2
    // COND:
    // §FS_ANT4_T02 = §SI
    // THEN:
    // *SET *CF = 0
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_FAM2_165') == vars.get('§SI')) {
        vars.setCON_A(vars.getCOL());
        vars.setCON_B(vars.getLUNG());
        vars.setS2(vars.getLUNG());
    } else {
        vars.setLG('');
    }
    
    //#2
    if (vars.get('§FS_ANT4_T02') == vars.get('§SI')) {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
