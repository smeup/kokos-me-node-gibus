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

export const REG0006097: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0006097
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_CLI_ZIP_TWI=§SI OR §FS_CLI_TWI_BG = §SI
    // THEN:
    // *SET *CF= [ §L_CHI_CAS / #100 * #2 ]
    // ELSE:
    // *SET *LG=''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_CLI_ZIP_TWI') == vars.get('§SI') || vars.get('§FS_CLI_TWI_BG') == vars.get('§SI')) {
        vars.setCF(vars.get('§L_CHI_CAS') / 100 * 2);
    } else {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
