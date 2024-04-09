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

export const REG0006422: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0006422
    // REQUEST:
    // """
    // #1
    // COND:
    // §SPOR > #0
    // ELSE:
    // *SET *LG=''
    // #2
    // THEN:
    // *SET *CON-A=§VERN_1_COM
    // *SET *CON-B= [ §SPOR - #34 ]
    // *SET *CF=#2
    // #3
    // COND:
    // ( §FS_FAM2_ADDL=§SI ) AND ( §SPOR >#600 ) AND ( §FS_ADD_MUR=§SI )
    // THEN:
    // *SET *CON-A=§VERN_1_COM
    // *SET *CON-B= [ §SPOR - #34 ]
    // *SET *CF=#1
    // """
    // RESPONSE:
    //#1
    if (vars.get('§SPOR') > 0) {
    } else {
        vars.setLG("");
    }
    
    //#2
    vars.setCON_A(vars.get('§VERN_1_COM'));
    vars.setCON_B(vars.get('§SPOR') - 34);
    vars.setCF(2);
    
    //#3
    if ((vars.get('§FS_FAM2_ADDL') == vars.get('§SI')) && (vars.get('§SPOR') > 600) && (vars.get('§FS_ADD_MUR') == vars.get('§SI'))) {
        vars.setCON_A(vars.get('§VERN_1_COM'));
        vars.setCON_B(vars.get('§SPOR') - 34);
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
