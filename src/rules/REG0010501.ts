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

export const REG0010501: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0010501
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET *CON-A = 'P072'
    // #2
    // COND:
    // §FS_FAM2_ZENIT = §SI OR §FS_FAM2_TWIST = §SI
    // THEN:
    // *SET *CF = [*LUNG / #100]
    // #3
    // COND:
    // §VERN_PLAST = 'P055'
    // THEN:
    // *SET *CON-A = §VERN_PLAST
    // #4
    // COND:
    // §VERN_PLAST = 'P053'
    // THEN:
    // *SET *CON-A = §VERN_PLAST
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setCON_A('P072');
    
    //#2
    if (vars.get('§FS_FAM2_ZENIT') == vars.get('§SI') || vars.get('§FS_FAM2_TWIST') == vars.get('§SI')) {
        vars.setCF(vars.get('§LUNG') / 100);
    }
    
    //#3
    if (vars.get('§VERN_PLAST') == 'P055') {
        vars.setCON_A(vars.get('§VERN_PLAST'));
    }
    
    //#4
    if (vars.get('§VERN_PLAST') == 'P053') {
        vars.setCON_A(vars.get('§VERN_PLAST'));
    }
    // GENERATED

    return vars.output;
};
