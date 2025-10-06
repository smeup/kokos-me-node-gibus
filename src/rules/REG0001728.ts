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

export const REG0001728: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0001728
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET §DUMMYB1 = ''
    // *SET §DUMMYB2 = ''
    // #2
    // COND:
    // (§FS_DIM_250 = §SI) OR (§FS_DIM_300 = §SI)  OR (§FS_MAR_30_13 = §SI) OR (§FS_MAR_30_50 = §SI)  OR (§FS_MAR_35_13 = §SI)
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #3
    // COND:
    // §FS_DIM_400 = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #4
    // COND:
    // §VERN_1_COM = '0055'
    // THEN:
    // *SET §DUMMYB2 = §SI
    // #5
    // COND:
    // §VERN_1_COM = '0293'
    // THEN:
    // *SET §DUMMYB2 = §SI
    // #6
    // COND:
    // §DUMMYB1 = §SI AND §DUMMYB2 = §SI
    // THEN:
    // *SET *CF = #1
    // #7
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setDUMMYB1("");
    vars.setDUMMYB2("");
    
    //#2
    if (vars.get('§FS_DIM_250') == vars.get('§SI') || vars.get('§FS_DIM_300') == vars.get('§SI') || vars.get('§FS_MAR_30_13') == vars.get('§SI') || vars.get('§FS_MAR_30_50') == vars.get('§SI') || vars.get('§FS_MAR_35_13') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    
    //#3
    if (vars.get('§FS_DIM_400') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    
    //#4
    if (vars.get('§VERN_1_COM') == '0055') {
        vars.setDUMMYB2(vars.get('§SI'));
    }
    
    //#5
    if (vars.get('§VERN_1_COM') == '0293') {
        vars.setDUMMYB2(vars.get('§SI'));
    }
    
    //#6
    if (vars.get('§DUMMYB1') == vars.get('§SI') && vars.get('§DUMMYB2') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#7
    vars.setCF(0);
    // GENERATED

    return vars.output;
};
