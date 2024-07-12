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

export const REG0005711: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0005711
    // REQUEST:
    // """
    // #1
    // COND:
    // §L_BOMA <= #800
    // THEN:
    // *SET *CON-A='0051'
    // *SET *CON-B= §L_BOMA
    // #2
    // COND:
    // ( §L_BOMA >#800 ) AND ( §L_BOMA <= #1200 )
    // THEN:
    // *SET §DUMMYN1 = [  §L_BOMA - #600 ]
    // #3
    // COND:
    // ( §L_BOMA >#800 ) AND ( §L_BOMA <= #1200 ) AND  ( §DUMMYN1 > #290 )
    // THEN:
    // *SET *CON-A='0051'
    // *SET *CON-B=#600
    // #4
    // COND:
    // ( §L_BOMA > #1200 )
    // THEN:
    // *SET §DUMMYN1 = [ §L_BOMA - #800 ]
    // #5
    // COND:
    // ( §L_BOMA > #1200 ) AND ( §DUMMYN1 > #290 )
    // THEN:
    // *SET *CON-A='0051'
    // *SET *CON-B= #800
    // #6
    // COND:
    // ( §L_BOMA >#800 ) AND ( §L_BOMA <= #1200 ) AND  ( §DUMMYN1 < #290 )
    // THEN:
    // *SET *CON-A='0051'
    // *SET *CON-B=[ §L_BOMA - #300 ]
    // """
    // RESPONSE:
    //#1
    if (vars.get('§L_BOMA') <= 800) {
        vars.setCON_A('0051');
        vars.setCON_B(vars.get('§L_BOMA'));
    }
    
    //#2
    if ((vars.get('§L_BOMA') > 800) && (vars.get('§L_BOMA') <= 1200)) {
        vars.setDUMMYN1(vars.get('§L_BOMA') - 600);
    }
    
    //#3
    if ((vars.get('§L_BOMA') > 800) && (vars.get('§L_BOMA') <= 1200) && (vars.get('§DUMMYN1') > 290)) {
        vars.setCON_A('0051');
        vars.setCON_B(600);
    }
    
    //#4
    if (vars.get('§L_BOMA') > 1200) {
        vars.setDUMMYN1(vars.get('§L_BOMA') - 800);
    }
    
    //#5
    if ((vars.get('§L_BOMA') > 1200) && (vars.get('§DUMMYN1') > 290)) {
        vars.setCON_A('0051');
        vars.setCON_B(800);
    }
    
    //#6
    if ((vars.get('§L_BOMA') > 800) && (vars.get('§L_BOMA') <= 1200) && (vars.get('§DUMMYN1') < 290)) {
        vars.setCON_A('0051');
        vars.setCON_B(vars.get('§L_BOMA') - 300);
    }
    // GENERATED

    return vars.output;
};
