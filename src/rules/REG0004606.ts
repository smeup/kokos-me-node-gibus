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

export const REG0004606: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0004606
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_FAM2_TWIST=§SI
    // ELSE:
    // *SET *LG=''
    // #2
    // THEN:
    // *SET *CF=#0
    // #3
    // COND:
    // §FS_ACC_PRI=§SI
    // THEN:
    // *SET *CF=#2
    // #4
    // COND:
    // ( §FS_FAM2_ISOLA=§SI ) AND ( §TI_ACC_TWI='01' ) AND (§FS_ACC_CEN=§SI )
    // THEN:
    // *SET *CF=#2
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_FAM2_TWIST') == vars.get('§SI')) {
    } else {
        vars.setLG("");
    }
    
    //#2
    vars.setCF(0);
    
    //#3
    if (vars.get('§FS_ACC_PRI') == vars.get('§SI')) {
        vars.setCF(2);
    }
    
    //#4
    if ((vars.get('§FS_FAM2_ISOLA') == vars.get('§SI')) && (vars.get('§TI_ACC_TWI') == '01') && (vars.get('§FS_ACC_CEN') == vars.get('§SI'))) {
        vars.setCF(2);
    }
    // GENERATED

    return vars.output;
};
