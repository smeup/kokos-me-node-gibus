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

export const REG0005489: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0005489
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF=#0
    // #2
    // COND:
    // ( §FS_LED_RGB_FRA=§SI ) AND ( §FS_LED_RGB_FRB=§SI )
    // THEN:
    // *SET *CF=#1
    // #3
    // COND:
    // ( §FS_LED_RGB_FRB=§SI ) AND ( §FS_LED_RGB_DX=§SI )
    // THEN:
    // *SET *CF=#0
    // #4
    // COND:
    // ( §FS_LED_RGB_FRB=§SI ) AND ( §FS_LED_RGB_SX=§SI )
    // THEN:
    // *SET *CF=#1
    // #5
    // COND:
    // ( §FS_LED_RGB_FRA=§SI ) AND ( §FS_LED_RGB_DX=§SI )
    // THEN:
    // *SET *CF=#1
    // #6
    // COND:
    // ( §FS_LED_RGB_FRA=§SI ) AND ( §FS_LED_RGB_DX=§SI ) AND ( §FS_LED_RGB_SX=§SI )
    // THEN:
    // *SET *CF=#2
    // #7
    // COND:
    // ( §FS_LED_RGB_FRA=§SI ) AND ( §FS_LED_RGB_FRB=§SI ) AND ( §FS_LED_RGB_DX=§SI ) AND ( §FS_LED_RGB_SX=§SI )
    // THEN:
    // *SET *CF=#2
    // #8
    // COND:
    // (( §FS_LED_RGB_SX=§SI ) OR ( §FS_LED_RGB_FRA=§SI )) AND ( §FS_LED_RGB_DX<>§SI ) AND ( §FS_LED_RGB_FRB<>§SI )
    // THEN:
    // *SET *CF=#1
    // #9
    // COND:
    // ( §FS_LED_RGB_SX=§SI ) AND ( §FS_LED_RGB_FRA=§SI ) AND ( §FS_LED_RGB_DX<>§SI ) AND ( §FS_LED_RGB_FRB<>§SI )
    // THEN:
    // *SET *CF=#2
    // #10
    // COND:
    // §FS_FAM2_AZIMUT = §SI
    // THEN:
    // *SET *CF = #0
    // #11
    // COND:
    // §FS_FAM2_JOY = §SI
    // THEN:
    // *SET *CF = #0
    // #12
    // COND:
    // §FS_FAM2_TWIST = §SI
    // THEN:
    // *SET *CF = #6
    // #13
    // COND:
    // §TI_STRIP = '01'
    // ELSE:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    //#2
    if ((vars.get('§FS_LED_RGB_FRA') == vars.get('§SI')) && (vars.get('§FS_LED_RGB_FRB') == vars.get('§SI'))) {
        vars.setCF(1);
    }
    //#3
    if ((vars.get('§FS_LED_RGB_FRB') == vars.get('§SI')) && (vars.get('§FS_LED_RGB_DX') == vars.get('§SI'))) {
        vars.setCF(0);
    }
    //#4
    if ((vars.get('§FS_LED_RGB_FRB') == vars.get('§SI')) && (vars.get('§FS_LED_RGB_SX') == vars.get('§SI'))) {
        vars.setCF(1);
    }
    //#5
    if ((vars.get('§FS_LED_RGB_FRA') == vars.get('§SI')) && (vars.get('§FS_LED_RGB_DX') == vars.get('§SI'))) {
        vars.setCF(1);
    }
    //#6
    if ((vars.get('§FS_LED_RGB_FRA') == vars.get('§SI')) && (vars.get('§FS_LED_RGB_DX') == vars.get('§SI')) && (vars.get('§FS_LED_RGB_SX') == vars.get('§SI'))) {
        vars.setCF(2);
    }
    //#7
    if ((vars.get('§FS_LED_RGB_FRA') == vars.get('§SI')) && (vars.get('§FS_LED_RGB_FRB') == vars.get('§SI')) && (vars.get('§FS_LED_RGB_DX') == vars.get('§SI')) && (vars.get('§FS_LED_RGB_SX') == vars.get('§SI'))) {
        vars.setCF(2);
    }
    //#8
    if (((vars.get('§FS_LED_RGB_SX') == vars.get('§SI')) || (vars.get('§FS_LED_RGB_FRA') == vars.get('§SI'))) && (vars.get('§FS_LED_RGB_DX') != vars.get('§SI')) && (vars.get('§FS_LED_RGB_FRB') != vars.get('§SI'))) {
        vars.setCF(1);
    }
    //#9
    if ((vars.get('§FS_LED_RGB_SX') == vars.get('§SI')) && (vars.get('§FS_LED_RGB_FRA') == vars.get('§SI')) && (vars.get('§FS_LED_RGB_DX') != vars.get('§SI')) && (vars.get('§FS_LED_RGB_FRB') != vars.get('§SI'))) {
        vars.setCF(2);
    }
    //#10
    if (vars.get('§FS_FAM2_AZIMUT') == vars.get('§SI')) {
        vars.setCF(0);
    }
    //#11
    if (vars.get('§FS_FAM2_JOY') == vars.get('§SI')) {
        vars.setCF(0);
    }
    //#12
    if (vars.get('§FS_FAM2_TWIST') == vars.get('§SI')) {
        vars.setCF(6);
    }
    //#13
    if (vars.get('§TI_STRIP') == '01') {
    } else {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
