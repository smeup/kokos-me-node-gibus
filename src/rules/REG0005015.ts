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

export const REG0005015: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0005015
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF=#4
    // #2
    // COND:
    // ( §FS_ACC_PRI=§SI ) OR ( §FS_ACC_PRI_02=§SI ) OR ( §FS_ACC_FIN=§SI ) OR ( §FS_ACC_PRI_02=§SI )
    // THEN:
    // *SET *CF=#2
    // #3
    // COND:
    // §FS_ACC_CEN=§SI
    // THEN:
    // *SET *CF=#0
    // #4
    // COND:
    // §FS_FAM2_AZIMUT=§SI
    // THEN:
    // *SET *CF=#0
    // """
    // RESPONSE:
    //#1
    vars.setCF(4);
    //#2
    if ((vars.get('§FS_ACC_PRI') == vars.get('§SI')) || (vars.get('§FS_ACC_PRI_02') == vars.get('§SI')) || (vars.get('§FS_ACC_FIN') == vars.get('§SI')) || (vars.get('§FS_ACC_PRI_02') == vars.get('§SI'))) {
        vars.setCF(2);
    }
    //#3
    if (vars.get('§FS_ACC_CEN') == vars.get('§SI')) {
        vars.setCF(0);
    }
    //#4
    if (vars.get('§FS_FAM2_AZIMUT') == vars.get('§SI')) {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
