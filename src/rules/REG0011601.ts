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

export const REG0011601: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0011601
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §TI_TEM_LED = #3000
    // ELSE:
    // *SET *LG = ''
    // #3
    // COND:
    // §FS_NODO = §SI
    // THEN:
    // *SET *CF = #1
    // #4
    // COND:
    // §FS_SEGNO = §SI
    // THEN:
    // *SET *CF = #1
    // #5
    // COND:
    // §FS_TXT = §SI
    // THEN:
    // *SET *CF = #1
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (vars.get('§TI_TEM_LED') == 3000) {
    } else {
        vars.setLG('');
    }
    
    //#3
    if (vars.get('§FS_NODO') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#4
    if (vars.get('§FS_SEGNO') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#5
    if (vars.get('§FS_TXT') == vars.get('§SI')) {
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
