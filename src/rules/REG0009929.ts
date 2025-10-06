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

export const REG0009929: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0009929
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET §DUMMYN1 = #0
    // #2
    // COND:
    // §FS_TXT = §SI
    // THEN:
    // *SET §DUMMYN1 = [§LARG - #9,7]
    // #3
    // COND:
    // §DUMMYN1 > #360
    // THEN:
    // *SET *CF = #1
    // *SET *CON-B = [§DUMMYN1 - #360]
    // #4
    // THEN:
    // *SET *CON-A = 'P072'
    // #5
    // COND:
    // §VR_ABB = '01'
    // THEN:
    // *SET *CON-A = 'P055'
    // #6
    // COND:
    // §VERN_1_COM = '0053'
    // THEN:
    // *SET *CON-A = 'P055'
    // #7
    // COND:
    // §VERN_1_COM = '0065' OR §VERN_1_COM = '0208'
    // THEN:
    // *SET *CON-A = 'P055'
    // #8
    // COND:
    // §VERN_1_COM = '0266' AND §FS_TXT = §SI
    // THEN:
    // *SET *CON-A = 'P055'
    // #9
    // COND:
    // §VERN_1_COM = '0266' AND §FS_TENDA_BRACCI = §SI AND §FS_CASSO_PRESEN = §SI
    // THEN:
    // *SET *CON-A = 'P055'
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setDUMMYN1(0);
    
    //#2
    if (vars.get('§FS_TXT') == vars.get('§SI')) {
        vars.setDUMMYN1(vars.get('§LARG') - 9.7);
    }
    
    //#3
    if (vars.get('§DUMMYN1') > 360) {
        vars.setCF(1);
        vars.setCON_B(vars.get('§DUMMYN1') - 360);
    }
    
    //#4
    vars.setCON_A('P072');
    
    //#5
    if (vars.get('§VR_ABB') == '01') {
        vars.setCON_A('P055');
    }
    
    //#6
    if (vars.get('§VERN_1_COM') == '0053') {
        vars.setCON_A('P055');
    }
    
    //#7
    if (vars.get('§VERN_1_COM') == '0065' || vars.get('§VERN_1_COM') == '0208') {
        vars.setCON_A('P055');
    }
    
    //#8
    if (vars.get('§VERN_1_COM') == '0266' && vars.get('§FS_TXT') == vars.get('§SI')) {
        vars.setCON_A('P055');
    }
    
    //#9
    if (vars.get('§VERN_1_COM') == '0266' && vars.get('§FS_TENDA_BRACCI') == vars.get('§SI') && vars.get('§FS_CASSO_PRESEN') == vars.get('§SI')) {
        vars.setCON_A('P055');
    }
    // GENERATED

    return vars.output;
};
