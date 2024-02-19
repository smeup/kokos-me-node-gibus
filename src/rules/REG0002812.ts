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

export const REG0002812: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0002812
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_ROLLO = §SI
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §FS_LT60 = §SI
    // THEN:
    // *SET *CF = #0
    // #3
    // COND:
    // §FS_LT40 = §SI
    // THEN:
    // *SET *CF = #0
    // #4
    // COND:
    // §FS_MOT_VEL = §SI
    // THEN:
    // *SET *CF = #1
    // #5
    // COND:
    // §FS_FAM2_TOLO = §SI
    // THEN:
    // *SET *CM = '210332'
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_ROLLO') == vars.get('§SI')) {
        vars.setCF(0);
    }
    
    //#2
    if (vars.get('§FS_LT60') == vars.get('§SI')) {
        vars.setCF(0);
    }
    
    //#3
    if (vars.get('§FS_LT40') == vars.get('§SI')) {
        vars.setCF(0);
    }
    
    //#4
    if (vars.get('§FS_MOT_VEL') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#5
    if (vars.get('§FS_FAM2_TOLO') == vars.get('§SI')) {
        vars.setCM('210332');
    }
    
    // GENERATED

    return vars.output;
};
