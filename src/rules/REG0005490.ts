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

export const REG0005490: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0005490
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF=#0
    // #2
    // COND:
    // ( §FS_LED_RGB_FRA=§SI ) OR ( §FS_LED_RGB_FRB=§SI ) OR ( §FS_LED_RGB_DX=§SI ) OR ( §FS_LED_RGB_SX=§SI )
    // THEN:
    // *SET *CF=#1
    // #3
    // COND:
    // ( §FS_LED_RGB_FRA=§SI ) AND ( §FS_LED_RGB_FRB=§SI ) AND ( §FS_LED_RGB_SX=§SI ) AND ( §FS_LED_RGB_DX=§SI )
    // THEN:
    // *SET *CF=#2
    // #4
    // COND:
    // §FS_FAM2_AZIMUT = §SI
    // THEN:
    // *SET *CF = #0
    // #5
    // COND:
    // §FS_FAM2_JOY = §SI
    // THEN:
    // *SET *CF = #0
    // #6
    // COND:
    // §FS_FAM2_TWIST = §SI
    // THEN:
    // *SET *CF = #0
    // #7
    // COND:
    // §FS_FAM2_VARIA = §SI AND §FS_LED_RGB = §SI
    // THEN:
    // *SET *CF = #4
    // #8
    // COND:
    // §TI_STRIP = '01'
    // ELSE:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    //#2
    if ((vars.get('§FS_LED_RGB_FRA') == vars.get('§SI')) || (vars.get('§FS_LED_RGB_FRB') == vars.get('§SI')) || (vars.get('§FS_LED_RGB_DX') == vars.get('§SI')) || (vars.get('§FS_LED_RGB_SX') == vars.get('§SI'))) {
        vars.setCF(1);
    }
    //#3
    if ((vars.get('§FS_LED_RGB_FRA') == vars.get('§SI')) && (vars.get('§FS_LED_RGB_FRB') == vars.get('§SI')) && (vars.get('§FS_LED_RGB_SX') == vars.get('§SI')) && (vars.get('§FS_LED_RGB_DX') == vars.get('§SI'))) {
        vars.setCF(2);
    }
    //#4
    if (vars.get('§FS_FAM2_AZIMUT') == vars.get('§SI')) {
        vars.setCF(0);
    }
    //#5
    if (vars.get('§FS_FAM2_JOY') == vars.get('§SI')) {
        vars.setCF(0);
    }
    //#6
    if (vars.get('§FS_FAM2_TWIST') == vars.get('§SI')) {
        vars.setCF(0);
    }
    //#7
    if ((vars.get('§FS_FAM2_VARIA') == vars.get('§SI')) && (vars.get('§FS_LED_RGB') == vars.get('§SI'))) {
        vars.setCF(4);
    }
    //#8
    if (vars.get('§TI_STRIP') == '01') {
    } else {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
