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

export const REG0005781: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0005781
    // REQUEST:
    // """
    // #1
    // COND:
    // §TI_AUT_VER_C='02'
    // ELSE:
    // *SET *LG=''
    // #2
    // THEN:
    // *SET §DUMMYN1= [ §L_VC02 - §L_VC01 ]
    // #3
    // THEN:
    // *SET *CF= [ §SUP_VELA/#100 + #170/#100 + §DUMMYN1/#100 ]
    // """
    // RESPONSE:
    //#1
    if (vars.get('§TI_AUT_VER_C') === '02') {
    } else {
        vars.setLG('');
    }
    
    //#2
    vars.setDUMMYN1(vars.get('§L_VC02') - vars.get('§L_VC01'));
    
    //#3
    vars.setCF(vars.get('§SUP_VELA') / 100 + 170 / 100 + vars.get('§DUMMYN1') / 100);
    // GENERATED

    return vars.output;
};
