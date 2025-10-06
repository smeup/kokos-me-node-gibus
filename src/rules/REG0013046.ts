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

export const REG0013046: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0013046
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET §DUMMYB1 = ''
    // *SET §DUMMYN1 = §AUM_SPO_T01
    // #2
    // COND:
    // §FS_FAM2_VARIA = §SI AND §DUMMYN1 > #12
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #3
    // COND:
    // §FS_FAM2_TWIST = §SI AND §DUMMYN1 > #8
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #4
    // COND:
    // §FS_FAM2_JOY = §SI AND §DUMMYN1 > #10
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #5
    // COND:
    // §DUMMYB1 = §SI
    // THEN:
    // *SET *CF = #1
    // #6
    // COND:
    // §DUMMYB1 = §SI AND §LARG > #200
    // THEN:
    // *SET *CF = #2
    // #7
    // COND:
    // §DUMMYB1 = §SI AND §LARG > #400
    // THEN:
    // *SET *CF = #3
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setDUMMYB1('');
    vars.setDUMMYN1(vars.get('§AUM_SPO_T01'));
    
    //#2
    if (vars.get('§FS_FAM2_VARIA') == vars.get('§SI') && vars.get('§DUMMYN1') > 12) {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    
    //#3
    if (vars.get('§FS_FAM2_TWIST') == vars.get('§SI') && vars.get('§DUMMYN1') > 8) {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    
    //#4
    if (vars.get('§FS_FAM2_JOY') == vars.get('§SI') && vars.get('§DUMMYN1') > 10) {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    
    //#5
    if (vars.get('§DUMMYB1') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#6
    if (vars.get('§DUMMYB1') == vars.get('§SI') && vars.get('§LARG') > 200) {
        vars.setCF(2);
    }
    
    //#7
    if (vars.get('§DUMMYB1') == vars.get('§SI') && vars.get('§LARG') > 400) {
        vars.setCF(3);
    }
    // GENERATED

    return vars.output;
};
