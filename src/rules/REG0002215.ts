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

export const REG0002215: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0002215
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A = 'P072'
    // *SET *CF = #0
    // *SET §DUMMYN1 = #0
    // #2
    // COND:
    // §VERN_1_COM = '0055' OR §VR_ABB = '01'
    // THEN:
    // *SET *CON-A = 'P055'
    // #3
    // COND:
    // §VERN_1_COM = '0065' OR §VERN_1_COM = '0208' OR §VERN_1_COM = '0053' OR §VERN_1_COM = '0266'
    // THEN:
    // *SET *CON-A = 'P055'
    // #4
    // COND:
    // §FS_SEGNO = §SI OR §FS_DIDUE = §SI
    // THEN:
    // *SET §DUMMYN1 = §L_GUARN_CASS
    // #5
    // COND:
    // §FS_TXT = §SI
    // THEN:
    // *SET §DUMMYN1  = [§LARG - #9,7]
    // #6
    // COND:
    // ( §FS_NODO = §SI AND §FS_CHI_PAR = §SI ) OR §FS_PRO_PAR_T01 = §SI
    // THEN:
    // *SET §DUMMYN1  = [§LARG - #28,9]
    // #7
    // COND:
    // §DUMMYN1 > #0
    // THEN:
    // *SET *CF = [§DUMMYN1 / #100]
    // """
    // RESPONSE:
    //#1
    vars.setCON_A('P072');
    vars.setCF(0);
    vars.setDUMMYN1(0);
    
    //#2
    if (vars.get('§VERN_1_COM') == '0055' || vars.get('§VR_ABB') == '01') {
        vars.setCON_A('P055');
    }
    
    //#3
    if (vars.get('§VERN_1_COM') == '0065' || vars.get('§VERN_1_COM') == '0208' || vars.get('§VERN_1_COM') == '0053' || vars.get('§VERN_1_COM') == '0266') {
        vars.setCON_A('P055');
    }
    
    //#4
    if (vars.get('§FS_SEGNO') == vars.get('§SI') || vars.get('§FS_DIDUE') == vars.get('§SI')) {
        vars.setDUMMYN1(vars.get('§L_GUARN_CASS'));
    }
    
    //#5
    if (vars.get('§FS_TXT') == vars.get('§SI')) {
        vars.setDUMMYN1(vars.get('§LARG') - 9.7);
    }
    
    //#6
    if ((vars.get('§FS_NODO') == vars.get('§SI') && vars.get('§FS_CHI_PAR') == vars.get('§SI')) || vars.get('§FS_PRO_PAR_T01') == vars.get('§SI')) {
        vars.setDUMMYN1(vars.get('§LARG') - 28.9);
    }
    
    //#7
    if (vars.get('§DUMMYN1') > 0) {
        vars.setCF(vars.get('§DUMMYN1') / 100);
    }
    
    // GENERATED

    return vars.output;
};
