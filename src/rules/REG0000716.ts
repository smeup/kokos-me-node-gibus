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

export const REG0000716: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0000716
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET §DUMMYN1 = #0
    // #2
    // COND:
    // (§FS_11_QUJ = §SI) OR (§FS_13_QU = §SI) OR §FS_FAM2_CLI_ZIP=§SI
    // THEN:
    // *SET *CF = [ §L_SPAZ_FRONTALE / #100]
    // #3
    // COND:
    // §SP_GU_FRON_QU <> '01'
    // THEN:
    // *SET *LG = ''
    // #4
    // COND:
    // (§FS_11_0 = §SI) OR (§FS_13_0 = §SI)
    // THEN:
    // *SET *CF = [ §L_FRONTALE / #100]
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setDUMMYN1(0);
    //#2
    if ((vars.get('§FS_11_QUJ') == vars.get('§SI')) || (vars.get('§FS_13_QU') == vars.get('§SI')) || (vars.get('§FS_FAM2_CLI_ZIP') == vars.get('§SI'))) {
        vars.setCF(vars.get('§L_SPAZ_FRONTALE') / 100);
    }
    //#3
    if (vars.get('§SP_GU_FRON_QU') != '01') {
        vars.setLG('');
    }
    //#4
    if ((vars.get('§FS_11_0') == vars.get('§SI')) || (vars.get('§FS_13_0') == vars.get('§SI'))) {
        vars.setCF(vars.get('§L_FRONTALE') / 100);
    }
    // GENERATED

    return vars.output;
};
