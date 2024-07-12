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

export const REG0000718: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0000718
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF=#0
    // #2
    // COND:
    // (§FS_11_QUJ = §SI) OR (§FS_13_QU = §SI) OR (§FS_13_QU_GC = §SI)
    // THEN:
    // *SET *CF = [ §L_SPAZ_CAS_MOB / #100]
    // #3
    // COND:
    // §FS_CLI_ZIP_TWI=§SI
    // THEN:
    // *SET *CF =  [ §L_SPAZ_CAS_MOB / #100 * #2]
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    //#2
    if ((vars.get('§FS_11_QUJ') == vars.get('§SI')) || (vars.get('§FS_13_QU') == vars.get('§SI')) || (vars.get('§FS_13_QU_GC') == vars.get('§SI'))) {
        vars.setCF(vars.get('§L_SPAZ_CAS_MOB') / 100);
    }
    //#3
    if (vars.get('§FS_CLI_ZIP_TWI') == vars.get('§SI')) {
        vars.setCF(vars.get('§L_SPAZ_CAS_MOB') / 100 * 2);
    }
    // GENERATED

    return vars.output;
};
