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

export const REG0003151: Rule = (iv) => {

    const vars = new Variables(iv);
    
    // GENERATED
    // RULE: REG0003151
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_COM_ARGANO=§SI
    // THEN:
    // *SET *CON-A=§VERN_1_COM
    // ELSE:
    // *SET *LG=''
    // #2
    // COND:
    // §FS_NO_TRASM=§SI
    // THEN:
    // *SET *LG=''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_COM_ARGANO') == vars.get('§SI')) {
        vars.setCON_A(vars.get('§VERN_1_COM'));
    } else {
        vars.setLG('');
    }
    //#2
    if (vars.get('§FS_NO_TRASM') == vars.get('§SI')) {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
