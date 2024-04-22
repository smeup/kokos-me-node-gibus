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

export const REG0000371: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0000371
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_ZEROGRADI = §SI
    // THEN:
    // *SET *CON-A = §VERN_CASSONETTO
    // *SET *CF = #0
    // ELSE:
    // *SET *LG = ''
    // #2
    // COND:
    // §FS_APPESA = §SI OR §FS_APPOGGIATA = §SI  OR §FS_NICCHIA = §SI
    // THEN:
    // *SET *CF = #2
    // #3
    // COND:
    // (§FS_APPESA = §SI OR §FS_APPOGGIATA = §SI OR §FS_NICCHIA = §SI)  AND §SPOR > #300
    // THEN:
    // *SET *CF = #3
    // #4
    // COND:
    // (§FS_APPESA = §SI OR §FS_APPOGGIATA = §SI OR §FS_NICCHIA = §SI)  AND  §SPOR > #450
    // THEN:
    // *SET *CF = #4
    // #5
    // THEN:
    // *SET §DUMMYN1 = *CF
    // #6
    // COND:
    // §DUMMYN1 > #0 AND §NR_SUP_GUI_AGG > #0
    // THEN:
    // *SET §DUMMYN1 = [*CF + §NR_SUP_GUI_AGG ]
    // #7
    // COND:
    // §DUMMYN1 > #0 AND §NR_SUP_GUI_AGG > #0
    // THEN:
    // *SET *CF = §DUMMYN1
    // #8
    // COND:
    // §FS_FRANGITRATTA = §SI
    // THEN:
    // *SET §DUMMYN1 = [*CF + §NR_FRANG_AGG]
    // #9
    // COND:
    // §FS_FRANGITRATTA = §SI
    // THEN:
    // *SET *CF = §DUMMYN1
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_ZEROGRADI') == vars.get('§SI')) {
        vars.setCON_A(vars.get('§VERN_CASSONETTO'));
        vars.setCF(0);
    } else {
        vars.setLG('');
    }
    
    //#2
    if (vars.get('§FS_APPESA') == vars.get('§SI') || vars.get('§FS_APPOGGIATA') == vars.get('§SI') || vars.get('§FS_NICCHIA') == vars.get('§SI')) {
        vars.setCF(2);
    }
    
    //#3
    if ((vars.get('§FS_APPESA') == vars.get('§SI') || vars.get('§FS_APPOGGIATA') == vars.get('§SI') || vars.get('§FS_NICCHIA') == vars.get('§SI')) && vars.get('§SPOR') > 300) {
        vars.setCF(3);
    }
    
    //#4
    if ((vars.get('§FS_APPESA') == vars.get('§SI') || vars.get('§FS_APPOGGIATA') == vars.get('§SI') || vars.get('§FS_NICCHIA') == vars.get('§SI')) && vars.get('§SPOR') > 450) {
        vars.setCF(4);
    }
    
    //#5
    vars.setDUMMYN1(vars.getCF());
    
    //#6
    if (vars.get('§DUMMYN1') > 0 && vars.get('§NR_SUP_GUI_AGG') > 0) {
        vars.setDUMMYN1(vars.getCF() + vars.get('§NR_SUP_GUI_AGG'));
    }
    
    //#7
    if (vars.get('§DUMMYN1') > 0 && vars.get('§NR_SUP_GUI_AGG') > 0) {
        vars.setCF(vars.get('§DUMMYN1'));
    }
    
    //#8
    if (vars.get('§FS_FRANGITRATTA') == vars.get('§SI')) {
        vars.setDUMMYN1(vars.getCF() + vars.get('§NR_FRANG_AGG'));
    }
    
    //#9
    if (vars.get('§FS_FRANGITRATTA') == vars.get('§SI')) {
        vars.setCF(vars.get('§DUMMYN1'));
    }
    
    // GENERATED

    return vars.output;
};
