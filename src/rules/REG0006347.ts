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

export const REG0006347: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0006347
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_COIBLAME_NEW=§SI
    // ELSE:
    // *SET *LG=''
    // #2
    // THEN:
    // *SET *CF=#1
    // #3
    // COND:
    // §L_BAN_FRA >#200
    // THEN:
    // *SET *CF=#1,5
    // #4
    // COND:
    // §L_BAN_FRA >#300
    // THEN:
    // *SET *CF=#2
    // #5
    // COND:
    // §L_BAN_FRA >#400
    // THEN:
    // *SET *CF=#2,5
    // #6
    // COND:
    // §L_BAN_FRA >#500
    // THEN:
    // *SET *CF=#3
    // #7
    // COND:
    // §L_BAN_FRA >#600
    // THEN:
    // *SET *CF=#3,5
    // #8
    // COND:
    // §L_BAN_FRA >#700
    // THEN:
    // *SET *CF=#4
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_COIBLAME_NEW') == vars.get('§SI')) {
    } else {
        vars.setLG("");
    }
    
    //#2
    vars.setCF(1);
    
    //#3
    if (vars.get('§L_BAN_FRA') > 200) {
        vars.setCF(1.5);
    }
    
    //#4
    if (vars.get('§L_BAN_FRA') > 300) {
        vars.setCF(2);
    }
    
    //#5
    if (vars.get('§L_BAN_FRA') > 400) {
        vars.setCF(2.5);
    }
    
    //#6
    if (vars.get('§L_BAN_FRA') > 500) {
        vars.setCF(3);
    }
    
    //#7
    if (vars.get('§L_BAN_FRA') > 600) {
        vars.setCF(3.5);
    }
    
    //#8
    if (vars.get('§L_BAN_FRA') > 700) {
        vars.setCF(4);
    }
    // GENERATED

    return vars.output;
};
