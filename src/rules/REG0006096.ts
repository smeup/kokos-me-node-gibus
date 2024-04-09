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

export const REG0006096: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0006096
    // REQUEST:
    // """
    // #1
    // COND:
    // §L_CHI_CAS >#0
    // THEN:
    // *SET *CON-A=§VERN_1_COM
    // *SET *CON-B=§L_CHI_CAS
    // ELSE:
    // *SET *LG=''
    // #2
    // COND:
    // §FS_LED_CAS = §SI
    // THEN:
    // *SET *CF = #0
    // #3
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    if (vars.get('§L_CHI_CAS') > 0) {
        vars.setCON_A(vars.get('§VERN_1_COM'));
        vars.setCON_B(vars.get('§L_CHI_CAS'));
    } else {
        vars.setLG('');
    }
    
    //#2
    if (vars.get('§FS_LED_CAS') == vars.get('§SI')) {
        vars.setCF(0);
    }
    
    //#3
    vars.setCF(0);
    // GENERATED

    return vars.output;
};
