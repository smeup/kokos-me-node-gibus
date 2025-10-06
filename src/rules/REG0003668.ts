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

export const REG0003668: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0003668
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A = '0187'
    // *SET *CF = #1
    // #2
    // COND:
    // §N_MODULI = #3 AND §FS_ACC_ANT_DX = §SI
    // THEN:
    // *SET *CF = #0
    // #3
    // COND:
    // §L_SPO_MON_ANT4 > #0
    // THEN:
    // *SET §DUMMYN1 = [*CF + #1]
    // #4
    // COND:
    // §L_SPO_MON_ANT4 > #0
    // THEN:
    // *SET *CF = §DUMMYN1
    // """
    // RESPONSE:
    //#1
    vars.setCON_A('0187');
    vars.setCF(1);
    
    //#2
    if (vars.get('§N_MODULI') == 3 && vars.get('§FS_ACC_ANT_DX') == vars.get('§SI')) {
        vars.setCF(0);
    }
    
    //#3
    if (vars.get('§L_SPO_MON_ANT4') > 0) {
        vars.setDUMMYN1(vars.getCF() + 1);
    }
    
    //#4
    if (vars.get('§L_SPO_MON_ANT4') > 0) {
        vars.setCF(vars.get('§DUMMYN1'));
    }
    // GENERATED

    return vars.output;
};
