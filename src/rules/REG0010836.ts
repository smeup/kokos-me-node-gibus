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

export const REG0010836: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0010836
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §TI_GAM_OPT = '01'
    // THEN:
    // *SET *CF = #1
    // #3
    // COND:
    // §TI_GAM_OPT = '03'
    // THEN:
    // *SET *CF = #1
    // #4
    // COND:
    // §NR_SCA_TEL > #0
    // THEN:
    // *SET *CF = #0
    // #5
    // COND:
    // §FS_SCA_GAM_T01 = §NO
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    //#2
    if (vars.get('§TI_GAM_OPT') == '01') {
        vars.setCF(1);
    }
    //#3
    if (vars.get('§TI_GAM_OPT') == '03') {
        vars.setCF(1);
    }
    //#4
    if (vars.get('§NR_SCA_TEL') > 0) {
        vars.setCF(0);
    }
    //#5
    if (vars.get('§FS_SCA_GAM_T01') == vars.get('§NO')) {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
