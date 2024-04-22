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

export const REG0012016: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0012016
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #4
    // #2
    // COND:
    // §ATTACCO_QU = 'QU06'
    // THEN:
    // *SET *CF = #8
    // #3
    // COND:
    // §FS_CLI_ZIP_GH15 = §SI
    // THEN:
    // *SET *CF = #8
    // #4
    // COND:
    // §FS_CLI_ZIP_9 = §SI
    // THEN:
    // *SET §DUMMYN1 = *CF
    // #5
    // COND:
    // §FS_CLI_ZIP_9 = §SI
    // THEN:
    // *SET *CF = [ §DUMMYN1 + #2 ]
    // """
    // RESPONSE:
    //#1
    vars.setCF(4);
    
    //#2
    if (vars.get('§ATTACCO_QU') == 'QU06') {
        vars.setCF(8);
    }
    
    //#3
    if (vars.get('§FS_CLI_ZIP_GH15') == vars.get('§SI')) {
        vars.setCF(8);
    }
    
    //#4
    if (vars.get('§FS_CLI_ZIP_9') == vars.get('§SI')) {
        vars.setDUMMYN1(vars.getCF());
    }
    
    //#5
    if (vars.get('§FS_CLI_ZIP_9') == vars.get('§SI')) {
        vars.setCF(vars.get('§DUMMYN1') + 2);
    }
    
    // GENERATED

    return vars.output;
};
