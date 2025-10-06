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

export const REG0004626: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0004626
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §FS_11_QUJ = §SI OR §FS_13_QU = §SI
    // THEN:
    // *SET *CF = #4
    // #3
    // COND:
    // §FS_CLI_CAB_NAK = §SI
    // THEN:
    // *SET *CF = #2
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (vars.get('§FS_11_QUJ') == vars.get('§SI') || vars.get('§FS_13_QU') == vars.get('§SI')) {
        vars.setCF(4);
    }
    
    //#3
    if (vars.get('§FS_CLI_CAB_NAK') == vars.get('§SI')) {
        vars.setCF(2);
    }
    // GENERATED

    return vars.output;
};
