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

export const REG0005727: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0005727
    // REQUEST:
    // """
    // #1
    // COND:
    // ( §COD_MOTORE='210054' ) OR ( §COD_MOTORE='210200' )
    // ELSE:
    // *SET *LG=''
    // #2
    // COND:
    // §COD_MOTORE='210200'
    // THEN:
    // *SET *CF=#2
    // """
    // RESPONSE:
    //#1
    if (vars.get('§COD_MOTORE') == '210054' || vars.get('§COD_MOTORE') == '210200') {
    } else {
        vars.setLG('');
    }
    
    //#2
    if (vars.get('§COD_MOTORE') == '210200') {
        vars.setCF(2);
    }
    // GENERATED

    return vars.output;
};
