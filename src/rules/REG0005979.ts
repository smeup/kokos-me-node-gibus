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

export const REG0005979: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0005979
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A=*COL
    // *SET *CON-B=*LUNG
    // *SET *CF=#0
    // #2
    // COND:
    // ( §FS_CLI_ZIP_9=§SI ) OR ( §FS_CLI_ZIP_11=§SI ) OR ( §FS_CLI_ZIP_13=§SI ) OR ( §FS_CLI_NAK=§SI )
    // THEN:
    // *SET *CF=#1
    // #3
    // COND:
    // §FS_CLI_ZIP_15=§SI
    // THEN:
    // *SET *CF=#1
    // """
    // RESPONSE:
    //#1
    vars.setCON_A(vars.get('*COL'));
    vars.setCON_B(vars.get('*LUNG'));
    vars.setCF(0);
    
    //#2
    if ((vars.get('§FS_CLI_ZIP_9') == vars.get('§SI')) || (vars.get('§FS_CLI_ZIP_11') == vars.get('§SI')) || (vars.get('§FS_CLI_ZIP_13') == vars.get('§SI')) || (vars.get('§FS_CLI_NAK') == vars.get('§SI'))) {
        vars.setCF(1);
    }
    
    //#3
    if (vars.get('§FS_CLI_ZIP_15') == vars.get('§SI')) {
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
