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

export const REG0007830: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0007830
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF=#0
    // #2
    // COND:
    // §P_PRO_INF_CAS_S  >#0
    // THEN:
    // *SET *CON-A = §VERN_1_COM
    // *SET *CON-B = §P_PRO_INF_CAS_S
    // *SET *CF = #1
    // #3
    // COND:
    // §FS_ACC_LAT_DX = §SI
    // THEN:
    // *SET *CF=#0
    // #4
    // COND:
    // §FS_SUP_LAT_DX = §SI
    // THEN:
    // *SET §DUMMYN1 = [§P_PRO_INF_CAS_S - #10,5]
    // #5
    // COND:
    // §FS_SUP_LAT_DX = §SI
    // THEN:
    // *SET *CON-B = [§DUMMYN1 / #2]
    // *SET *CF = #2
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (vars.get('§P_PRO_INF_CAS_S') > 0) {
        vars.setCON_A(vars.get('§VERN_1_COM'));
        vars.setCON_B(vars.get('§P_PRO_INF_CAS_S'));
        vars.setCF(1);
    }
    
    //#3
    if (vars.get('§FS_ACC_LAT_DX') == vars.get('§SI')) {
        vars.setCF(0);
    }
    
    //#4
    if (vars.get('§FS_SUP_LAT_DX') == vars.get('§SI')) {
        vars.setDUMMYN1(vars.get('§P_PRO_INF_CAS_S') - 10.5);
    }
    
    //#5
    if (vars.get('§FS_SUP_LAT_DX') == vars.get('§SI')) {
        vars.setCON_B(vars.get('§DUMMYN1') / 2);
        vars.setCF(2);
    }
    // GENERATED

    return vars.output;
};
