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

export const REG0009523: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0009523
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A = §VERN_BRACCI
    // *SET *CON-B = §SPOR_TS
    // *SET *CF = #0
    // #2
    // THEN:
    // *SET §DUMMYB1 =  ''
    // *SET §DUMMYB2 =  ''
    // #3
    // COND:
    // §FS_TXT = §SI
    // THEN:
    // *SET §DUMMYB1 =  §SI
    // #4
    // COND:
    // §FS_OPT_VOL = §SI AND §FS_LED_FRO = §SI
    // THEN:
    // *SET §DUMMYB2 =  §SI
    // #5
    // COND:
    // §DUMMYB1 = §SI AND §DUMMYB2 = §SI
    // THEN:
    // *SET *CF = #1
    // #6
    // COND:
    // §VER_BRA_T01 = '2021'
    // THEN:
    // *SET *CF = #0
    // #7
    // COND:
    // §FS_TXT = §SI
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    vars.setCON_A(vars.get('§VERN_BRACCI'));
    vars.setCON_B(vars.get('§SPOR_TS'));
    vars.setCF(0);
    
    //#2
    vars.setDUMMYB1('');
    vars.setDUMMYB2('');
    
    //#3
    if (vars.get('§FS_TXT') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    
    //#4
    if (vars.get('§FS_OPT_VOL') == vars.get('§SI') && vars.get('§FS_LED_FRO') == vars.get('§SI')) {
        vars.setDUMMYB2(vars.get('§SI'));
    }
    
    //#5
    if (vars.get('§DUMMYB1') == vars.get('§SI') && vars.get('§DUMMYB2') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#6
    if (vars.get('§VER_BRA_T01') == '2021') {
        vars.setCF(0);
    }
    
    //#7
    if (vars.get('§FS_TXT') == vars.get('§SI')) {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
