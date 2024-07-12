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

export const REG0006518: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0006518
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF=#0
    // #2
    // COND:
    // ( §FS_FAM2_ADDL=§SI ) AND ( §SPOR >#600 ) AND ( §FS_ADD_MUR=§SI )
    // THEN:
    // *SET *CON-A=§VERN_1_COM
    // *SET §DUMMYN1 = [ §SPOR -  #44,6 ]
    // #3
    // COND:
    // ( §FS_FAM2_ADDL=§SI ) AND ( §SPOR >#600 ) AND ( §FS_ADD_MUR=§SI )
    // THEN:
    // *SET *CON-B= [ §DUMMYN1 /#2 ]
    // *SET *CF=#2
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if ((vars.get('§FS_FAM2_ADDL') == vars.get('§SI')) && (vars.get('§SPOR') > 600) && (vars.get('§FS_ADD_MUR') == vars.get('§SI'))) {
        vars.setCON_A(vars.get('§VERN_1_COM'));
        vars.setDUMMYN1(vars.get('§SPOR') - 44.6);
    }
    
    //#3
    if ((vars.get('§FS_FAM2_ADDL') == vars.get('§SI')) && (vars.get('§SPOR') > 600) && (vars.get('§FS_ADD_MUR') == vars.get('§SI'))) {
        vars.setCON_B(vars.get('§DUMMYN1') / 2);
        vars.setCF(2);
    }
    // GENERATED

    return vars.output;
};
