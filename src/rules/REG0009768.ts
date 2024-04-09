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

export const REG0009768: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0009768
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §INC_COM = '03'
    // THEN:
    // *SET *CF = #1
    // #3
    // COND:
    // §FS_CLI_ZIP_TWI = §SI
    // THEN:
    // *SET *CF = #1
    // #4
    // COND:
    // §FS_CLI_TWI_BG = §SI
    // THEN:
    // *SET *CF = #1
    // #5
    // COND:
    // §FS_ARG_T01 = §SI
    // THEN:
    // *SET *CF = #0
    // #6
    // THEN:
    // *SET *CF = #0
    // #7
    // COND:
    // §INC_COM = '01'
    // THEN:
    // *SET *CF = #1
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (vars.get('§INC_COM') == '03') {
        vars.setCF(1);
    }
    
    //#3
    if (vars.get('§FS_CLI_ZIP_TWI') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#4
    if (vars.get('§FS_CLI_TWI_BG') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#5
    if (vars.get('§FS_ARG_T01') == vars.get('§SI')) {
        vars.setCF(0);
    }
    
    //#6
    vars.setCF(0);
    
    //#7
    if (vars.get('§INC_COM') == '01') {
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
