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

export const REG0009741: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0009741
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF  = #0
    // *SET *CON-A = §VERN_FRONTALE
    // *SET *CON-B = §L_FRO_2
    // #2
    // COND:
    // §L_FRO_2 > #0 AND §FS_CLI_TWI_BG = §SI
    // THEN:
    // *SET *CF  = #1
    // #3
    // COND:
    // §FS_CLI_TWI_BG = §SI AND §FS_TEL2_TWI = §NO
    // THEN:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setCON_A(vars.get('§VERN_FRONTALE'));
    vars.setCON_B(vars.get('§L_FRO_2'));
    
    //#2
    if (vars.get('§L_FRO_2') > 0 && vars.get('§FS_CLI_TWI_BG') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#3
    if (vars.get('§FS_CLI_TWI_BG') == vars.get('§SI') && vars.get('§FS_TEL2_TWI') == vars.get('§NO')) {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
