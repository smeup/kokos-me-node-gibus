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

export const REG0008391: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0008391
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §NR_VER_ZAV = #1
    // ELSE:
    // *SET *LG = ''
    // #3
    // COND:
    // §FS_FAM2_CLI_ZIP=§SI
    // THEN:
    // *SET *CF = [ §NR_ZAVOR_AGG + §NR_ZAVOR_FRONTA ]
    // #4
    // COND:
    // §FS_TEL_TWI = §SI
    // THEN:
    // *SET *CF = [ §NR_ZAVOR_AGG + §NR_ZAVOR_FRONTA ]
    // #5
    // COND:
    // §FS_TEL_RUL_FRO = §SI AND §TI_FRO = '03'
    // THEN:
    // *SET *CF = [ §NR_ZAVOR_AGG + §NR_ZAVOR_FRONTA ]
    // #6
    // COND:
    // §FS_11_QUJ = §SI AND §NR_VER_FRO >= #1
    // THEN:
    // *SET *CF = [ §NR_ZAVOR_AGG + §NR_ZAVOR_FRONTA ]
    // #7
    // COND:
    // §FS_13_QU = §SI AND §NR_VER_FRO >= #1
    // THEN:
    // *SET *CF = [ §NR_ZAVOR_AGG + §NR_ZAVOR_FRONTA ]
    // #8
    // COND:
    // §FS_CHI_VAR = §SI AND §NR_VER_FRO >= #1
    // THEN:
    // *SET *CF = [ §NR_ZAVOR_AGG + §NR_ZAVOR_FRONTA ]
    // #9
    // COND:
    // §FS_FAM2_CLI_CAB = §SI
    // THEN:
    // *SET *CF = [ §NR_ZAVOR_AGG + §NR_ZAVOR_FRONTA ]
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (vars.get('§NR_VER_ZAV') == 1) {
        vars.setLG('');
    }
    
    //#3
    if (vars.get('§FS_FAM2_CLI_ZIP') == vars.get('§SI')) {
        vars.setCF(vars.get('§NR_ZAVOR_AGG') + vars.get('§NR_ZAVOR_FRONTA'));
    }
    
    //#4
    if (vars.get('§FS_TEL_TWI') == vars.get('§SI')) {
        vars.setCF(vars.get('§NR_ZAVOR_AGG') + vars.get('§NR_ZAVOR_FRONTA'));
    }
    
    //#5
    if (vars.get('§FS_TEL_RUL_FRO') == vars.get('§SI') && vars.get('§TI_FRO') == '03') {
        vars.setCF(vars.get('§NR_ZAVOR_AGG') + vars.get('§NR_ZAVOR_FRONTA'));
    }
    
    //#6
    if (vars.get('§FS_11_QUJ') == vars.get('§SI') && vars.get('§NR_VER_FRO') >= 1) {
        vars.setCF(vars.get('§NR_ZAVOR_AGG') + vars.get('§NR_ZAVOR_FRONTA'));
    }
    
    //#7
    if (vars.get('§FS_13_QU') == vars.get('§SI') && vars.get('§NR_VER_FRO') >= 1) {
        vars.setCF(vars.get('§NR_ZAVOR_AGG') + vars.get('§NR_ZAVOR_FRONTA'));
    }
    
    //#8
    if (vars.get('§FS_CHI_VAR') == vars.get('§SI') && vars.get('§NR_VER_FRO') >= 1) {
        vars.setCF(vars.get('§NR_ZAVOR_AGG') + vars.get('§NR_ZAVOR_FRONTA'));
    }
    
    //#9
    if (vars.get('§FS_FAM2_CLI_CAB') == vars.get('§SI')) {
        vars.setCF(vars.get('§NR_ZAVOR_AGG') + vars.get('§NR_ZAVOR_FRONTA'));
    }
    // GENERATED

    return vars.output;
};
