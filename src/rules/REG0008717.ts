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

export const REG0008717: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0008717
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET *CON-A = §VERN_1_COM
    // *SET *CON-B = §H_ANT_M2
    // #2
    // COND:
    // §H_ANT_M2 > #0
    // THEN:
    // *SET *CF = #1
    // #3
    // COND:
    // §TI_PR_ANT2 = '02'
    // THEN:
    // *SET *CM = 'TG_GAM_T02'
    // #4
    // COND:
    // §FS_MON_ANT2_DOP = §SI
    // THEN:
    // *SET *CF = #2
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setCON_A(vars.get('§VERN_1_COM'));
    vars.setCON_B(vars.get('§H_ANT_M2'));
    //#2
    if (vars.get('§H_ANT_M2') > 0) {
        vars.setCF(1);
    }
    //#3
    if (vars.get('§TI_PR_ANT2') == '02') {
        vars.setCM('TG_GAM_T02');
    }
    //#4
    if (vars.get('§FS_MON_ANT2_DOP') == vars.get('§SI')) {
        vars.setCF(2);
    }
    // GENERATED

    return vars.output;
};
