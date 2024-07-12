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

export const REG0005779: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0005779
    // REQUEST:
    // """
    // #1
    // COND:
    // ( §FS_DOP_MOT<>§SI ) AND ( ( §TI_AUT_VER_C<>'02' ) AND ( §TI_AUT_VER_C<>'01' ) )
    // ELSE:
    // *SET *LG=''
    // #2
    // THEN:
    // *SET *CF= [ §SUP_VELA/#100 + #170/#100 ]
    // """
    // RESPONSE:
    //#1
    if ((vars.get('§FS_DOP_MOT') != vars.get('§SI')) && ((vars.get('§TI_AUT_VER_C') != '02') && (vars.get('§TI_AUT_VER_C') != '01'))) {
    } else {
        vars.setLG('');
    }
    
    //#2
    vars.setCF(vars.get('§SUP_VELA') / 100 + 170 / 100);
    // GENERATED

    return vars.output;
};
