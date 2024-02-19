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

export const REG0003139: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0003139
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF=#0
    // #2
    // COND:
    // §FS_ATT_SOFFITTO=§SI
    // THEN:
    // *SET *CF=#1
    // #3
    // COND:
    // ((§FS_ATT_SOFFITTO=§SI) AND (§FS_FAM2_100=§SI )) OR ((§FS_MED_ACCOPP=§SI) AND (( §TI_ACC_MED='02' ) OR ( §TI_ACC_MED='03' )))
    // THEN:
    // *SET *CF=#0
    // #4
    // COND:
    // ( §FS_ATT_POS_SOF=§SI ) AND ( §FS_FAM2_100=§SI )
    // THEN:
    // *SET *CF=#1
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (vars.get('§FS_ATT_SOFFITTO') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#3
    if ((vars.get('§FS_ATT_SOFFITTO') == vars.get('§SI') && vars.get('§FS_FAM2_100') == vars.get('§SI')) || (vars.get('§FS_MED_ACCOPP') == vars.get('§SI') && (vars.get('§TI_ACC_MED') == '02' || vars.get('§TI_ACC_MED') == '03'))) {
        vars.setCF(0);
    }
    
    //#4
    if ((vars.get('§FS_ATT_POS_SOF') == vars.get('§SI')) && (vars.get('§FS_FAM2_100') == vars.get('§SI'))) {
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
