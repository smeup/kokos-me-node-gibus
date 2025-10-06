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

export const REG0007173: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0007173
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF=#0
    // #2
    // COND:
    // (( §FS_FAM2_ISOLA=§SI ) OR ( §FS_FAM2_ADDF=§SI )) AND ( §FS_ACC_INI=§SI ) AND ( §FS_ACC_PRI_02=§SI ) AND                      (( §FS_FAM2_TWIST=§SI ) OR ( §FS_FAM2_ZENIT=§SI ))
    // THEN:
    // *SET *CF=#1
    // #3
    // COND:
    // (( §FS_FAM2_ISOLA=§SI ) OR ( §FS_FAM2_ADDF=§SI )) AND ( §FS_ACC_INI<>§SI ) AND ( §FS_ACC_CEN<>§SI ) AND ( §FS_ACC_FIN<>§SI )    AND (( §FS_FAM2_TWIST=§SI ) OR ( §FS_FAM2_ZENIT=§SI ))
    // THEN:
    // *SET *CF=#0
    // #4
    // COND:
    // (( §FS_FAM2_ISOLA=§SI ) OR ( §FS_FAM2_ADDF=§SI )) AND ( §FS_ACC_INI=§SI ) AND ( §FS_ACC_PRI=§SI ) AND                           (( §FS_FAM2_TWIST=§SI ) OR ( §FS_FAM2_ZENIT=§SI ))
    // THEN:
    // *SET *CF=#0
    // #5
    // COND:
    // ( §FS_FAM2_ADDF=§SI ) AND ( §FS_ACC_CEN=§SI ) AND ( §FS_ACC_FRO=§SI ) AND (( §FS_FAM2_TWIST=§SI ) OR ( §FS_FAM2_ZENIT=§SI ))
    // THEN:
    // *SET *CF=#1
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if ((vars.get('§FS_FAM2_ISOLA') == vars.get('§SI') || vars.get('§FS_FAM2_ADDF') == vars.get('§SI')) && 
        vars.get('§FS_ACC_INI') == vars.get('§SI') && vars.get('§FS_ACC_PRI_02') == vars.get('§SI') &&
        (vars.get('§FS_FAM2_TWIST') == vars.get('§SI') || vars.get('§FS_FAM2_ZENIT') == vars.get('§SI'))) {
        vars.setCF(1);
    }
    
    //#3
    if ((vars.get('§FS_FAM2_ISOLA') == vars.get('§SI') || vars.get('§FS_FAM2_ADDF') == vars.get('§SI')) && 
        vars.get('§FS_ACC_INI') != vars.get('§SI') && vars.get('§FS_ACC_CEN') != vars.get('§SI') && vars.get('§FS_ACC_FIN') != vars.get('§SI') &&
        (vars.get('§FS_FAM2_TWIST') == vars.get('§SI') || vars.get('§FS_FAM2_ZENIT') == vars.get('§SI'))) {
        vars.setCF(0);
    }
    
    //#4
    if ((vars.get('§FS_FAM2_ISOLA') == vars.get('§SI') || vars.get('§FS_FAM2_ADDF') == vars.get('§SI')) && 
        vars.get('§FS_ACC_INI') == vars.get('§SI') && vars.get('§FS_ACC_PRI') == vars.get('§SI') &&
        (vars.get('§FS_FAM2_TWIST') == vars.get('§SI') || vars.get('§FS_FAM2_ZENIT') == vars.get('§SI'))) {
        vars.setCF(0);
    }
    
    //#5
    if (vars.get('§FS_FAM2_ADDF') == vars.get('§SI') && vars.get('§FS_ACC_CEN') == vars.get('§SI') && vars.get('§FS_ACC_FRO') == vars.get('§SI') &&
        (vars.get('§FS_FAM2_TWIST') == vars.get('§SI') || vars.get('§FS_FAM2_ZENIT') == vars.get('§SI'))) {
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
