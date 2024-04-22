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

export const REG0006710: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0006710
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_FAM2_ZENIT =§SI
    // ELSE:
    // *SET *LG=''
    // #2
    // COND:
    // ( §LARG >#0 ) AND ( §LARG <=#100 )
    // THEN:
    // *SET *CF=#1
    // #3
    // COND:
    // ( §LARG >#100 ) AND ( §LARG <=#200 )
    // THEN:
    // *SET *CF=#2
    // #4
    // COND:
    // ( §LARG >#200 ) AND ( §LARG <=#300 )
    // THEN:
    // *SET *CF=#3
    // #5
    // COND:
    // ( §LARG >#300 ) AND ( §LARG <=#400 )
    // THEN:
    // *SET *CF=#4
    // #6
    // COND:
    // ( §LARG >#400 ) AND ( §LARG <=#500 )
    // THEN:
    // *SET *CF=#5
    // #7
    // COND:
    // ( §LARG >#500 ) AND ( §LARG <=#600 )
    // THEN:
    // *SET *CF=#6
    // #8
    // COND:
    // ( §LARG >#600 ) AND ( §LARG <=#700 )
    // THEN:
    // *SET *CF=#7
    // #9
    // COND:
    // ( §LARG >#700 ) AND ( §LARG <=#800 )
    // THEN:
    // *SET *CF=#8
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_FAM2_ZENIT') == vars.get('§SI')) {
        // do nothing
    } else {
        vars.setLG('');
    }
    
    //#2
    if ((vars.get('§LARG') > 0) && (vars.get('§LARG') <= 100)) {
        vars.setCF(1);
    }
    
    //#3
    if ((vars.get('§LARG') > 100) && (vars.get('§LARG') <= 200)) {
        vars.setCF(2);
    }
    
    //#4
    if ((vars.get('§LARG') > 200) && (vars.get('§LARG') <= 300)) {
        vars.setCF(3);
    }
    
    //#5
    if ((vars.get('§LARG') > 300) && (vars.get('§LARG') <= 400)) {
        vars.setCF(4);
    }
    
    //#6
    if ((vars.get('§LARG') > 400) && (vars.get('§LARG') <= 500)) {
        vars.setCF(5);
    }
    
    //#7
    if ((vars.get('§LARG') > 500) && (vars.get('§LARG') <= 600)) {
        vars.setCF(6);
    }
    
    //#8
    if ((vars.get('§LARG') > 600) && (vars.get('§LARG') <= 700)) {
        vars.setCF(7);
    }
    
    //#9
    if ((vars.get('§LARG') > 700) && (vars.get('§LARG') <= 800)) {
        vars.setCF(8);
    }
    // GENERATED

    return vars.output;
};
