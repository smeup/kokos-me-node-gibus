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

export const REG0001320: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0001320
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §FS_NICCHIA = §SI
    // THEN:
    // *SET *CF = #4
    // *SET *CON-A = §VERN_CASSONETTO
    // #3
    // COND:
    // §FS_NICCHIA = §SI AND §SPOR > #300
    // THEN:
    // *SET *CF = #6
    // *SET *CON-A = §VERN_CASSONETTO
    // #4
    // COND:
    // §FS_NICCHIA = §SI AND §SPOR > #450
    // THEN:
    // *SET *CF = #8
    // *SET *CON-A = §VERN_CASSONETTO
    // #5
    // THEN:
    // *SET §DUMMYN1 = *CF
    // #6
    // COND:
    // §DUMMYN1 > #0 AND §NR_SUP_GUI_AGG > #0
    // THEN:
    // *SET §DUMMYN1 = [*CF + §NR_SUP_GUI_AGG + §NR_SUP_GUI_AGG ]
    // #7
    // COND:
    // §DUMMYN1 > #0 AND §NR_SUP_GUI_AGG > #0
    // THEN:
    // *SET *CF = §DUMMYN1
    // #8
    // COND:
    // §FS_ACC_FIN = §SI
    // THEN:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (vars.get('§FS_NICCHIA') == vars.get('§SI')) {
        vars.setCF(4);
        vars.setCON_A(vars.get('§VERN_CASSONETTO'));
    }
    
    //#3
    if (vars.get('§FS_NICCHIA') == vars.get('§SI') && vars.get('§SPOR') > 300) {
        vars.setCF(6);
        vars.setCON_A(vars.get('§VERN_CASSONETTO'));
    }
    
    //#4
    if (vars.get('§FS_NICCHIA') == vars.get('§SI') && vars.get('§SPOR') > 450) {
        vars.setCF(8);
        vars.setCON_A(vars.get('§VERN_CASSONETTO'));
    }
    
    //#5
    vars.setDUMMYN1(vars.getCF());
    
    //#6
    if (vars.get('§DUMMYN1') > 0 && vars.get('§NR_SUP_GUI_AGG') > 0) {
        vars.setDUMMYN1(vars.getCF() + vars.get('§NR_SUP_GUI_AGG') + vars.get('§NR_SUP_GUI_AGG'));
    }
    
    //#7
    if (vars.get('§DUMMYN1') > 0 && vars.get('§NR_SUP_GUI_AGG') > 0) {
        vars.setCF(vars.get('§DUMMYN1'));
    }
    
    //#8
    if (vars.get('§FS_ACC_FIN') == vars.get('§SI')) {
        vars.setLG('');
    }
    
    // GENERATED

    return vars.output;
};
