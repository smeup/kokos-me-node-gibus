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

export const REG0003764: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0003764
    // REQUEST:
    // """
    // #1
    // COND:
    // §P_PAS_CAV1_IN_L > #0
    // THEN:
    // *SET *CON-A = §VERN_1_COM
    // *SET *CON-B = §P_PAS_CAV1_IN_L
    // *SET *S2=§P_PAS_CAV1_IN_L
    // ELSE:
    // *SET *LG=''
    // #2
    // COND:
    // §FS_FAM2_TWIST = §SI
    // THEN:
    // *SET *CON-B = [§P_PAS_CAV1_IN_L + 0,3]
    // *SET *S2 = [§P_PAS_CAV1_IN_L + 0,3]
    // #3
    // COND:
    // §FS_FAM2_VARIA = §SI
    // THEN:
    // *SET *CON-B = [§P_PAS_CAV1_IN_L + 1,3]
    // *SET *S2 = [§P_PAS_CAV1_IN_L + 1,3]
    // """
    // RESPONSE:
    //#1
    if (vars.get('§P_PAS_CAV1_IN_L') > 0) {
        vars.setCON_A(vars.get('§VERN_1_COM'));
        vars.setCON_B(vars.get('§P_PAS_CAV1_IN_L'));
        vars.setS2(vars.get('§P_PAS_CAV1_IN_L'));
    } else {
        vars.setLG('');
    }
    
    //#2
    if (vars.get('§FS_FAM2_TWIST') == vars.get('§SI')) {
        vars.setCON_B(vars.get('§P_PAS_CAV1_IN_L') + 0.3);
        vars.setS2(vars.get('§P_PAS_CAV1_IN_L') + 0.3);
    }
    
    //#3
    if (vars.get('§FS_FAM2_VARIA') == vars.get('§SI')) {
        vars.setCON_B(vars.get('§P_PAS_CAV1_IN_L') + 1.3);
        vars.setS2(vars.get('§P_PAS_CAV1_IN_L') + 1.3);
    } 
    
    // GENERATED

    return vars.output;
};
