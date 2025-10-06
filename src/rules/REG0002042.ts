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

export const REG0002042: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0002042
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §FS_SEGNO = §SI OR §FS_DIDUE = §SI
    // THEN:
    // *SET *CF = [§LARG / #100]
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (vars.get('§FS_SEGNO') == vars.get('§SI') || vars.get('§FS_DIDUE') == vars.get('§SI')) {
        vars.setCF(vars.get('§LARG') / 100);
    }
    // GENERATED

    return vars.output;
};
