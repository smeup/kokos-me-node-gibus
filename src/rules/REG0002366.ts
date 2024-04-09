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

export const REG0002366: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0002366
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // (§FS_CHI_VAR = §SI OR §FS_13_QU = §SI OR §FS_11_QUJ = §SI) AND §NR_VER_FRO < #1
    // THEN:
    // *SET *CF = [§NR_ZAVOR_AGG + §NR_ZAVOR_FRONTA]
    // #3
    // COND:
    // §FS_TEL_RUL_FRO = §SI AND §TI_FRO = '02'
    // THEN:
    // *SET *CF = [§NR_ZAVOR_AGG + §NR_ZAVOR_FRONTA]
    // #4
    // COND:
    // §FS_FRO_TOL = §SI
    // THEN:
    // *SET *LG = ''
    // #5
    // COND:
    // §FS_FAM2_DUETTO = §SI
    // THEN:
    // *SET *CF = [§NR_ZAVOR_AGG + §NR_ZAVOR_FRONTA]
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if ((vars.get('§FS_CHI_VAR') == vars.get('§SI') || vars.get('§FS_13_QU') == vars.get('§SI') || vars.get('§FS_11_QUJ') == vars.get('§SI')) && vars.get('§NR_VER_FRO') < 1) {
        vars.setCF(vars.get('§NR_ZAVOR_AGG') + vars.get('§NR_ZAVOR_FRONTA'));
    }
    
    //#3
    if (vars.get('§FS_TEL_RUL_FRO') == vars.get('§SI') && vars.get('§TI_FRO') == '02') {
        vars.setCF(vars.get('§NR_ZAVOR_AGG') + vars.get('§NR_ZAVOR_FRONTA'));
    }
    
    //#4
    if (vars.get('§FS_FRO_TOL') == vars.get('§SI')) {
        vars.setLG('');
    }
    
    //#5
    if (vars.get('§FS_FAM2_DUETTO') == vars.get('§SI')) {
        vars.setCF(vars.get('§NR_ZAVOR_AGG') + vars.get('§NR_ZAVOR_FRONTA'));
    }
    // GENERATED

    return vars.output;
};
