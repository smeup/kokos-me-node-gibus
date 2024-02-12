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

export const REG0008843: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0008843
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET *CON-A = §VERN_FRANGI
    // #2
    // COND:
    // §FS_FAM2_ZENIT = §SI
    // THEN:
    // *SET *CF = §NR_FRANGI
    // *SET §DUMMYN1 = #4,5
    // #3
    // COND:
    // §FS_FAM2_AZIMUT = §SI
    // THEN:
    // *SET *CF = §NR_FRANGI
    // *SET §DUMMYN1 = #4
    // #4
    // THEN:
    // *SET *CON-B = [§LARG_M1 - §DUMMYN1]
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setCON_A(vars.get('§VERN_FRANGI'));
    
    //#2
    if (vars.get('§FS_FAM2_ZENIT') == vars.get('§SI')) {
        vars.setCF(vars.get('§NR_FRANGI'));
        vars.setDUMMYN1(4.5);
    }
    
    //#3
    if (vars.get('§FS_FAM2_AZIMUT') == vars.get('§SI')) {
        vars.setCF(vars.get('§NR_FRANGI'));
        vars.setDUMMYN1(4);
    }
    
    //#4
    vars.setCON_B(vars.get('§LARG_M1') - vars.get('§DUMMYN1'));
    // GENERATED

    return vars.output;
};
