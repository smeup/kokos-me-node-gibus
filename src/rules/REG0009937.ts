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

export const REG0009937: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0009937
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §FIX_PAV = 'DX'
    // THEN:
    // *SET *CF = #1
    // #3
    // COND:
    // §FS_CLI_TWI_BG = §SI
    // ELSE:
    // *SET *LG = ''
    // #4
    // THEN:
    // *SET *CON-A = '0073'
    // #5
    // COND:
    // §VERN_PLAST = 'P053'
    // THEN:
    // *SET *CON-A = '0053'
    // #6
    // COND:
    // §VERN_PLAST = 'P055'
    // THEN:
    // *SET *CON-A = '0055'
    // #7
    // COND:
    // §VERN_PLAST = 'P069'
    // THEN:
    // *SET *CON-A = '0069'
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (vars.get('§FIX_PAV') == 'DX') {
        vars.setCF(1);
    }
    
    //#3
    if (vars.get('§FS_CLI_TWI_BG') == vars.get('§SI')) {
    } else {
        vars.setLG('');
    }
    
    //#4
    vars.setCON_A('0073');
    
    //#5
    if (vars.get('§VERN_PLAST') == 'P053') {
        vars.setCON_A('0053');
    }
    
    //#6
    if (vars.get('§VERN_PLAST') == 'P055') {
        vars.setCON_A('0055');
    }
    
    //#7
    if (vars.get('§VERN_PLAST') == 'P069') {
        vars.setCON_A('0069');
    }
    
    // GENERATED

    return vars.output;
};
