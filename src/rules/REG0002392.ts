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

export const REG0002392: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0002392
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // ( §FS_FAM2_DUETTO = §SI ) OR ( §FS_11_QUJ = §SI ) OR ( §FS_CLI_ZIP_13=§SI ) OR                                                 ( §FS_CLI_NAK=§SI )
    // THEN:
    // *SET *CF = #1
    // #3
    // COND:
    // ( §FS_CLI_ZIP_11 = §SI )
    // THEN:
    // *SET *CF = #1
    // #4
    // COND:
    // §FS_CLI_ZIP_TWI = §SI OR §FS_CLI_TWI_BG = §SI
    // THEN:
    // *SET *CF = #1
    // #5
    // COND:
    // §FS_11_0 = §SI
    // THEN:
    // *SET *CF = #1
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (vars.get('§FS_FAM2_DUETTO') == vars.get('§SI') || vars.get('§FS_11_QUJ') == vars.get('§SI') || vars.get('§FS_CLI_ZIP_13') == vars.get('§SI') || vars.get('§FS_CLI_NAK') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#3
    if (vars.get('§FS_CLI_ZIP_11') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#4
    if (vars.get('§FS_CLI_ZIP_TWI') == vars.get('§SI') || vars.get('§FS_CLI_TWI_BG') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#5
    if (vars.get('§FS_11_0') == vars.get('§SI')) {
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
