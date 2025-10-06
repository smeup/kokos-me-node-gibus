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

export const REG0004663: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0004663
    // REQUEST:
    // """
    // #1
    // COND:
    // ((§FS_FAM2_ADDL=§SI ) OR (§FS_FAM2_ADDF=§SI ) OR (§FS_FAM2_ISOLA=§SI)) AND (§FS_LED<>§SI) AND (§FS_LED_PER<>§SI)              AND (§FS_LED_RGB<>§SI)
    // THEN:
    // *SET *CF=#14
    // #2
    // COND:
    // ((§FS_FAM2_ADDL=§SI ) OR (§FS_FAM2_ADDF=§SI ) OR ( §FS_FAM2_ISOLA=§SI )) AND ((§FS_LED=§SI) OR (§FS_LED_PER=§SI)              OR (§FS_LED_RGB=§SI))
    // THEN:
    // *SET *CF=#26
    // """
    // RESPONSE:
    //#1
    if ((vars.get('§FS_FAM2_ADDL') == vars.get('§SI') || vars.get('§FS_FAM2_ADDF') == vars.get('§SI') || vars.get('§FS_FAM2_ISOLA') == vars.get('§SI')) && vars.get('§FS_LED') != vars.get('§SI') && vars.get('§FS_LED_PER') != vars.get('§SI') && vars.get('§FS_LED_RGB') != vars.get('§SI')) {
        vars.setCF(14);
    }
    
    //#2
    if ((vars.get('§FS_FAM2_ADDL') == vars.get('§SI') || vars.get('§FS_FAM2_ADDF') == vars.get('§SI') || vars.get('§FS_FAM2_ISOLA') == vars.get('§SI')) && (vars.get('§FS_LED') == vars.get('§SI') || vars.get('§FS_LED_PER') == vars.get('§SI') || vars.get('§FS_LED_RGB') == vars.get('§SI'))) {
        vars.setCF(26);
    }
    // GENERATED

    return vars.output;
};
