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

export const REG0002200: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0002200
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF=#0
    // #2
    // COND:
    // ( §SP_GU_FRON_QU = '01') AND ( §FS_CLI_ZIP_TWI=§SI )
    // THEN:
    // *SET *CF = [ §L_SPAZ_FRONTALE / #100]
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if ((vars.get('§SP_GU_FRON_QU') == '01') && (vars.get('§FS_CLI_ZIP_TWI') == vars.get('§SI'))) {
        vars.setCF(vars.get('§L_SPAZ_FRONTALE') / 100);
    }
    // GENERATED

    return vars.output;
};
