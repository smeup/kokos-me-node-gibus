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

export const REG0012303: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0012303
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET *CON-A = 'P072'
    // #2
    // COND:
    // §VR_ABB_FRA = '01'
    // THEN:
    // *SET *CON-A = 'P055'
    // #3
    // COND:
    // §VR_ABB_FRA = '02'
    // THEN:
    // *SET *CON-A = 'P053'
    // #4
    // THEN:
    // *SET §DUMMYN1 = [ §FRANGITRATTA ]
    // #5
    // THEN:
    // *SET §DUMMYN2 = [ §NR_FRANGI + #2 ]
    // #6
    // COND:
    // §FS_TESS_CUCITO = §SI
    // THEN:
    // *SET *CF = [ §DUMMYN1 * §DUMMYN2 / #100 ]
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setCON_A('P072');
    
    //#2
    if (vars.get('§VR_ABB_FRA') == '01') {
        vars.setCON_A('P055');
    }
    
    //#3
    if (vars.get('§VR_ABB_FRA') == '02') {
        vars.setCON_A('P053');
    }
    
    //#4
    vars.setDUMMYN1(vars.get('§FRANGITRATTA'));
    
    //#5
    vars.setDUMMYN2(vars.get('§NR_FRANGI') + 2);
    
    //#6
    if (vars.get('§FS_TESS_CUCITO') == vars.get('§SI')) {
        vars.setCF(vars.get('§DUMMYN1') * vars.get('§DUMMYN2') / 100);
    }
    // GENERATED

    return vars.output;
};
