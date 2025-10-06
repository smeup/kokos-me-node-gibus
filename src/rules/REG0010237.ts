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

export const REG0010237: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0010237
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET §DUMMYB1 = ''
    // *SET §DUMMYB2 = ''
    // #2
    // COND:
    // §FS_LT50 = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // ELSE:
    // *SET §DUMMYB1 = §SI
    // #3
    // COND:
    // §TEC_MOT_2 = 'CHERUBINI_RX'
    // THEN:
    // *SET §DUMMYB2 = §SI
    // #4
    // COND:
    // §TEC_MOT_2 = 'CHERUBINI_STD'
    // THEN:
    // *SET §DUMMYB2 = §SI
    // #5
    // COND:
    // §TEC_MOT_2 = 'CHERUBINI_WIRE'
    // THEN:
    // *SET §DUMMYB2 = §SI
    // #6
    // COND:
    // §DUMMYB1 = §SI AND §DUMMYB2 = §SI
    // THEN:
    // *SET *CF = #1
    // #7
    // COND:
    // §TI_MOT_2 = '200' OR §TI_MOT_2 = '211'
    // THEN:
    // *SET *LG = ''
    // #8
    // COND:
    // §TI_TES_MOT_2 = '01'
    // THEN:
    // *SET *LG = ''
    // #9
    // COND:
    // §TI_TES_MOT_2 = '03'
    // THEN:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setDUMMYB1("");
    vars.setDUMMYB2("");
    
    //#2
    if (vars.get('§FS_LT50') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
    } else {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    
    //#3
    if (vars.get('§TEC_MOT_2') == 'CHERUBINI_RX') {
        vars.setDUMMYB2(vars.get('§SI'));
    }
    
    //#4
    if (vars.get('§TEC_MOT_2') == 'CHERUBINI_STD') {
        vars.setDUMMYB2(vars.get('§SI'));
    }
    
    //#5
    if (vars.get('§TEC_MOT_2') == 'CHERUBINI_WIRE') {
        vars.setDUMMYB2(vars.get('§SI'));
    }
    
    //#6
    if (vars.get('§DUMMYB1') == vars.get('§SI') && vars.get('§DUMMYB2') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#7
    if (vars.get('§TI_MOT_2') == '200' || vars.get('§TI_MOT_2') == '211') {
        vars.setLG("");
    }
    
    //#8
    if (vars.get('§TI_TES_MOT_2') == '01') {
        vars.setLG("");
    }
    
    //#9
    if (vars.get('§TI_TES_MOT_2') == '03') {
        vars.setLG("");
    }
    // GENERATED

    return vars.output;
};
