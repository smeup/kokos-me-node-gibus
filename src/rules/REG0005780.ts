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

export const REG0005780: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0005780
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_DOP_MOT=§SI
    // ELSE:
    // *SET *LG=''
    // #2
    // THEN:
    // *SET §DUMMYN1= [ §SUP_VELA/#2 ]
    // #3
    // THEN:
    // *SET *CF= [ §DUMMYN1/#100 + #170/#100 ]
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_DOP_MOT') == vars.get('§SI')) {
    } else {
        vars.setLG("");
    }
    
    //#2
    vars.setDUMMYN1(vars.get('§SUP_VELA') / 2);
    
    //#3
    vars.setCF(vars.get('§DUMMYN1') / 100 + 170 / 100);
    // GENERATED

    return vars.output;
};
