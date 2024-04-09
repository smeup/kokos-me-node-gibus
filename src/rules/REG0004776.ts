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

export const REG0004776: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0004776
    // REQUEST:
    // """
    // #1
    // COND:
    // (§FS_LED_PER_SX=§SI) OR (§FS_LED_PER_DX=§SI )
    // ELSE:
    // *SET *LG=''
    // #2
    // COND:
    // ( §SPOR >=#0) AND (§SPOR <=#350 )
    // THEN:
    // *SET *CF=#0
    // #3
    // COND:
    // ( §SPOR >=#350 ) AND (§SPOR <=#430 )
    // THEN:
    // *SET *CF=#1
    // #4
    // COND:
    // ( §SPOR >=#450) AND (§SPOR <=#530 )
    // THEN:
    // *SET *CF=#0
    // #5
    // COND:
    // ( §SPOR >=#550) AND (§SPOR <=#630 )
    // THEN:
    // *SET *CF=#1
    // #6
    // COND:
    // ( §SPOR >=#650 )
    // THEN:
    // *SET *CF=#2
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_LED_PER_SX') == vars.get('§SI') || vars.get('§FS_LED_PER_DX') == vars.get('§SI')) {
    } else {
        vars.setLG('');
    }
    
    //#2
    if ((vars.get('§SPOR') >= 0) && (vars.get('§SPOR') <= 350)) {
        vars.setCF(0);
    }
    
    //#3
    if ((vars.get('§SPOR') >= 350) && (vars.get('§SPOR') <= 430)) {
        vars.setCF(1);
    }
    
    //#4
    if ((vars.get('§SPOR') >= 450) && (vars.get('§SPOR') <= 530)) {
        vars.setCF(0);
    }
    
    //#5
    if ((vars.get('§SPOR') >= 550) && (vars.get('§SPOR') <= 630)) {
        vars.setCF(1);
    }
    
    //#6
    if (vars.get('§SPOR') >= 650) {
        vars.setCF(2);
    }
    
    // GENERATED

    return vars.output;
};
