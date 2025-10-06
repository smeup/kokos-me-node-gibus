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

export const REG0011258: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0011258
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET *CON-A = §VERN_1_COM
    // #2
    // COND:
    // §SALVAGOCCIA > #690
    // THEN:
    // *SET *CF = §NR_SALVAGOCCIA
    // *SET *CON-B = [ §SALVAGOCCIA - #690 ]
    // #3
    // THEN:
    // *SET §DUMMYB1 = ''
    // #4
    // COND:
    // §FS_FAM2_JEANS = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #5
    // COND:
    // §FS_FAM2_100 = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #6
    // COND:
    // §DUMMYB1 = ''
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setCON_A(vars.get('§VERN_1_COM'));
    
    //#2
    if (vars.get('§SALVAGOCCIA') > 690) {
        vars.setCF(vars.get('§NR_SALVAGOCCIA'));
        vars.setCON_B(vars.get('§SALVAGOCCIA') - 690);
    }
    
    //#3
    vars.setDUMMYB1('');
    
    //#4
    if (vars.get('§FS_FAM2_JEANS') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    
    //#5
    if (vars.get('§FS_FAM2_100') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    
    //#6
    if (vars.get('§DUMMYB1') == '') {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
