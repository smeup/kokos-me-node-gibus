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

export const REG0000646: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0000646
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §FS_TOLO_CL = §SI
    // THEN:
    // *SET *CF = #1
    // #3
    // COND:
    // §FS_MAGNETE_FRON = §SI AND (§FS_FAM2_TOLO = §SI OR §FS_SP_0_GCT = §SI)
    // THEN:
    // *SET §DUMMYN1 = [*CF + §NR_MAGNETE_FRON]
    // #4
    // COND:
    // §FS_MAGNETE_FRON = §SI AND (§FS_FAM2_TOLO = §SI OR §FS_SP_0_GCT = §SI)
    // THEN:
    // *SET *CF = §DUMMYN1
    // #5
    // COND:
    // (§FS_SP_0_GCT = §SI) AND (§FS_NO_GUI = §SI)
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (vars.get('§FS_TOLO_CL') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#3
    if (vars.get('§FS_MAGNETE_FRON') == vars.get('§SI') && (vars.get('§FS_FAM2_TOLO') == vars.get('§SI') || vars.get('§FS_SP_0_GCT') == vars.get('§SI'))) {
        vars.setDUMMYN1(vars.getCF() + vars.get('§NR_MAGNETE_FRON'));
    }
    
    //#4
    if (vars.get('§FS_MAGNETE_FRON') == vars.get('§SI') && (vars.get('§FS_FAM2_TOLO') == vars.get('§SI') || vars.get('§FS_SP_0_GCT') == vars.get('§SI'))) {
        vars.setCF(vars.get('§DUMMYN1'));
    }
    
    //#5
    if ((vars.get('§FS_SP_0_GCT') == vars.get('§SI')) && (vars.get('§FS_NO_GUI') == vars.get('§SI'))) {
        vars.setCF(0);
    }
    
    // GENERATED

    return vars.output;
};
