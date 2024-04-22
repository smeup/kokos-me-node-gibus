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

export const REG0008510: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0008510
    // REQUEST:
    // """
    // #1
    // COND:
    // §VERN_PLAST='P055'
    // THEN:
    // *SET *CON-A='0055'
    // #2
    // COND:
    // §VERN_PLAST='P053'
    // THEN:
    // *SET *CON-A='0053'
    // #3
    // COND:
    // §VERN_PLAST='P073'
    // THEN:
    // *SET *CON-A='0073'
    // #4
    // COND:
    // §VERN_PLAST='P069'
    // THEN:
    // *SET *CON-A='0069'
    // #5
    // THEN:
    // *SET *CF = #0
    // #6
    // COND:
    // §FS_CLI_ZIP_GH = §SI
    // THEN:
    // *SET *CF = #2
    // """
    // RESPONSE:
    //#1
    if (vars.get('§VERN_PLAST') == 'P055') {
        vars.setCON_A('0055');
    }
    
    //#2
    if (vars.get('§VERN_PLAST') == 'P053') {
        vars.setCON_A('0053');
    }
    
    //#3
    if (vars.get('§VERN_PLAST') == 'P073') {
        vars.setCON_A('0073');
    }
    
    //#4
    if (vars.get('§VERN_PLAST') == 'P069') {
        vars.setCON_A('0069');
    }
    
    //#5
    vars.setCF(0);
    
    //#6
    if (vars.get('§FS_CLI_ZIP_GH') == vars.get('§SI')) {
        vars.setCF(2);
    }
    
    // GENERATED

    return vars.output;
};
