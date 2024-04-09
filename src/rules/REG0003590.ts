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

export const REG0003590: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0003590
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET *CON-A = §VERN_1_COM
    // #2
    // COND:
    // §SALVAGOCCIA > #0
    // THEN:
    // *SET *CON-B = §SALVAGOCCIA
    // *SET *CF = §NR_SALVAGOCCIA
    // #3
    // COND:
    // §SALVAGOCCIA > #690
    // THEN:
    // *SET *CON-B = #690
    // *SET *CF = §NR_SALVAGOCCIA
    // #4
    // THEN:
    // *SET §DUMMYB1 = ''
    // #5
    // COND:
    // §FS_FAM2_100 = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #6
    // COND:
    // §FS_FAM2_JEANS = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #7
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
    if (vars.get('§SALVAGOCCIA') > 0) {
        vars.setCON_B(vars.get('§SALVAGOCCIA'));
        vars.setCF(vars.get('§NR_SALVAGOCCIA'));
    }
    
    //#3
    if (vars.get('§SALVAGOCCIA') > 690) {
        vars.setCON_B(690);
        vars.setCF(vars.get('§NR_SALVAGOCCIA'));
    }
    
    //#4
    vars.setDUMMYB1('');
    
    //#5
    if (vars.get('§FS_FAM2_100') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    
    //#6
    if (vars.get('§FS_FAM2_JEANS') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    
    //#7
    if (vars.get('§DUMMYB1') == '') {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
