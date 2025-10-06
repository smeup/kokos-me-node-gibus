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

export const REG0009932: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0009932
    // REQUEST:
    // """
    // #1
    // COND:
    // §COD_MOTORE <> ''
    // ELSE:
    // *SET *CF=#0
    // #2
    // COND:
    // ( §TECNOL_MOTORE = 'SOMFY_STD'  OR  §TECNOL_MOTORE = 'SOMFY_RTS' OR §TECNOL_MOTORE= 'SOMFY_IO' )
    // THEN:
    // *SET *CM='210189'
    // #3
    // COND:
    // ( §TECNOL_MOTORE = 'SOMFY_STD'  OR  §TECNOL_MOTORE = 'SOMFY_RTS' OR §TECNOL_MOTORE= 'SOMFY_IO' ) AND ( §FS_LS60=§SI )
    // THEN:
    // *SET *CM='210190'
    // #4
    // COND:
    // §TECNOL_MOTORE = 'CHERUBINI_RX'
    // THEN:
    // *SET *CM='210164'
    // #5
    // COND:
    // (§TECNOL_MOTORE = 'CHERUBINI_RX')  AND ( §FS_LS60=§SI )
    // THEN:
    // *SET *CM='210165'
    // #6
    // """
    // RESPONSE:
    Traduzione:
    //#1
    if (vars.get('§COD_MOTORE') != '') {
    } else {
        vars.setCF(0);
    }
    //#2
    if ((vars.get('§TECNOL_MOTORE') == 'SOMFY_STD') || (vars.get('§TECNOL_MOTORE') == 'SOMFY_RTS') || (vars.get('§TECNOL_MOTORE') == 'SOMFY_IO')) {
        vars.setCM('210189');
    }
    //#3
    if (((vars.get('§TECNOL_MOTORE') == 'SOMFY_STD') || (vars.get('§TECNOL_MOTORE') == 'SOMFY_RTS') || (vars.get('§TECNOL_MOTORE') == 'SOMFY_IO')) && (vars.get('§FS_LS60') == vars.get('§SI'))) {
        vars.setCM('210190');
    }
    //#4
    if (vars.get('§TECNOL_MOTORE') == 'CHERUBINI_RX') {
        vars.setCM('210164');
    }
    //#5
    if ((vars.get('§TECNOL_MOTORE') == 'CHERUBINI_RX') && (vars.get('§FS_LS60') == vars.get('§SI'))) {
        vars.setCM('210165');
    }
    //#6
    // GENERATED

    return vars.output;
};
