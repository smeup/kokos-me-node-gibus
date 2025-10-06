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

export const REG0003556: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0003556
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #2
    // *SET §DUMMYB1 = ''
    // *SET §DUMMYB2 = ''
    // *SET *CON-A=§VERN_PLAST
    // #2
    // COND:
    // §FS_TAP_FRO_LAM = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #3
    // COND:
    // (§FS_ATT_POS_PAR = §SI ) OR (§FS_ATT_POS_SOF = §SI )
    // THEN:
    // *SET §DUMMYB2 = §SI
    // #4
    // COND:
    // §DUMMYB1 = §SI OR §DUMMYB2 = §SI
    // THEN:
    // *SET *CF = #1
    // #5
    // COND:
    // §DUMMYB1 = §SI AND §DUMMYB2 = §SI
    // THEN:
    // *SET *CF = #0
    // #6
    // COND:
    // §VERN_1_COM = '0133' OR §VERN_1_COM = '0320' OR §VERN_1_COM = '0276'
    // THEN:
    // *SET *CON-A = 'P069'
    // """
    // RESPONSE:
    //#1
    vars.setCF(2);
    vars.setDUMMYB1("");
    vars.setDUMMYB2("");
    vars.setCON_A(vars.get('§VERN_PLAST'));
    
    //#2
    if (vars.get('§FS_TAP_FRO_LAM') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    
    //#3
    if ((vars.get('§FS_ATT_POS_PAR') == vars.get('§SI')) || (vars.get('§FS_ATT_POS_SOF') == vars.get('§SI')) ) {
        vars.setDUMMYB2(vars.get('§SI'));
    }
    
    //#4
    if (vars.get('§DUMMYB1') == vars.get('§SI') || vars.get('§DUMMYB2') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#5
    if (vars.get('§DUMMYB1') == vars.get('§SI') && vars.get('§DUMMYB2') == vars.get('§SI')) {
        vars.setCF(0);
    }
    
    //#6
    if (vars.get('§VERN_1_COM') == '0133' || vars.get('§VERN_1_COM') == '0320' || vars.get('§VERN_1_COM') == '0276') {
        vars.setCON_A('P069');
    }
    // GENERATED

    return vars.output;
};
