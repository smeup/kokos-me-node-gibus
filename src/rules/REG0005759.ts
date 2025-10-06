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

export const REG0005759: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0005759
    // REQUEST:
    // """
    // #1
    // COND:
    // ( §FS_DOP_MOT<>§SI ) AND (§FS_STA_INOX<>§SI )
    // THEN:
    // *SET *CF= [ #1 + §NR_FAR_COMP + §NR_FAR_COMP2 ]
    // #2
    // COND:
    // ( ( §FS_DOP_MOT<>§SI ) AND (§FS_STA_INOX=§SI ) ) OR ( ( §FS_DOP_MOT=§SI ) AND ( §FS_STA_INOX<>§SI ) )
    // THEN:
    // *SET *CF= [ #2 + §NR_FAR_COMP + §NR_FAR_COMP2 ]
    // #3
    // COND:
    // ( §FS_DOP_MOT=§SI ) AND (§FS_STA_INOX=§SI )
    // THEN:
    // *SET *CF= [ #3 + §NR_FAR_COMP + §NR_FAR_COMP2 ]
    // """
    // RESPONSE:
    //#1
    if ((vars.get('§FS_DOP_MOT') != vars.get('§SI')) && (vars.get('§FS_STA_INOX') != vars.get('§SI'))) {
        vars.setCF(1 + vars.get('§NR_FAR_COMP') + vars.get('§NR_FAR_COMP2'));
    }
    
    //#2
    if (((vars.get('§FS_DOP_MOT') != vars.get('§SI')) && (vars.get('§FS_STA_INOX') == vars.get('§SI'))) || ((vars.get('§FS_DOP_MOT') == vars.get('§SI')) && (vars.get('§FS_STA_INOX') != vars.get('§SI')))) {
        vars.setCF(2 + vars.get('§NR_FAR_COMP') + vars.get('§NR_FAR_COMP2'));
    }
    
    //#3
    if ((vars.get('§FS_DOP_MOT') == vars.get('§SI')) && (vars.get('§FS_STA_INOX') == vars.get('§SI'))) {
        vars.setCF(3 + vars.get('§NR_FAR_COMP') + vars.get('§NR_FAR_COMP2'));
    }
    
    // GENERATED

    return vars.output;
};
