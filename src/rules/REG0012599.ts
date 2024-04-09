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

export const REG0012599: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0012599
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §FS_CLI_ZIP_9 = §SI AND ( §POS_COMANDO_QU = 'C' OR  §POS_COMANDO_QU = 'D')
    // THEN:
    // *SET *CF = #1
    // #3
    // COND:
    // §FS_CLI_ZIP_11 = §SI AND ( §POS_COMANDO_QU = 'A' OR  §POS_COMANDO_QU = 'B')
    // THEN:
    // *SET *CF = #1
    // #4
    // COND:
    // §FS_CLI_CAB_11 = §SI AND ( §POS_COMANDO_QU = 'A' OR  §POS_COMANDO_QU = 'B')
    // THEN:
    // *SET *CF = #1
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (vars.get('§FS_CLI_ZIP_9') == vars.get('§SI') && (vars.get('§POS_COMANDO_QU') == 'C' || vars.get('§POS_COMANDO_QU') == 'D')) {
        vars.setCF(1);
    }
    
    //#3
    if (vars.get('§FS_CLI_ZIP_11') == vars.get('§SI') && (vars.get('§POS_COMANDO_QU') == 'A' || vars.get('§POS_COMANDO_QU') == 'B')) {
        vars.setCF(1);
    }
    
    //#4
    if (vars.get('§FS_CLI_CAB_11') == vars.get('§SI') && (vars.get('§POS_COMANDO_QU') == 'A' || vars.get('§POS_COMANDO_QU') == 'B')) {
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
