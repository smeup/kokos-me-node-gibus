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

export const REG0013255: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0013255
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET *CON-A = *COL
    // *SET *CON-B = *LUNG
    // #2
    // COND:
    // §FS_FAM2_JOY = §SI
    // THEN:
    // *SET *CF = #1
    // #3
    // COND:
    // §FS_ACC_LAT_ANT = §SI
    // THEN:
    // *SET *CF = #0
    // #4
    // COND:
    // §FS_ACC_LAT_DX = §SI
    // THEN:
    // *SET *CF = #0
    // #5
    // COND:
    // §NR_SCH_ANT2 > #0
    // THEN:
    // *SET *CF = #0
    // #6
    // COND:
    // §NR_USB_ANT2 > #0
    // THEN:
    // *SET *CF = #0
    // #7
    // COND:
    // §TI_TE_MON_ANT2 = '02'
    // ELSE:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setCON_A(vars.getCOL());
    vars.setCON_B(vars.getLUNG());
    
    //#2
    if (vars.get('§FS_FAM2_JOY') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#3
    if (vars.get('§FS_ACC_LAT_ANT') == vars.get('§SI')) {
        vars.setCF(0);
    }
    
    //#4
    if (vars.get('§FS_ACC_LAT_DX') == vars.get('§SI')) {
        vars.setCF(0);
    }
    
    //#5
    if (vars.get('§NR_SCH_ANT2') > 0) {
        vars.setCF(0);
    }
    
    //#6
    if (vars.get('§NR_USB_ANT2') > 0) {
        vars.setCF(0);
    }
    
    //#7
    if (vars.get('§TI_TE_MON_ANT2') == '02') {
    } else {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
