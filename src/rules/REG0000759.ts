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

export const REG0000759: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0000759
    // REQUEST:
    // """
    // #1
    // COND:
    // (§FS_SP_0 = §SI) OR (§FS_SP_00 = §SI) OR (§FS_SP_1 = §SI) OR (§FS_TEKA_1 = §SI) OR (§FS_TEKA_00 = §SI) OR (§FS_TEKA_0 = §SI)
    // THEN:
    // *SET *CON-A = *COL
    // *SET *CON-B = *LUNG
    // ELSE:
    // *SET *LG = ''
    // #2
    // COND:
    // §FS_SP_TECH = §SI
    // THEN:
    // *SET *CM = '010078'
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_SP_0') == vars.get('§SI') || vars.get('§FS_SP_00') == vars.get('§SI') || vars.get('§FS_SP_1') == vars.get('§SI') || vars.get('§FS_TEKA_1') == vars.get('§SI') || vars.get('§FS_TEKA_00') == vars.get('§SI') || vars.get('§FS_TEKA_0') == vars.get('§SI')) {
        vars.setCON_A(vars.getCOL());
        vars.setCON_B(vars.getLUNG());
    } else {
        vars.setLG('');
    }
    
    //#2
    if (vars.get('§FS_SP_TECH') == vars.get('§SI')) {
        vars.setCM('010078');
    }
    
    // GENERATED

    return vars.output;
};
