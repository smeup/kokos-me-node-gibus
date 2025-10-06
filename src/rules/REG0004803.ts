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

export const REG0004803: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0004803
    // REQUEST:
    // """
    // #1
    // COND:
    // ( §FS_LED_PER=§SI ) OR ( §FS_LED_RGB=§SI )
    // ELSE:
    // *SET *LG=''
    // #2
    // COND:
    // ( §FS_LED_PER_FRB<>§SI ) AND ( §FS_LED_RGB_FRB<>§SI )
    // THEN:
    // *SET *CF=#0
    // #3
    // COND:
    // ( §FS_LED_PER_FRB=§SI ) OR ( §FS_LED_RGB_FRB=§SI )
    // THEN:
    // *SET *CF=#1
    // #4
    // COND:
    // ( §FS_LED_PER_FRB=§SI ) AND ( §FS_LED_RGB_FRB=§SI )
    // THEN:
    // *SET *CF=#1
    // #5
    // COND:
    // (( §FS_FAM2_TWIST=§SI ) OR ( §FS_FAM2_ZENIT=§SI )) AND ( §FS_LED_RGB_ALL=§SI ) AND ( §FS_LED_PER_ALL=§SI )
    // THEN:
    // *SET *CF=#0
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_LED_PER') == vars.get('§SI') || vars.get('§FS_LED_RGB') == vars.get('§SI')) {
        // do nothing
    } else {
        vars.setLG('');
    }
    
    //#2
    if (vars.get('§FS_LED_PER_FRB') != vars.get('§SI') && vars.get('§FS_LED_RGB_FRB') != vars.get('§SI')) {
        vars.setCF(0);
    }
    
    //#3
    if (vars.get('§FS_LED_PER_FRB') == vars.get('§SI') || vars.get('§FS_LED_RGB_FRB') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#4
    if (vars.get('§FS_LED_PER_FRB') == vars.get('§SI') && vars.get('§FS_LED_RGB_FRB') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#5
    if ((vars.get('§FS_FAM2_TWIST') == vars.get('§SI') || vars.get('§FS_FAM2_ZENIT') == vars.get('§SI')) && vars.get('§FS_LED_RGB_ALL') == vars.get('§SI') && vars.get('§FS_LED_PER_ALL') == vars.get('§SI')) {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
