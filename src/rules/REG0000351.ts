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

export const REG0000351: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0000351
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A = 'P072'
    // #2
    // COND:
    // §VERN_1_COM = '0055' OR §VERN_1_COM = '0053' OR §VERN_1_COM = '0065' OR                                                      §VR_ABB = '01' OR §VR_ABB = '02'  OR §VERN_1_COM = '0053'
    // THEN:
    // *SET *CON-A = 'P055'
    // #3
    // THEN:
    // *SET *CF = #0
    // *SET §DUMMYN1 = #0
    // #4
    // COND:
    // §FS_DUCK = §SI
    // THEN:
    // *SET §DUMMYN1 = §L_GUARN_CASS
    // #5
    // COND:
    // §DUMMYN1 > #0
    // THEN:
    // *SET *CF = [§DUMMYN1 / #100]
    // """
    // RESPONSE:
    //#1
    vars.setCON_A('P072');
    
    //#2
    if (vars.get('§VERN_1_COM') == '0055' || vars.get('§VERN_1_COM') == '0053' || vars.get('§VERN_1_COM') == '0065' || vars.get('§VR_ABB') == '01' || vars.get('§VR_ABB') == '02' || vars.get('§VERN_1_COM') == '0053') {
        vars.setCON_A('P055');
    }
    
    //#3
    vars.setCF(0);
    vars.setDUMMYN1(0);
    
    //#4
    if (vars.get('§FS_DUCK') == vars.get('§SI')) {
        vars.setDUMMYN1(vars.get('§L_GUARN_CASS'));
    }
    
    //#5
    if (vars.get('§DUMMYN1') > 0) {
        vars.setCF(vars.get('§DUMMYN1') / 100);
    }
    // GENERATED

    return vars.output;
};
