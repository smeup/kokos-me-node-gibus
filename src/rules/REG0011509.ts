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

export const REG0011509: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0011509
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET §DUMMYB1 = ''
    // #2
    // COND:
    // §FS_FAM2_VIVA = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #3
    // COND:
    // §FS_FAM2_QUADRA = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #4
    // COND:
    // §FS_FAM2_WALL = §SI
    // THEN:
    // *SET §DUMMYB1 = ''
    // #5
    // THEN:
    // *SET §DUMMYN1 = #0
    // *SET §DUMMYN2 = #0
    // *SET §DUMMYN3 = #0
    // *SET §DUMMYN4 = #0
    // #6
    // THEN:
    // *SET §DUMMYB2 = ''
    // #7
    // COND:
    // §DUMMYB1 = §SI AND §FS_MON_ANT1 = §SI
    // THEN:
    // *SET §DUMMYB2 = §SI
    // #8
    // COND:
    // §L_SPO_MON_ANT1 > #0
    // THEN:
    // *SET §DUMMYB2 = ''
    // #9
    // COND:
    // §DUMMYB2 = §SI
    // THEN:
    // *SET §DUMMYN1 = #1
    // #10
    // THEN:
    // *SET §DUMMYB2 = ''
    // #11
    // COND:
    // §DUMMYB1 = §SI AND §FS_MON_ANT2 = §SI
    // THEN:
    // *SET §DUMMYB2 = §SI
    // #12
    // COND:
    // §L_SPO_MON_ANT2  > #0
    // THEN:
    // *SET §DUMMYB2 = ''
    // #13
    // COND:
    // §DUMMYB2 = §SI
    // THEN:
    // *SET §DUMMYN2 = #1
    // #14
    // THEN:
    // *SET §DUMMYB2 = ''
    // #15
    // COND:
    // §DUMMYB1 = §SI AND §FS_MON_ANT3 = §SI
    // THEN:
    // *SET §DUMMYB2 = §SI
    // #16
    // COND:
    // §L_SPO_MON_ANT3  > #0
    // THEN:
    // *SET §DUMMYB2 = ''
    // #17
    // COND:
    // §DUMMYB2 = §SI
    // THEN:
    // *SET §DUMMYN3 = #1
    // #18
    // THEN:
    // *SET §DUMMYB2 = ''
    // #19
    // COND:
    // §DUMMYB1 = §SI AND §FS_MON_ANT4 = §SI
    // THEN:
    // *SET §DUMMYB2 = §SI
    // #20
    // COND:
    // §L_SPO_MON_ANT4  > #0
    // THEN:
    // *SET §DUMMYB2 = ''
    // #21
    // COND:
    // §DUMMYB2 = §SI
    // THEN:
    // *SET §DUMMYN4 = #1
    // #22
    // COND:
    // §DUMMYB1 = §SI
    // THEN:
    // *SET *CF = [ §DUMMYN1 + §DUMMYN2 + §DUMMYN3 + §DUMMYN4 ]
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setDUMMYB1('');
    
    //#2
    if (vars.get('§FS_FAM2_VIVA') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    
    //#3
    if (vars.get('§FS_FAM2_QUADRA') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    
    //#4
    if (vars.get('§FS_FAM2_WALL') == vars.get('§SI')) {
        vars.setDUMMYB1('');
    }
    
    //#5
    vars.setDUMMYN1(0);
    vars.setDUMMYN2(0);
    vars.setDUMMYN3(0);
    vars.setDUMMYN4(0);
    
    //#6
    vars.setDUMMYB2('');
    
    //#7
    if (vars.get('§DUMMYB1') == vars.get('§SI') && vars.get('§FS_MON_ANT1') == vars.get('§SI')) {
        vars.setDUMMYB2(vars.get('§SI'));
    }
    
    //#8
    if (vars.get('§L_SPO_MON_ANT1') > 0) {
        vars.setDUMMYB2('');
    }
    
    //#9
    if (vars.get('§DUMMYB2') == vars.get('§SI')) {
        vars.setDUMMYN1(1);
    }
    
    //#10
    vars.setDUMMYB2('');
    
    //#11
    if (vars.get('§DUMMYB1') == vars.get('§SI') && vars.get('§FS_MON_ANT2') == vars.get('§SI')) {
        vars.setDUMMYB2(vars.get('§SI'));
    }
    
    //#12
    if (vars.get('§L_SPO_MON_ANT2') > 0) {
        vars.setDUMMYB2('');
    }
    
    //#13
    if (vars.get('§DUMMYB2') == vars.get('§SI')) {
        vars.setDUMMYN2(1);
    }
    
    //#14
    vars.setDUMMYB2('');
    
    //#15
    if (vars.get('§DUMMYB1') == vars.get('§SI') && vars.get('§FS_MON_ANT3') == vars.get('§SI')) {
        vars.setDUMMYB2(vars.get('§SI'));
    }
    
    //#16
    if (vars.get('§L_SPO_MON_ANT3') > 0) {
        vars.setDUMMYB2('');
    }
    
    //#17
    if (vars.get('§DUMMYB2') == vars.get('§SI')) {
        vars.setDUMMYN3(1);
    }
    
    //#18
    vars.setDUMMYB2('');
    
    //#19
    if (vars.get('§DUMMYB1') == vars.get('§SI') && vars.get('§FS_MON_ANT4') == vars.get('§SI')) {
        vars.setDUMMYB2(vars.get('§SI'));
    }
    
    //#20
    if (vars.get('§L_SPO_MON_ANT4') > 0) {
        vars.setDUMMYB2('');
    }
    
    //#21
    if (vars.get('§DUMMYB2') == vars.get('§SI')) {
        vars.setDUMMYN4(1);
    }
    
    //#22
    if (vars.get('§DUMMYB1') == vars.get('§SI')) {
        vars.setCF(vars.get('§DUMMYN1') + vars.get('§DUMMYN2') + vars.get('§DUMMYN3') + vars.get('§DUMMYN4'));
    }
    // GENERATED

    return vars.output;
};
