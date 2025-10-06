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

export const REG0010145: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0010145
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §FS_DYN_DX = §SI
    // THEN:
    // *SET *LG = ''
    // #3
    // COND:
    // §FS_LED_LAT_DX = §SI
    // THEN:
    // *SET *CF = [§POS_PRI_LED + #1]
    // #4
    // COND:
    // §NR_LED_LAT_DX > #0
    // THEN:
    // *SET *CF = [§PO_PRI_LED_DX + #1]
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    //#2
    if (vars.get('§FS_DYN_DX') == vars.get('§SI')) {
        vars.setLG('');
    }
    //#3
    if (vars.get('§FS_LED_LAT_DX') == vars.get('§SI')) {
        vars.setCF(vars.get('§POS_PRI_LED') + 1);
    }
    //#4
    if (vars.get('§NR_LED_LAT_DX') > 0) {
        vars.setCF(vars.get('§PO_PRI_LED_DX') + 1);
    }
    // GENERATED

    return vars.output;
};
