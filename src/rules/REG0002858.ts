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

export const REG0002858: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0002858
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_FAM2_VARIA = §SI
    // THEN:
    // *SET *CON-A = *COL
    // *SET *CON-B = *LUNG
    // ELSE:
    // *SET *LG = ''
    // #2
    // COND:
    // §TI_PR_ANT1 = '02'
    // THEN:
    // *SET *CM = '010364'
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_FAM2_VARIA') == vars.get('§SI')) {
        vars.setCON_A(vars.getCOL());
        vars.setCON_B(vars.getLUNG());
    } else {
        vars.setLG('');
    }
    
    //#2
    if (vars.get('§TI_PR_ANT1') == '02') {
        vars.setCM('010364');
    }
    // GENERATED

    return vars.output;
};
