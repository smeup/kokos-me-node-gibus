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

export const REG0003422: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0003422
    // REQUEST:
    // """
    // #1
    // COND:
    // ( §LARG_M1 > #0 ) AND ((§FS_FAM2_QUADRA=§SI ) OR (§FS_FAM2_VIVA=§SI ))
    // THEN:
    // *SET *CON-A=§VERN_1_COM
    // *SET *CON-B= [ §LARG_M1 - #7 ]
    // ELSE:
    // *SET *LG=''
    // #2
    // COND:
    // §FS_ACC_LAT_SX = §SI
    // THEN:
    // *SET §DUMMYN1 = [ *CON-B + #3,5 ]
    // #3
    // COND:
    // §FS_ACC_LAT_SX = §SI
    // THEN:
    // *SET *CON-B = §DUMMYN1
    // #4
    // COND:
    // §FS_ACC_LAT_DX = §SI AND §N_MODULI = #1
    // THEN:
    // *SET §DUMMYN1 = [ *CON-B + #3,5 ]
    // #5
    // COND:
    // §FS_ACC_LAT_DX = §SI AND §N_MODULI = #1
    // THEN:
    // *SET *CON-B = §DUMMYN1
    // """
    // RESPONSE:
    //#1
    if ((vars.get('§LARG_M1') > 0) && ((vars.get('§FS_FAM2_QUADRA') == vars.get('§SI')) || (vars.get('§FS_FAM2_VIVA') == vars.get('§SI')))) {
        vars.setCON_A(vars.get('§VERN_1_COM'));
        vars.setCON_B(vars.get('§LARG_M1') - 7);
    } else {
        vars.setLG('');
    }
    //#2
    if (vars.get('§FS_ACC_LAT_SX') == vars.get('§SI')) {
        vars.setDUMMYN1(vars.getCON_B() + 3.5);
    }
    //#3
    if (vars.get('§FS_ACC_LAT_SX') == vars.get('§SI')) {
        vars.setCON_B(vars.get('§DUMMYN1'));
    }
    //#4
    if ((vars.get('§FS_ACC_LAT_DX') == vars.get('§SI')) && (vars.get('§N_MODULI') == 1)) {
        vars.setDUMMYN1(vars.getCON_B() + 3.5);
    }
    //#5
    if ((vars.get('§FS_ACC_LAT_DX') == vars.get('§SI')) && (vars.get('§N_MODULI') == 1)) {
        vars.setCON_B(vars.get('§DUMMYN1'));
    }
    // GENERATED

    return vars.output;
};
