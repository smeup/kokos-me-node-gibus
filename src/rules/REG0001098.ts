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

export const REG0001098: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0001098
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_TF4 = §SI OR §FS_TF0G = §SI
    // THEN:
    // *SET *CON-A = '0072'
    // *SET *CF= [§LARG / #100]
    // *SET *LG = ''
    // ELSE:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_TF4') == vars.get('§SI') || vars.get('§FS_TF0G') == vars.get('§SI')) {
        vars.setCON_A('0072');
        vars.setCF(vars.get('§LARG') / 100);
        vars.setLG('');
    } else {
        vars.setLG('');
    }
    
    // GENERATED

    return vars.output;
};
