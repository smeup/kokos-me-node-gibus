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

export const REG0011803: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0011803
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET *CON-A = 'P072'
    // *SET *CON-B = [§LARG - #1,5]
    // #2
    // COND:
    // §VR_ABB = '01'
    // THEN:
    // *SET *CON-A = 'P055'
    // #3
    // COND:
    // §VR_ABB = '02'
    // THEN:
    // *SET *CON-A = 'P055'
    // #4
    // COND:
    // §FS_CLI_ZIP_11 = §SI AND §FS_UP = §SI
    // THEN:
    // *SET *CF = #1
    // #5
    // COND:
    // §FS_CLI_ZIP_13 = §SI AND §FS_UP = §SI
    // THEN:
    // *SET *CF = #1
    // #6
    // COND:
    // §FS_CLI_CAB_11 = §SI
    // THEN:
    // *SET *CF = #1
    // #7
    // COND:
    // §FS_CLI_CAB_13 = §SI
    // THEN:
    // *SET *CF = #1
    // #8
    // COND:
    // §FS_CLI_CAB_15GH = §SI
    // THEN:
    // *SET *CF = #1
    // #9
    // COND:
    // §FS_CLI_ZIP_GH15 = §SI
    // THEN:
    // *SET *CF = #1
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setCON_A('P072');
    vars.setCON_B(vars.get('§LARG') - 1.5);
    
    //#2
    if (vars.get('§VR_ABB') == '01') {
        vars.setCON_A('P055');
    }
    
    //#3
    if (vars.get('§VR_ABB') == '02') {
        vars.setCON_A('P055');
    }
    
    //#4
    if (vars.get('§FS_CLI_ZIP_11') == vars.get('§SI') && vars.get('§FS_UP') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#5
    if (vars.get('§FS_CLI_ZIP_13') == vars.get('§SI') && vars.get('§FS_UP') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#6
    if (vars.get('§FS_CLI_CAB_11') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#7
    if (vars.get('§FS_CLI_CAB_13') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#8
    if (vars.get('§FS_CLI_CAB_15GH') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#9
    if (vars.get('§FS_CLI_ZIP_GH15') == vars.get('§SI')) {
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
