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

export const REG0005755: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0005755
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF=#0
    // #2
    // COND:
    // ( §FS_MOT_PAR=§SI ) AND ( ( §AT_SEC_MOT='090' ) OR ( §AT_SEC_MOT='089 ' ) )
    // THEN:
    // *SET *CF=#0
    // #3
    // COND:
    // ( §FS_DOP_MOT=§SI )
    // THEN:
    // *SET *CF=#0
    // #4
    // COND:
    // ( §FS_DOP_MOT<>§SI ) AND ( §TI_AUT_VER_C<>'02')
    // THEN:
    // *SET *CF=#1
    // #5
    // COND:
    // ( §FS_DOP_MOT<>§SI ) AND ( §TI_AUT_VER_C='02')
    // THEN:
    // *SET *CF=#2
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if ((vars.get('§FS_MOT_PAR') == vars.get('§SI')) && ((vars.get('§AT_SEC_MOT') == '090') || (vars.get('§AT_SEC_MOT') == '089 '))) {
        vars.setCF(0);
    }
    
    //#3
    if (vars.get('§FS_DOP_MOT') == vars.get('§SI')) {
        vars.setCF(0);
    }
    
    //#4
    if ((vars.get('§FS_DOP_MOT') != vars.get('§SI')) && (vars.get('§TI_AUT_VER_C') != '02')) {
        vars.setCF(1);
    }
    
    //#5
    if ((vars.get('§FS_DOP_MOT') != vars.get('§SI')) && (vars.get('§TI_AUT_VER_C') == '02')) {
        vars.setCF(2);
    }
    // GENERATED

    return vars.output;
};
