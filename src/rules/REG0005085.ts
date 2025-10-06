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

export const REG0005085: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0005085
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET §DUMMYN1 = #0
    // #2
    // COND:
    // §FS_FAM2_VARIA = §SI
    // THEN:
    // *SET §DUMMYN1 = [ §LARG - #54,3 + #1,3]
    // #3
    // COND:
    // ( §FS_FAM2_VARIA = §SI ) AND ( ( §FS_ACC_LAT_SX = §SI ) OR ( §FS_ACC_LAT_DX = §SI ) )
    // THEN:
    // *SET §DUMMYN1 = [ §LARG - #50 + #1,3]
    // #4
    // THEN:
    // *SET *CON-A=§VERN_1_COM
    // *SET *CON-B=§DUMMYN1
    // """
    // RESPONSE:
    //#1
    vars.setDUMMYN1(0);
    
    //#2
    if (vars.get('§FS_FAM2_VARIA') == vars.get('§SI')) {
        vars.setDUMMYN1(vars.get('§LARG') - 54.3 + 1.3);
    }
    
    //#3
    if ((vars.get('§FS_FAM2_VARIA') == vars.get('§SI')) && ((vars.get('§FS_ACC_LAT_SX') == vars.get('§SI')) || (vars.get('§FS_ACC_LAT_DX') == vars.get('§SI')))) {
        vars.setDUMMYN1(vars.get('§LARG') - 50 + 1.3);
    }
    
    //#4
    vars.setCON_A(vars.get('§VERN_1_COM'));
    vars.setCON_B(vars.get('§DUMMYN1'));
    // GENERATED

    return vars.output;
};
