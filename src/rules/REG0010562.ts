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

export const REG0010562: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0010562
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_APERTURA_CEN = §SI AND (§VE_BL_CE = 'B1' OR §VE_BL_CE = 'B2')
    // THEN:
    // *SET *CF = [ §VE_PANN_SCROC + #1 ]
    // ELSE:
    // *SET *CF = §VE_PANN_SCROC
    // #2
    // THEN:
    // *SET *CON-A = §VERN_1_COM
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_APERTURA_CEN') == vars.get('§SI') && (vars.get('§VE_BL_CE') == 'B1' || vars.get('§VE_BL_CE') == 'B2')) {
        vars.setCF(vars.get('§VE_PANN_SCROC') + 1);
    } else {
        vars.setCF(vars.get('§VE_PANN_SCROC'));
    }
    
    //#2
    vars.setCON_A(vars.get('§VERN_1_COM'));
    // GENERATED

    return vars.output;
};
