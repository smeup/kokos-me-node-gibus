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

export const REG0004161: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0004161
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_TAP_FRO_LAM <> §SI
    // THEN:
    // *SET *CON-A=§VERN_PLAST
    // ELSE:
    // *SET *LG=''
    // #2
    // COND:
    // §VERN_1_COM = '0133' OR §VERN_1_COM = '0320' OR §VERN_1_COM = '0276'
    // THEN:
    // *SET *CON-A = 'P069'
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_TAP_FRO_LAM') != vars.get('§SI')) {
        vars.setCON_A(vars.get('§VERN_PLAST'));
    } else {
        vars.setLG('');
    }
    
    //#2
    if (vars.get('§VERN_1_COM') == '0133' || vars.get('§VERN_1_COM') == '0320' || vars.get('§VERN_1_COM') == '0276') {
        vars.setCON_A('P069');
    }
    
    // GENERATED

    return vars.output;
};
