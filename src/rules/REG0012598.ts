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

export const REG0012598: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0012598
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §FS_CLI_ZIP_9 = §SI AND ( §POS_COMANDO_QU = 'A' OR  §POS_COMANDO_QU = 'B')
    // THEN:
    // *SET *CF = #1
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (vars.get('§FS_CLI_ZIP_9') == vars.get('§SI') && (vars.get('§POS_COMANDO_QU') == 'A' || vars.get('§POS_COMANDO_QU') == 'B')) {
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
