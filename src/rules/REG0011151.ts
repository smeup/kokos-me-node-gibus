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

export const REG0011151: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0011151
    // REQUEST:
    // """
    // #1
    // COND:
    // ( §FS_FAM2_LUCE=§SI ) OR ( §FS_FAM2_FLY_R = §SI )
    // THEN:
    // *SET *CON-A=*COL
    // *SET *CON-B=*LUNG
    // *SET *S2 = *LUNG
    // ELSE:
    // *SET *LG=''
    // """
    // RESPONSE:
    //#1
    if ((vars.get('§FS_FAM2_LUCE') == vars.get('§SI')) || (vars.get('§FS_FAM2_FLY_R') == vars.get('§SI'))) {
        vars.setCON_A(vars.getCOL());
        vars.setCON_B(vars.getLUNG());
        vars.setS2(vars.getLUNG());
    } else {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
