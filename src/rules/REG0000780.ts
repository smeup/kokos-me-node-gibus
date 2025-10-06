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

export const REG0000780: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0000780
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_FAM2_SP = §SI
    // THEN:
    // *SET *CON-B = *LUNG
    // ELSE:
    // *SET *LG = ''
    // #2
    // THEN:
    // *SET *CON-A = 'P072'
    // #3
    // COND:
    // *COL = '0055' OR *COL = '0053'
    // THEN:
    // *SET *CON-A = 'P055'
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_FAM2_SP') == vars.get('§SI')) {
        vars.setCON_B(vars.getLUNG());
    } else {
        vars.setLG('');
    }
    //#2
    vars.setCON_A('P072');
    //#3
    if (vars.getCOL() == '0055' || vars.getCOL() == '0053') {
        vars.setCON_A('P055');
    }
    // GENERATED

    return vars.output;
};
