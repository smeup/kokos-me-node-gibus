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

export const REG0007180: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0007180
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF=#0
    // #2
    // COND:
    // (( §FS_FAM2_ISOLA=§SI ) OR ( §FS_FAM2_ADDF=§SI )) AND ( §FS_ACC_INI=§SI ) AND ( §FS_ACC_PRI_02=§SI ) AND                      ( ( §FS_FAM2_TWIST=§SI ) OR ( §FS_FAM2_ZENIT=§SI ) )
    // THEN:
    // *SET *CF=#0
    // #3
    // COND:
    // (( §FS_FAM2_ISOLA=§SI ) OR ( §FS_FAM2_ADDF=§SI )) AND ( §FS_ACC_INI<>§SI ) AND ( §FS_ACC_CEN<>§SI ) AND ( §FS_ACC_FIN<>§SI )   AND (( §FS_FAM2_TWIST=§SI ) OR ( §FS_FAM2_ZENIT=§SI ))
    // THEN:
    // *SET *CF=#0
    // #4
    // COND:
    // (( §FS_FAM2_ISOLA=§SI ) OR ( §FS_FAM2_ADDF=§SI )) AND ( §FS_ACC_INI=§SI ) AND ( §FS_ACC_PRI=§SI ) AND                          (( §FS_FAM2_TWIST=§SI ) OR ( §FS_FAM2_ZENIT=§SI ))
    // THEN:
    // *SET *CF=#1
    // #5
    // COND:
    // (( §FS_FAM2_ISOLA=§SI ) OR ( §FS_FAM2_ADDF=§SI )) AND ( §FS_ACC_CEN=§SI ) AND ( §FS_ACC_LAT=§SI ) AND                         (( §FS_FAM2_TWIST=§SI ) OR ( §FS_FAM2_ZENIT = §SI ))
    // THEN:
    // *SET *CF=#1
    // #6
    // COND:
    // ( §FS_FAM2_ADDL=§SI ) AND ( §FS_ACC_INI=§SI ) AND ( §FS_ACC_PRI=§SI ) AND (( §FS_FAM2_TWIST=§SI ) OR ( §FS_FAM2_ZENIT=§SI ))
    // THEN:
    // *SET *CF=#1
    // #7
    // COND:
    // ( §FS_FAM2_ADDL=§SI ) AND ( §FS_ACC_CEN=§SI ) AND ( §FS_ACC_LAT=§SI ) AND (( §FS_FAM2_TWIST=§SI ) OR ( §FS_FAM2_ZENIT=§SI ))
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
        vars.setCF(0);
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
        vars.setCF(1);
    }
    
    //#5
    if ((vars.get('§FS_FAM2_ISOLA') == vars.get('§SI') || vars.get('§FS_FAM2_ADDF') == vars.get('§SI')) && 
        vars.get('§FS_ACC_CEN') == vars.get('§SI') && vars.get('§FS_ACC_LAT') == vars.get('§SI') &&
        (vars.get('§FS_FAM2_TWIST') == vars.get('§SI') || vars.get('§FS_FAM2_ZENIT') == vars.get('§SI'))) {
        vars.setCF(1);
    }
    
    //#6
    if (vars.get('§FS_FAM2_ADDL') == vars.get('§SI') && 
        vars.get('§FS_ACC_INI') == vars.get('§SI') && vars.get('§FS_ACC_PRI') == vars.get('§SI') &&
        (vars.get('§FS_FAM2_TWIST') == vars.get('§SI') || vars.get('§FS_FAM2_ZENIT') == vars.get('§SI'))) {
        vars.setCF(1);
    }
    
    //#7
    if (vars.get('§FS_FAM2_ADDL') == vars.get('§SI') && 
        vars.get('§FS_ACC_CEN') == vars.get('§SI') && vars.get('§FS_ACC_LAT') == vars.get('§SI') &&
        (vars.get('§FS_FAM2_TWIST') == vars.get('§SI') || vars.get('§FS_FAM2_ZENIT') == vars.get('§SI'))) {
        vars.setCF(1);
    }
    
    // GENERATED

    return vars.output;
};
