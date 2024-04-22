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

export const REG0001336: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0001336
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET *CON-A = §VERN_1_COM
    // #2
    // COND:
    // §FS_ZEROGRADI = §SI AND §FS_ZERO_PIU <> §SI AND (§FS_ATT_SOFFITTO = §SI OR §FS_ATT_PARETE = §SI)
    // THEN:
    // *SET *CF = #1
    // *SET *CON-A = §VERN_1_COM
    // #3
    // COND:
    // §FS_ZEROGRADI = §SI AND §FS_ZERO_PIU = §SI
    // THEN:
    // *SET *CF = #1
    // *SET *CON-A = §VERN_1_COM
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setCON_A(vars.get('§VERN_1_COM'));
    
    //#2
    if (vars.get('§FS_ZEROGRADI') == vars.get('§SI') && vars.get('§FS_ZERO_PIU') != vars.get('§SI') && (vars.get('§FS_ATT_SOFFITTO') == vars.get('§SI') || vars.get('§FS_ATT_PARETE') == vars.get('§SI'))) {
        vars.setCF(1);
        vars.setCON_A(vars.get('§VERN_1_COM'));
    }
    
    //#3
    if (vars.get('§FS_ZEROGRADI') == vars.get('§SI') && vars.get('§FS_ZERO_PIU') == vars.get('§SI')) {
        vars.setCF(1);
        vars.setCON_A(vars.get('§VERN_1_COM'));
    }
    // GENERATED

    return vars.output;
};
