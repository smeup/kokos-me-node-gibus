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

export const REG0010189: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0010189
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §INC_COM = '01'
    // THEN:
    // *SET *CF = #1
    // #3
    // COND:
    // §INC_COM = '02'
    // THEN:
    // *SET *CF = #1
    // #4
    // COND:
    // §FS_ARG_T01 = §SI
    // THEN:
    // *SET *CF = #1
    // #5
    // COND:
    // §FS_FAM2_CLI_ZIP = §SI
    // THEN:
    // *SET *CF = #1
    // #6
    // COND:
    // §FS_FAM2_CLI_CAB = §SI
    // THEN:
    // *SET *CF = #1
    // #7
    // COND:
    // §INC_COM = '01'
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (vars.get('§INC_COM') == '01') {
        vars.setCF(1);
    }
    
    //#3
    if (vars.get('§INC_COM') == '02') {
        vars.setCF(1);
    }
    
    //#4
    if (vars.get('§FS_ARG_T01') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#5
    if (vars.get('§FS_FAM2_CLI_ZIP') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#6
    if (vars.get('§FS_FAM2_CLI_CAB') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#7
    if (vars.get('§INC_COM') == '01') {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
