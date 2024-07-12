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

export const REG0002043: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0002043
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §L_COE_PVC_TG > #0
    // THEN:
    // *SET *CON-B = §L_COE_PVC_TG
    // *SET *CF = §N_COE_PVC
    // #3
    // COND:
    // §FS_TXT = §SI
    // THEN:
    // *SET *CF = #1
    // *SET *CON-B = [§LARG - #9,7]
    // #4
    // COND:
    // §FS_TXT = §SI AND *CON-B > #360
    // THEN:
    // *SET *CON-B = #360
    // #5
    // THEN:
    // *SET *CON-A = 'P072'
    // #6
    // COND:
    // §VR_ABB = '01'
    // THEN:
    // *SET *CON-A = 'P055'
    // #7
    // COND:
    // §VERN_1_COM = '0053'
    // THEN:
    // *SET *CON-A = 'P055'
    // #8
    // COND:
    // §VERN_1_COM = '0065' OR §VERN_1_COM = '0208'
    // THEN:
    // *SET *CON-A = 'P055'
    // #9
    // COND:
    // §VERN_1_COM = '0266' AND §FS_TXT = §SI
    // THEN:
    // *SET *CON-A = 'P055'
    // #10
    // COND:
    // §VERN_1_COM = '0266' AND §FS_TENDA_BRACCI = §SI AND §FS_CASSO_PRESEN = §SI
    // THEN:
    // *SET *CON-A = 'P055'
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (vars.get('§L_COE_PVC_TG') > 0) {
        vars.setCON_B(vars.get('§L_COE_PVC_TG'));
        vars.setCF(vars.get('§N_COE_PVC'));
    }
    
    //#3
    if (vars.get('§FS_TXT') == vars.get('§SI')) {
        vars.setCF(1);
        vars.setCON_B(vars.get('§LARG') - 9.7);
    }
    
    //#4
    if (vars.get('§FS_TXT') == vars.get('§SI') && vars.getCON_B() > 360) {
        vars.setCON_B(360);
    }
    
    //#5
    vars.setCON_A('P072');
    
    //#6
    if (vars.get('§VR_ABB') == '01') {
        vars.setCON_A('P055');
    }
    
    //#7
    if (vars.get('§VERN_1_COM') == '0053') {
        vars.setCON_A('P055');
    }
    
    //#8
    if (vars.get('§VERN_1_COM') == '0065' || vars.get('§VERN_1_COM') == '0208') {
        vars.setCON_A('P055');
    }
    
    //#9
    if (vars.get('§VERN_1_COM') == '0266' && vars.get('§FS_TXT') == vars.get('§SI')) {
        vars.setCON_A('P055');
    }
    
    //#10
    if (vars.get('§VERN_1_COM') == '0266' && vars.get('§FS_TENDA_BRACCI') == vars.get('§SI') && vars.get('§FS_CASSO_PRESEN') == vars.get('§SI')) {
        vars.setCON_A('P055');
    }
    // GENERATED

    return vars.output;
};
