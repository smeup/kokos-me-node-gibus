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

export const REG0007865: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0007865
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // ( §FS_FAM2_QUADRA=§SI ) OR ( §FS_FAM2_VIVA=§SI ) OR ( §FS_FAM2_LUCE=§SI ) OR ( §FS_FAM2_JEANS=§SI )
    // THEN:
    // *SET *CF = #1
    // #3
    // COND:
    // §FS_FAM2_AVIA = §SI
    // THEN:
    // *SET *CF = #1
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (vars.get('§FS_FAM2_QUADRA') == vars.get('§SI') || vars.get('§FS_FAM2_VIVA') == vars.get('§SI') || vars.get('§FS_FAM2_LUCE') == vars.get('§SI') || vars.get('§FS_FAM2_JEANS') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#3
    if (vars.get('§FS_FAM2_AVIA') == vars.get('§SI')) {
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
