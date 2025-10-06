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

export const REG0000529: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0000529
    // REQUEST:
    // """
    // #1
    // COND:
    // §L_BASCULA > #0
    // THEN:
    // *SET *CON-A = §VERN_FRONTALE
    // *SET *CON-B = §L_BASCULA
    // ELSE:
    // *SET *LG = ''
    // #2
    // COND:
    // §FS_DIDUE = §SI AND §FS_TS_MET = §SI
    // THEN:
    // *SET *CON-B = [§L_BASCULA / #2]
    // *SET *CF = #2
    // """
    // RESPONSE:
    //#1
    if (vars.get('§L_BASCULA') > 0) {
        vars.setCON_A(vars.get('§VERN_FRONTALE'));
        vars.setCON_B(vars.get('§L_BASCULA'));
    } else {
        vars.setLG('');
    }
    
    //#2
    if (vars.get('§FS_DIDUE') == vars.get('§SI') && vars.get('§FS_TS_MET') == vars.get('§SI')) {
        vars.setCON_B(vars.get('§L_BASCULA') / 2);
        vars.setCF(2);
    }
    // GENERATED

    return vars.output;
};
