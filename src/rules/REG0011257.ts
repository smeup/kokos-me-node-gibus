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

export const REG0011257: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0011257
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET *CON-A = §VR_SALVAGOCCIA
    // #2
    // COND:
    // §SALVAGOCCIA > #690 AND §FA_SAL_ALU = §SI
    // THEN:
    // *SET *CF = §NR_SALVAGOCCIA
    // *SET *CON-B = [ §SALVAGOCCIA - #690]
    // #3
    // COND:
    // §FS_FAM2_JEANS = §SI
    // THEN:
    // *SET *CF = #0
    // #4
    // COND:
    // §FS_FAM2_100 = §SI
    // THEN:
    // *SET *CF = #0
    // #5
    // COND:
    // §FA_SALVAG_COES = §SI
    // THEN:
    // *SET *CON-A = 'P072'
    // #6
    // COND:
    // §FA_SALVAG_COES = §SI AND §VR_ABB = '01'
    // THEN:
    // *SET *CON-A = 'P055'
    // #7
    // COND:
    // §FA_SALVAG_COES = §SI AND §VR_ABB = '02'
    // THEN:
    // *SET *CON-A = 'P053'
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setCON_A(vars.get('§VR_SALVAGOCCIA'));
    
    //#2
    if (vars.get('§SALVAGOCCIA') > 690 && vars.get('§FA_SAL_ALU') == vars.get('§SI')) {
        vars.setCF(vars.get('§NR_SALVAGOCCIA'));
        vars.setCON_B(vars.get('§SALVAGOCCIA') - 690);
    }
    
    //#3
    if (vars.get('§FS_FAM2_JEANS') == vars.get('§SI')) {
        vars.setCF(0);
    }
    
    //#4
    if (vars.get('§FS_FAM2_100') == vars.get('§SI')) {
        vars.setCF(0);
    }
    
    //#5
    if (vars.get('§FA_SALVAG_COES') == vars.get('§SI')) {
        vars.setCON_A('P072');
    }
    
    //#6
    if (vars.get('§FA_SALVAG_COES') == vars.get('§SI') && vars.get('§VR_ABB') == '01') {
        vars.setCON_A('P055');
    }
    
    //#7
    if (vars.get('§FA_SALVAG_COES') == vars.get('§SI') && vars.get('§VR_ABB') == '02') {
        vars.setCON_A('P053');
    }
    // GENERATED

    return vars.output;
};
