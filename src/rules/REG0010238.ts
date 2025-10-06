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

export const REG0010238: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0010238
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET *CON-A = '0072'
    // #2
    // COND:
    // ( §FS_13_QU = §SI) OR (§FS_11_QUJ = §SI) OR (§FS_13_QU_GC = §SI)
    // THEN:
    // *SET *CF = #1
    // #3
    // COND:
    // §VERN_ASTA = '0055' OR §VERN_ASTA = '0053' OR                                                                                §VR_ABB = '01' OR §VR_ABB = '02'
    // THEN:
    // *SET *CON-A = '0055'
    // #4
    // COND:
    // §FS_FAM2_TOLO = §SI
    // THEN:
    // *SET *CF = #1
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setCON_A('0072');
    
    //#2
    if ((vars.get('§FS_13_QU') == vars.get('§SI')) || (vars.get('§FS_11_QUJ') == vars.get('§SI')) || (vars.get('§FS_13_QU_GC') == vars.get('§SI'))) {
        vars.setCF(1);
    }
    
    //#3
    if ((vars.get('§VERN_ASTA') == '0055') || (vars.get('§VERN_ASTA') == '0053') || (vars.get('§VR_ABB') == '01') || (vars.get('§VR_ABB') == '02')) {
        vars.setCON_A('0055');
    }
    
    //#4
    if (vars.get('§FS_FAM2_TOLO') == vars.get('§SI')) {
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
