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

export const REG0004447: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0004447
    // REQUEST:
    // """
    // #1
    // COND:
    // ( §LARG_M1 > #0 ) AND (§FS_FAM2_165=§SI )
    // THEN:
    // *SET *CON-A=§VERN_1_COM
    // *SET *CON-B=[§LARG_M1 - #9,2 ]
    // ELSE:
    // *SET *LG=''
    // """
    // RESPONSE:
    //#1
    if ((vars.get('§LARG_M1') > 0) && (vars.get('§FS_FAM2_165') == vars.get('§SI'))) {
        vars.setCON_A(vars.get('§VERN_1_COM'));
        vars.setCON_B(vars.get('§LARG_M1') - 9.2);
    } else {
        vars.setLG('');
    }
    
    // GENERATED

    return vars.output;
};
