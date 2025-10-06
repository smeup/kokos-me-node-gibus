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

export const REG0002841: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0002841
    // REQUEST:
    // """
    // #1
    // COND:
    // §P_CAS_SUP_L > #0
    // THEN:
    // *SET *CON-A = §VERN_1_COM
    // *SET *CON-B = §P_CAS_SUP_L
    // ELSE:
    // *SET *LG = ''
    // #2
    // COND:
    // §FS_ACC_LAT_ANT =  §SI
    // THEN:
    // *SET *CF = #0,5
    // #3
    // COND:
    // §FS_ACC_LAT_POS =  §SI
    // THEN:
    // *SET *CF = #0,5
    // """
    // RESPONSE:
    //#1
    if (vars.get('§P_CAS_SUP_L') > 0) {
        vars.setCON_A(vars.get('§VERN_1_COM'));
        vars.setCON_B(vars.get('§P_CAS_SUP_L'));
    } else {
        vars.setLG('');
    }
    
    //#2
    if (vars.get('§FS_ACC_LAT_ANT') == vars.get('§SI')) {
        vars.setCF(0.5);
    }
    
    //#3
    if (vars.get('§FS_ACC_LAT_POS') == vars.get('§SI')) {
        vars.setCF(0.5);
    }
    
    // GENERATED

    return vars.output;
};
