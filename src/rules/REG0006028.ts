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

export const REG0006028: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0006028
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §TI_AST = '02'
    // THEN:
    // *SET *CF = #1
    // #3
    // THEN:
    // *SET *CON-A = '0072'
    // #4
    // COND:
    // §VERN_1_COM= '0055' OR §VERN_1_COM = '0053' OR §VR_ABB = '01' OR §VR_ABB = '02'
    // THEN:
    // *SET *CON-A = '0055'
    // #5
    // COND:
    // §INC_COM = '02'
    // THEN:
    // *SET *CF = #0
    // #6
    // COND:
    // §INC_COM = '03' AND §FS_ARG_T01 = §SI
    // THEN:
    // *SET *CF = #0
    // #7
    // COND:
    // §INC_COM = '03' AND §FS_CLI_ZIP_9 <> §SI
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    //#2
    if (vars.get('§TI_AST') == '02') {
        vars.setCF(1);
    }
    //#3
    vars.setCON_A('0072');
    //#4
    if (vars.get('§VERN_1_COM') == '0055' || vars.get('§VERN_1_COM') == '0053' || vars.get('§VR_ABB') == '01' || vars.get('§VR_ABB') == '02') {
        vars.setCON_A('0055');
    }
    //#5
    if (vars.get('§INC_COM') == '02') {
        vars.setCF(0);
    }
    //#6
    if (vars.get('§INC_COM') == '03' && vars.get('§FS_ARG_T01') == vars.get('§SI')) {
        vars.setCF(0);
    }
    //#7
    if (vars.get('§INC_COM') == '03' && vars.get('§FS_CLI_ZIP_9') != vars.get('§SI')) {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
