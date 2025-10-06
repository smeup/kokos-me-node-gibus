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

export const REG0008099: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0008099
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF=#0
    // #2
    // COND:
    // ( §FS_FAM2_OPENFLY=§SI ) AND ( ( §FS_MON_ANT1=§SI ) OR ( §FS_MON_ANT2=§SI ) OR ( §FS_MON_ANT3=§SI ))
    // THEN:
    // *SET *CF=#1
    // #3
    // COND:
    // ( §FS_FAM2_OPENFLY=§SI ) AND ( ( ( §FS_MON_ANT1=§SI ) AND ( §FS_MON_ANT2=§SI ) ) OR                                            ( ( §FS_MON_ANT1=§SI ) AND ( §FS_MON_ANT3=§SI ) ) OR  ( ( §FS_MON_ANT2=§SI ) AND ( §FS_MON_ANT3=§SI ) ) )
    // THEN:
    // *SET *CF=#2
    // #4
    // COND:
    // ( §FS_FAM2_OPENFLY=§SI ) AND ( §FS_MON_ANT1=§SI ) AND ( §FS_MON_ANT2=§SI ) AND ( §FS_MON_ANT3=§SI )
    // THEN:
    // *SET *CF=#3
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if ((vars.get('§FS_FAM2_OPENFLY') == vars.get('§SI')) && ((vars.get('§FS_MON_ANT1') == vars.get('§SI')) || (vars.get('§FS_MON_ANT2') == vars.get('§SI')) || (vars.get('§FS_MON_ANT3') == vars.get('§SI')))) {
        vars.setCF(1);
    }
    
    //#3
    if ((vars.get('§FS_FAM2_OPENFLY') == vars.get('§SI')) && (((vars.get('§FS_MON_ANT1') == vars.get('§SI')) && (vars.get('§FS_MON_ANT2') == vars.get('§SI'))) || ((vars.get('§FS_MON_ANT1') == vars.get('§SI')) && (vars.get('§FS_MON_ANT3') == vars.get('§SI'))) || ((vars.get('§FS_MON_ANT2') == vars.get('§SI')) && (vars.get('§FS_MON_ANT3') == vars.get('§SI'))))) {
        vars.setCF(2);
    }
    
    //#4
    if ((vars.get('§FS_FAM2_OPENFLY') == vars.get('§SI')) && (vars.get('§FS_MON_ANT1') == vars.get('§SI')) && (vars.get('§FS_MON_ANT2') == vars.get('§SI')) && (vars.get('§FS_MON_ANT3') == vars.get('§SI'))) {
        vars.setCF(3);
    }
    // GENERATED

    return vars.output;
};
