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

export const REG0007939: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0007939
    // REQUEST:
    // """
    // #1
    // COND:
    // ( §SPOR >#500 )
    // ELSE:
    // *SET *LG=''
    // #2
    // COND:
    // ( §SPOR >=#500 ) AND ( §SPOR <=#600 )
    // THEN:
    // *SET *CF=#6
    // #3
    // COND:
    // ( §SPOR >=#600 ) AND ( §SPOR <=#700 )
    // THEN:
    // *SET *CF=#7
    // #4
    // COND:
    // ( §SPOR >=#700 ) AND ( §SPOR <=#800 )
    // THEN:
    // *SET *CF=#8
    // """
    // RESPONSE:
    //#1
    if (vars.get('§SPOR') > 500) {
    } else {
        vars.setLG("");
    }
    
    //#2
    if ((vars.get('§SPOR') >= 500) && (vars.get('§SPOR') <= 600)) {
        vars.setCF(6);
    }
    
    //#3
    if ((vars.get('§SPOR') >= 600) && (vars.get('§SPOR') <= 700)) {
        vars.setCF(7);
    }
    
    //#4
    if ((vars.get('§SPOR') >= 700) && (vars.get('§SPOR') <= 800)) {
        vars.setCF(8);
    }
    
    // GENERATED

    return vars.output;
};
