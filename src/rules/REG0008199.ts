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

export const REG0008199: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0008199
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_FAM2_ISOLA=§SI
    // THEN:
    // *SET *CON-A=§VERN_1_COM
    // *SET *CON-B= [ §LARG_M1 - #8 ]
    // ELSE:
    // *SET *LG=''
    // #2
    // COND:
    // ( §FS_TRA_TET_ANT=§SI ) OR ( §FS_TRA_TET_ANA=§SI )
    // THEN:
    // *SET *CF=#1
    // #3
    // COND:
    // ( §FS_TRA_TET_ANT=§SI ) AND ( §FS_TRA_TET_ANA=§SI )
    // THEN:
    // *SET *CF=#2
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_FAM2_ISOLA') == vars.get('§SI')) {
        vars.setCON_A(vars.get('§VERN_1_COM'));
        vars.setCON_B(vars.get('§LARG_M1') - 8);
    } else {
        vars.setLG('');
    }
    
    //#2
    if ((vars.get('§FS_TRA_TET_ANT') == vars.get('§SI')) || (vars.get('§FS_TRA_TET_ANA') == vars.get('§SI')) ) {
        vars.setCF(1);
    }
    
    //#3
    if ((vars.get('§FS_TRA_TET_ANT') == vars.get('§SI')) && (vars.get('§FS_TRA_TET_ANA') == vars.get('§SI'))) {
        vars.setCF(2);
    }
    
    // GENERATED

    return vars.output;
};
