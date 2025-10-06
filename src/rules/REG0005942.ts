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

export const REG0005942: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0005942
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF=#0
    // #2
    // THEN:
    // *SET §DUMMYN1 = #0
    // #3
    // COND:
    // ( §SPOR >=#700 ) AND ( §FS_FAM2_ISOLA=§SI )
    // THEN:
    // *SET §DUMMYN1 = #2
    // #4
    // COND:
    // ( §SPOR >=#700 ) AND ( §FS_FAM2_ADDF=§SI )
    // THEN:
    // *SET §DUMMYN1 = #2
    // #5
    // COND:
    // ( §SPOR >=#700 ) AND ( §FS_FAM2_ADDL=§SI )
    // THEN:
    // *SET §DUMMYN1 = #1
    // #6
    // COND:
    // §FS_FAM2_FLY_R = §SI
    // THEN:
    // *SET *CF = [§N_TOT_MON_LAT - §DUMMYN1]
    // #7
    // COND:
    // §DUMMYN1 > §N_TOT_MON_LAT
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    //#2
    vars.setDUMMYN1(0);
    //#3
    if ((vars.get('§SPOR') >= 700) && (vars.get('§FS_FAM2_ISOLA') == vars.get('§SI'))) {
        vars.setDUMMYN1(2);
    }
    //#4
    if ((vars.get('§SPOR') >= 700) && (vars.get('§FS_FAM2_ADDF') == vars.get('§SI'))) {
        vars.setDUMMYN1(2);
    }
    //#5
    if ((vars.get('§SPOR') >= 700) && (vars.get('§FS_FAM2_ADDL') == vars.get('§SI'))) {
        vars.setDUMMYN1(1);
    }
    //#6
    if (vars.get('§FS_FAM2_FLY_R') == vars.get('§SI')) {
        vars.setCF(vars.get('§N_TOT_MON_LAT') - vars.get('§DUMMYN1'));
    }
    //#7
    if (vars.get('§DUMMYN1') > vars.get('§N_TOT_MON_LAT')) {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
