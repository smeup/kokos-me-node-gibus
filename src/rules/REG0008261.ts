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

export const REG0008261: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0008261
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_FAM2_ADDL=§SI
    // ELSE:
    // *SET *LG=''
    // #2
    // COND:
    // §SPOR >#0 AND §SPOR <=#100
    // THEN:
    // *SET *CF=#1
    // #3
    // COND:
    // §SPOR >#100 AND §SPOR <=#200
    // THEN:
    // *SET *CF=#1
    // #4
    // COND:
    // §SPOR >#200 AND §SPOR <=#300
    // THEN:
    // *SET *CF=#2
    // #5
    // COND:
    // §SPOR >#300 AND §SPOR <=#400
    // THEN:
    // *SET *CF=#3
    // #6
    // COND:
    // §SPOR >#400 AND §SPOR <=#500
    // THEN:
    // *SET *CF=#4
    // #7
    // COND:
    // §SPOR >#500 AND §SPOR <=#600
    // THEN:
    // *SET *CF=#5
    // #8
    // COND:
    // §SPOR >#600 AND §SPOR <=#700
    // THEN:
    // *SET *CF=#6
    // #9
    // COND:
    // §SPOR >#700 AND §SPOR <=#800
    // THEN:
    // *SET *CF=#7
    // #10
    // COND:
    // §SPOR >#800 AND §SPOR <=#900
    // THEN:
    // *SET *CF=#8
    // #11
    // COND:
    // §SPOR >#900
    // THEN:
    // *SET *CF=#9
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_FAM2_ADDL') == vars.get('§SI')) {
    } else {
        vars.setLG('');
    }
    
    //#2
    if (vars.get('§SPOR') > 0 && vars.get('§SPOR') <= 100) {
        vars.setCF(1);
    }
    
    //#3
    if (vars.get('§SPOR') > 100 && vars.get('§SPOR') <= 200) {
        vars.setCF(1);
    }
    
    //#4
    if (vars.get('§SPOR') > 200 && vars.get('§SPOR') <= 300) {
        vars.setCF(2);
    }
    
    //#5
    if (vars.get('§SPOR') > 300 && vars.get('§SPOR') <= 400) {
        vars.setCF(3);
    }
    
    //#6
    if (vars.get('§SPOR') > 400 && vars.get('§SPOR') <= 500) {
        vars.setCF(4);
    }
    
    //#7
    if (vars.get('§SPOR') > 500 && vars.get('§SPOR') <= 600) {
        vars.setCF(5);
    }
    
    //#8
    if (vars.get('§SPOR') > 600 && vars.get('§SPOR') <= 700) {
        vars.setCF(6);
    }
    
    //#9
    if (vars.get('§SPOR') > 700 && vars.get('§SPOR') <= 800) {
        vars.setCF(7);
    }
    
    //#10
    if (vars.get('§SPOR') > 800 && vars.get('§SPOR') <= 900) {
        vars.setCF(8);
    }
    
    //#11
    if (vars.get('§SPOR') > 900) {
        vars.setCF(9);
    }
    
    // GENERATED

    return vars.output;
};
