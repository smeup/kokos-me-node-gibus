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

export const REG0000775: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0000775
    // REQUEST:
    // """
    // #1
    // COND:
    // (§FS_SP_1 = §SI) OR (§FS_TEKA_1 = §SI)
    // THEN:
    // *SET *CON-A = §VERN_1_COM
    // *SET *CON-B = §L_BRACCETTI
    // ELSE:
    // *SET *LG = ''
    // #2
    // COND:
    // §FS_SP_TECH = §SI
    // THEN:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_SP_1') == vars.get('§SI') || vars.get('§FS_TEKA_1') == vars.get('§SI')) {
        vars.setCON_A(vars.get('§VERN_1_COM'));
        vars.setCON_B(vars.get('§L_BRACCETTI'));
    } else {
        vars.setLG('');
    }
    
    //#2
    if (vars.get('§FS_SP_TECH') == vars.get('§SI')) {
        vars.setLG('');
    }
    
    // GENERATED

    return vars.output;
};
