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

export const REG0000435: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0000435
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §FS_ZEROGRADI = §SI AND §FS_ZIP = §SI
    // THEN:
    // *SET *CON-A = 'P065'
    // *SET *CON-B = [§SPOR - #20,3]
    // *SET *CF = #2
    // #3
    // COND:
    // §FS_TEL_RUL = §SI
    // THEN:
    // *SET *LG = ''
    // #4
    // COND:
    // §FS_TEL_RUL_FRO = §SI
    // THEN:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (vars.get('§FS_ZEROGRADI') == vars.get('§SI') && vars.get('§FS_ZIP') == vars.get('§SI')) {
        vars.setCON_A('P065');
        vars.setCON_B(vars.get('§SPOR') - 20.3);
        vars.setCF(2);
    }
    
    //#3
    if (vars.get('§FS_TEL_RUL') == vars.get('§SI')) {
        vars.setLG('');
    }
    
    //#4
    if (vars.get('§FS_TEL_RUL_FRO') == vars.get('§SI')) {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
