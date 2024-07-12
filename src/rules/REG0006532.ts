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

export const REG0006532: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0006532
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET §DUMMYN1 = #0
    // #2
    // COND:
    // §FS_FAM2_AZIMUT = §SI
    // THEN:
    // *SET §DUMMYN1 = [ §LARG_M1 - #4 ]
    // #3
    // COND:
    // §FS_FAM2_ZENIT=§SI
    // THEN:
    // *SET §DUMMYN1 = [ §LARG_M1 - #4,5 ]
    // #4
    // THEN:
    // *SET *CON-A=§VERN_FRANGI
    // *SET *CON-B=§DUMMYN1
    // *SET *CF= §NR_FRANGI
    // """
    // RESPONSE:
    //#1
    vars.setDUMMYN1(0);
    
    //#2
    if (vars.get('§FS_FAM2_AZIMUT') == vars.get('§SI')) {
        vars.setDUMMYN1(vars.get('§LARG_M1') - 4);
    }
    
    //#3
    if (vars.get('§FS_FAM2_ZENIT') == vars.get('§SI')) {
        vars.setDUMMYN1(vars.get('§LARG_M1') - 4.5);
    }
    
    //#4
    vars.setCON_A(vars.get('§VERN_FRANGI'));
    vars.setCON_B(vars.get('§DUMMYN1'));
    vars.setCF(vars.get('§NR_FRANGI'));
    // GENERATED

    return vars.output;
};
