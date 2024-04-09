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

export const REG0001039: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0001039
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A = §VERN_BRACCI
    // *SET §DUMMYB1 = ''
    // *SET §DUMMYB2 = ''
    // *SET *CF = #0
    // #2
    // COND:
    // §FS_DIM_300 = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #3
    // COND:
    // §SPOR_TS >= #325
    // THEN:
    // *SET §DUMMYB2 = §SI
    // #4
    // COND:
    // §VERN_BRACCI = '0053' OR §VERN_BRACCI = '0065' OR §VERN_BRACCI = '0069' OR §VERN_BRACCI = '0073'
    // ELSE:
    // *SET §DUMMYB2 = §SI
    // #5
    // COND:
    // §DUMMYB1 = §SI AND §DUMMYB2 = §SI
    // THEN:
    // *SET *CF = #1
    // """
    // RESPONSE:
    //#1
    vars.setCON_A(vars.get('§VERN_BRACCI'));
    vars.setDUMMYB1('');
    vars.setDUMMYB2('');
    vars.setCF(0);
    
    //#2
    if (vars.get('§FS_DIM_300') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    
    //#3
    if (vars.get('§SPOR_TS') >= 325) {
        vars.setDUMMYB2(vars.get('§SI'));
    }
    
    //#4
    if (vars.get('§VERN_BRACCI') == '0053' || vars.get('§VERN_BRACCI') == '0065' || vars.get('§VERN_BRACCI') == '0069' || vars.get('§VERN_BRACCI') == '0073') {
    } else {
        vars.setDUMMYB2(vars.get('§SI'));
    }
    
    //#5
    if (vars.get('§DUMMYB1') == vars.get('§SI') && vars.get('§DUMMYB2') == vars.get('§SI')) {
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
