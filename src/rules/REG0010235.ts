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

export const REG0010235: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0010235
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
    // §TI_MOT_2 = '200' OR §TI_MOT_2 = '211'
    // THEN:
    // *SET §DUMMYB2 = §SI
    // #4
    // COND:
    // §TI_TES_MOT_2 = '01'
    // THEN:
    // *SET §DUMMYB2 = §SI
    // #5
    // COND:
    // §TI_TES_MOT_2 = '03'
    // THEN:
    // *SET §DUMMYB2 = §SI
    // #6
    // COND:
    // §TEC_MOT_2 = 'SOMFY_IO'
    // THEN:
    // *SET §DUMMYB2 = §SI
    // #7
    // COND:
    // §TEC_MOT_2 = 'SOMFY_RTS'
    // THEN:
    // *SET §DUMMYB2 = §SI
    // #8
    // COND:
    // §TEC_MOT_2 = 'SOMFY_STD'
    // THEN:
    // *SET §DUMMYB2 = §SI
    // #9
    // COND:
    // §DUMMYB1 = §SI AND §DUMMYB2 = §SI
    // THEN:
    // *SET *CF = #1
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setDUMMYB1('');
    vars.setDUMMYB2('');
    
    //#2
    if (vars.get('§FS_LT50') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
    } else {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    
    //#3
    if (vars.get('§TI_MOT_2') == '200' || vars.get('§TI_MOT_2') == '211') {
        vars.setDUMMYB2(vars.get('§SI'));
    }
    
    //#4
    if (vars.get('§TI_TES_MOT_2') == '01') {
        vars.setDUMMYB2(vars.get('§SI'));
    }
    
    //#5
    if (vars.get('§TI_TES_MOT_2') == '03') {
        vars.setDUMMYB2(vars.get('§SI'));
    }
    
    //#6
    if (vars.get('§TEC_MOT_2') == 'SOMFY_IO') {
        vars.setDUMMYB2(vars.get('§SI'));
    }
    
    //#7
    if (vars.get('§TEC_MOT_2') == 'SOMFY_RTS') {
        vars.setDUMMYB2(vars.get('§SI'));
    }
    
    //#8
    if (vars.get('§TEC_MOT_2') == 'SOMFY_STD') {
        vars.setDUMMYB2(vars.get('§SI'));
    }
    
    //#9
    if (vars.get('§DUMMYB1') == vars.get('§SI') && vars.get('§DUMMYB2') == vars.get('§SI')) {
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
