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

export const REG0009528: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0009528
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET §DUMMYB1 = ''
    // *SET *CON-A = §VERN_1_COM
    // #2
    // COND:
    // §FS_CLI_TWI_BG = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // *SET *CF = #2
    // #3
    // COND:
    // §DUMMYB1 = §SI AND §FIX_PAV = 'SX'
    // THEN:
    // *SET *CF = #1
    // #4
    // COND:
    // §DUMMYB1 = §SI AND §FIX_PAV = 'DX'
    // THEN:
    // *SET *CF = #1
    // #5
    // COND:
    // §DUMMYB1 = §SI AND §FIX_PAV = 'DX+SX'
    // THEN:
    // *SET *CF = #0
    // #6
    // COND:
    // §VERN_PLAST='P055'
    // THEN:
    // *SET *CON-A='0055'
    // #7
    // COND:
    // §VERN_PLAST='P053'
    // THEN:
    // *SET *CON-A='0053'
    // #8
    // COND:
    // §VERN_PLAST='P073'
    // THEN:
    // *SET *CON-A='0073'
    // #9
    // COND:
    // §VERN_PLAST='P069'
    // THEN:
    // *SET *CON-A='0069'
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setDUMMYB1('');
    vars.setCON_A(vars.get('§VERN_1_COM'));
    
    //#2
    if (vars.get('§FS_CLI_TWI_BG') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
        vars.setCF(2);
    }
    
    //#3
    if (vars.get('§DUMMYB1') == vars.get('§SI') && vars.get('§FIX_PAV') == 'SX') {
        vars.setCF(1);
    }
    
    //#4
    if (vars.get('§DUMMYB1') == vars.get('§SI') && vars.get('§FIX_PAV') == 'DX') {
        vars.setCF(1);
    }
    
    //#5
    if (vars.get('§DUMMYB1') == vars.get('§SI') && vars.get('§FIX_PAV') == 'DX+SX') {
        vars.setCF(0);
    }
    
    //#6
    if (vars.get('§VERN_PLAST') == 'P055') {
        vars.setCON_A('0055');
    }
    
    //#7
    if (vars.get('§VERN_PLAST') == 'P053') {
        vars.setCON_A('0053');
    }
    
    //#8
    if (vars.get('§VERN_PLAST') == 'P073') {
        vars.setCON_A('0073');
    }
    
    //#9
    if (vars.get('§VERN_PLAST') == 'P069') {
        vars.setCON_A('0069');
    }
    
    // GENERATED

    return vars.output;
};
