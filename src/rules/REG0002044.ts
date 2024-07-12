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

export const REG0002044: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0002044
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET §DUMMYB1 = ''
    // #2
    // COND:
    // §FS_SEGNO = §SI OR §COD_MOD_CAM = 'TS0012'
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #3
    // COND:
    // §FS_TXT = §SI OR §COD_MOD_CAM = 'TS0098'
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #4
    // COND:
    // §DUMMYB1 = §SI
    // THEN:
    // *SET *CF = #1
    // *SET *CON-A = *COL
    // *SET *CON-B = *LUNG
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setDUMMYB1('');
    
    //#2
    if (vars.get('§FS_SEGNO') == vars.get('§SI') || vars.get('§COD_MOD_CAM') == 'TS0012') {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    
    //#3
    if (vars.get('§FS_TXT') == vars.get('§SI') || vars.get('§COD_MOD_CAM') == 'TS0098') {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    
    //#4
    if (vars.get('§DUMMYB1') == vars.get('§SI')) {
        vars.setCF(1);
        vars.setCON_A(vars.getCOL());
        vars.setCON_B(vars.getLUNG());
    }
    // GENERATED

    return vars.output;
};
