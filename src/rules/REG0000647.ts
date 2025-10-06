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

export const REG0000647: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0000647
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_FAM2_TOLO = §SI
    // THEN:
    // *SET *CON-A = §VERN_PLAST
    // ELSE:
    // *SET *LG = ''
    // #2
    // THEN:
    // *SET *CF = #0
    // #3
    // COND:
    // (§TEST_AFFIANC = 'SX') OR (§TEST_AFFIANC = 'DX')
    // THEN:
    // *SET *CF = #1
    // #4
    // COND:
    // §TEST_AFFIANC = 'DX_SX'
    // THEN:
    // *SET *CF = #2
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_FAM2_TOLO') == vars.get('§SI')) {
        vars.setCON_A(vars.get('§VERN_PLAST'));
    } else {
        vars.setLG('');
    }
    
    //#2
    vars.setCF(0);
    
    //#3
    if ((vars.get('§TEST_AFFIANC') == 'SX') || (vars.get('§TEST_AFFIANC') == 'DX')) {
        vars.setCF(1);
    }
    
    //#4
    if (vars.get('§TEST_AFFIANC') == 'DX_SX') {
        vars.setCF(2);
    }
    // GENERATED

    return vars.output;
};
