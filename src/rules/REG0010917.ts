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

export const REG0010917: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0010917
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET *CON-A = §VERN_1_COM
    // #2
    // COND:
    // §FS_ZEROGRADI = §SI AND §FS_ZERO_PIU = §SI
    // THEN:
    // *SET *CF = #2
    // #3
    // COND:
    // §FS_ZEROGRADI = §SI AND §FS_ZERO_PIU = §SI AND §TI_ACCOP = '02'
    // THEN:
    // *SET *CF = #2
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setCON_A(vars.get('§VERN_1_COM'));
    
    //#2
    if (vars.get('§FS_ZEROGRADI') == vars.get('§SI') && vars.get('§FS_ZERO_PIU') == vars.get('§SI')) {
        vars.setCF(2);
    }
    
    //#3
    if (vars.get('§FS_ZEROGRADI') == vars.get('§SI') && vars.get('§FS_ZERO_PIU') == vars.get('§SI') && vars.get('§TI_ACCOP') == '02') {
        vars.setCF(2);
    }
    // GENERATED

    return vars.output;
};
