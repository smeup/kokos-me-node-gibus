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

export const REG0003680: Rule = (iv) => {

    const vars = new Variables(iv);
    
    // GENERATED
    // RULE: REG0003680
    // REQUEST:
    // """
    // #1
    // COND:
    // (( §FS_FAM2_QUADRA=§SI ) AND (( §FS_MED_ACCOPP <> §SI ) OR (( §FS_MED_ACCOPP=§SI ) AND ( §TI_ACC_MED = '03' ))))
    // ELSE:
    // *SET *LG=''
    // #2
    // COND:
    // ( §FS_MED_ACCOPP=§SI ) AND ((§TI_ACC_MED = '01' ) OR ( §TI_ACC_MED = '02' ))
    // THEN:
    // *SET *LG=''
    // """
    // RESPONSE:
    //#1
    if ((vars.get('§FS_FAM2_QUADRA') == vars.get('§SI')) && ((vars.get('§FS_MED_ACCOPP') != vars.get('§SI')) || ((vars.get('§FS_MED_ACCOPP') == vars.get('§SI')) && (vars.get('§TI_ACC_MED') == '03')))) {
        //
    } else {
        vars.setLG('');
    }
    //#2
    if ((vars.get('§FS_MED_ACCOPP') == vars.get('§SI')) && ((vars.get('§TI_ACC_MED') == '01') || (vars.get('§TI_ACC_MED') == '02'))) {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
