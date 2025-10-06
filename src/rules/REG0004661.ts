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

export const REG0004661: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0004661
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §FS_TEL_RUL_FRO = §SI
    // THEN:
    // *SET *CF = #1
    // *SET *CON-A = §VERN_1_COM
    // *SET *CON-B = §L_FRONTALE
    // #3
    // COND:
    // §FS_TEL_RUL_FRO = §SI AND §FS_TEL_TS = §SI
    // THEN:
    // *SET *LG = ''
    // #4
    // COND:
    // §FS_RUL_58_SCR = §SI
    // THEN:
    // *SET *CON-A = '0051'
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (vars.get('§FS_TEL_RUL_FRO') == vars.get('§SI')) {
        vars.setCF(1);
        vars.setCON_A(vars.get('§VERN_1_COM'));
        vars.setCON_B(vars.get('§L_FRONTALE'));
    }
    
    //#3
    if (vars.get('§FS_TEL_RUL_FRO') == vars.get('§SI') && vars.get('§FS_TEL_TS') == vars.get('§SI')) {
        vars.setLG('');
    }
    
    //#4
    if (vars.get('§FS_RUL_58_SCR') == vars.get('§SI')) {
        vars.setCON_A('0051');
    }
    // GENERATED

    return vars.output;
};
