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

export const REG0002399: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0002399
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §FS_13_QU = §SI  OR §FS_VERTI90_Z_BA = §SI
    // THEN:
    // *SET *CF = #1
    // #3
    // COND:
    // §FS_ZIP = §SI
    // THEN:
    // *SET *CF = #1
    // *SET *CON-A='P072'
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (vars.get('§FS_13_QU') == vars.get('§SI') || vars.get('§FS_VERTI90_Z_BA') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#3
    if (vars.get('§FS_ZIP') == vars.get('§SI')) {
        vars.setCF(1);
        vars.setCON_A('P072');
    }
    // GENERATED

    return vars.output;
};
