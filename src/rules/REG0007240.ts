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

export const REG0007240: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0007240
    // REQUEST:
    // """
    // #1
    // COND:
    // §SALVAGOCCIA > #0
    // THEN:
    // *SET *CON-A = §VERN_PLAST
    // *SET *CON-B = §SALVAGOCCIA
    // *SET *CF = §NR_SALVAGOCCIA
    // ELSE:
    // *SET *LG=''
    // #2
    // COND:
    // §FA_SAL_ALU = §SI
    // ELSE:
    // *SET *LG = ''
    // #3
    // COND:
    // §SALVAGOCCIA > #700
    // THEN:
    // *SET *CON-B = #700
    // #4
    // THEN:
    // *SET *CON-A = 'P072'
    // #5
    // COND:
    // §VERN_1_COM = '0055' OR §VR_ABB = '01'
    // THEN:
    // *SET *CON-A = 'P055'
    // #6
    // COND:
    // §VERN_1_COM = '0053' OR §VR_ABB = '02'
    // THEN:
    // *SET *CON-A = 'P053'
    // """
    // RESPONSE:
    //#1
    if (vars.get('§SALVAGOCCIA') > 0) {
        vars.setCON_A(vars.get('§VERN_PLAST'));
        vars.setCON_B(vars.get('§SALVAGOCCIA'));
        vars.setCF(vars.get('§NR_SALVAGOCCIA'));
    } else {
        vars.setLG('');
    }
    
    //#2
    if (vars.get('§FA_SAL_ALU') == vars.get('§SI')) {
    } else {
        vars.setLG('');
    }
    
    //#3
    if (vars.get('§SALVAGOCCIA') > 700) {
        vars.setCON_B(700);
    }
    
    //#4
    vars.setCON_A('P072');
    
    //#5
    if (vars.get('§VERN_1_COM') == '0055' || vars.get('§VR_ABB') == '01') {
        vars.setCON_A('P055');
    }
    
    //#6
    if (vars.get('§VERN_1_COM') == '0053' || vars.get('§VR_ABB') == '02') {
        vars.setCON_A('P053');
    }
    
    // GENERATED

    return vars.output;
};
