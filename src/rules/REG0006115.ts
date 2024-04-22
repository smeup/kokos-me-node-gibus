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

export const REG0006115: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0006115
    // REQUEST:
    // """
    // #1
    // COND:
    // (§FS_13_QU = §SI) OR (§FS_11_QUJ = §SI) OR ( §FS_CLI_ZIP_9=§SI ) OR ( §FS_CLI_ZIP_11=§SI ) OR ( §FS_CLI_ZIP_13=§SI )          OR ( §FS_CLI_NAK=§SI )
    // THEN:
    // *SET *CON-A = 'P072'
    // ELSE:
    // *SET *LG = ''
    // #2
    // COND:
    // §VERN_ASTA = '0055' OR §VERN_ASTA = '0053'
    // THEN:
    // *SET *CON-A = 'P055'
    // """
    // RESPONSE:
    //#1
    if ((vars.get('§FS_13_QU') == vars.get('§SI')) || (vars.get('§FS_11_QUJ') == vars.get('§SI')) || (vars.get('§FS_CLI_ZIP_9') == vars.get('§SI')) || (vars.get('§FS_CLI_ZIP_11') == vars.get('§SI')) || (vars.get('§FS_CLI_ZIP_13') == vars.get('§SI')) || (vars.get('§FS_CLI_NAK') == vars.get('§SI'))) {
        vars.setCON_A('P072');
    } else {
        vars.setLG('');
    }
    
    //#2
    if (vars.get('§VERN_ASTA') == '0055' || vars.get('§VERN_ASTA') == '0053') {
        vars.setCON_A('P055');
    }
    
    // GENERATED

    return vars.output;
};
