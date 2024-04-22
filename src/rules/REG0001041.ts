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

export const REG0001041: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0001041
    // REQUEST:
    // """
    // #1
    // COND:
    // §SPOR_TS >= #325
    // ELSE:
    // *SET *LG = ''
    // #2
    // THEN:
    // *SET *CF = #0
    // *SET §DUMMYB1 = ''
    // *SET §DUMMYB2 = ''
    // #3
    // COND:
    // (§FS_DIDUE = §SI) OR (§FS_DIM_300 = §SI) OR (§FS_SCRIGNO_300 = §SI)
    // THEN:
    // *SET *CON-A = §VERN_BRACCI
    // *SET *CON-B = §SPOR_TS
    // *SET §DUMMYB1 = §SI
    // #4
    // COND:
    // *CON-A = '0053' OR *CON-A = '0069' OR *CON-A = '0065' OR *CON-A = '0073' OR *CON-A = '0076'
    // THEN:
    // *SET §DUMMYB2 = §SI
    // #5
    // COND:
    // §DUMMYB1 = §SI AND §DUMMYB2 = §SI
    // THEN:
    // *SET *CF = #1
    // #6
    // COND:
    // §FS_DIDUE = §SI
    // THEN:
    // *SET *CF = #0
    // #7
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    if (vars.get('§SPOR_TS') >= 325) {
    } else {
        vars.setLG('');
    }
    
    //#2
    vars.setCF(0);
    vars.setDUMMYB1('');
    vars.setDUMMYB2('');
    
    //#3
    if ((vars.get('§FS_DIDUE') == vars.get('§SI')) || (vars.get('§FS_DIM_300') == vars.get('§SI')) || (vars.get('§FS_SCRIGNO_300') == vars.get('§SI'))) {
        vars.setCON_A(vars.get('§VERN_BRACCI'));
        vars.setCON_B(vars.get('§SPOR_TS'));
        vars.setDUMMYB1(vars.get('§SI'));
    }
    
    //#4
    if (vars.getCON_A() == '0053' || vars.getCON_A() == '0069' || vars.getCON_A() == '0065' || vars.getCON_A() == '0073' || vars.getCON_A() == '0076') {
        vars.setDUMMYB2(vars.get('§SI'));
    }
    
    //#5
    if (vars.get('§DUMMYB1') == vars.get('§SI') && vars.get('§DUMMYB2') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#6
    if (vars.get('§FS_DIDUE') == vars.get('§SI')) {
        vars.setCF(0);
    }
    
    //#7
    vars.setCF(0);
    // GENERATED

    return vars.output;
};
