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

export const REG0002307: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0002307
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_MOT_MED = §SI OR §FS_MOT_CP = §SI OR §FS_TENDA_FINEST = §SI
    // THEN:
    // *SET *LG = ''
    // #2
    // COND:
    // *SET *CF = #0
    // #3
    // COND:
    // §FS_TENDA_CADUTA = §SI
    // THEN:
    // *SET *CF = #1
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_MOT_MED') == vars.get('§SI') || vars.get('§FS_MOT_CP') == vars.get('§SI') || vars.get('§FS_TENDA_FINEST') == vars.get('§SI')) {
        vars.setLG('');
    }
    
    //#2
    if (vars.getCF() == 0) {
    }
    
    //#3
    if (vars.get('§FS_TENDA_CADUTA') == vars.get('§SI')) {
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
