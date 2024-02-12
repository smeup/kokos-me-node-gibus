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

export const REG0006658: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0006658
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_FAM2_AZIMUT=§SI
    // ELSE:
    // *SET *LG=''
    // #2
    // THEN:
    // *SET *CF =#0
    // #3
    // COND:
    // ( §FS_LED_RGB_SX=§SI ) OR ( §FS_LED_RGB_FRA=§SI ) OR ( §FS_LED_RGB_DX=§SI )
    // THEN:
    // *SET *CF=#1
    // #4
    // COND:
    // ( §FS_LED_RGB_FRB=§SI )
    // THEN:
    // *SET *CF=#2
    // #5
    // COND:
    // ( §FS_LED_RGB_SX=§SI ) AND ( ( §FS_LED_RGB_DX=§SI ) OR ( §FS_LED_RGB_FRA=§SI ) )
    // THEN:
    // *SET *CF=#2
    // #6
    // COND:
    // ( §FS_LED_RGB_DX=§SI ) AND ( §FS_LED_RGB_FRA=§SI )
    // THEN:
    // *SET *CF=#2
    // #7
    // COND:
    // ( ( §FS_LED_RGB_SX=§SI ) OR ( §FS_LED_RGB_FRA=§SI ) OR ( §FS_LED_RGB_DX=§SI )) AND ( §FS_LED_RGB_FRB=§SI )
    // THEN:
    // *SET *CF=#3
    // #8
    // COND:
    // ( §FS_LED_RGB_SX=§SI ) AND ( §FS_LED_RGB_FRA=§SI ) AND ( §FS_LED_RGB_DX=§SI ) AND ( §FS_LED_RGB_FRB<>§SI )
    // THEN:
    // *SET *CF=#4
    // #9
    // COND:
    // ( §FS_LED_RGB_SX=§SI ) AND ( §FS_LED_RGB_FRA=§SI ) AND ( §FS_LED_RGB_DX=§SI ) AND ( §FS_LED_RGB_FRB=§SI )
    // THEN:
    // *SET *CF=#5
    // #10
    // COND:
    // §FS_FAM2_TWIST = §SI
    // THEN:
    // *SET *CF =#0
    // #11
    // COND:
    // §TI_STRIP = '01'
    // ELSE:
    // *SET *CF =#0
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_FAM2_AZIMUT') == vars.get('§SI')) {
    } else {
        vars.setLG("");
    }
    //#2
    vars.setCF(0);
    //#3
    if ((vars.get('§FS_LED_RGB_SX') == vars.get('§SI')) || (vars.get('§FS_LED_RGB_FRA') == vars.get('§SI')) || (vars.get('§FS_LED_RGB_DX') == vars.get('§SI'))) {
        vars.setCF(1);
    }
    //#4
    if (vars.get('§FS_LED_RGB_FRB') == vars.get('§SI')) {
        vars.setCF(2);
    }
    //#5
    if ((vars.get('§FS_LED_RGB_SX') == vars.get('§SI')) && ((vars.get('§FS_LED_RGB_DX') == vars.get('§SI')) || (vars.get('§FS_LED_RGB_FRA') == vars.get('§SI')))) {
        vars.setCF(2);
    }
    //#6
    if ((vars.get('§FS_LED_RGB_DX') == vars.get('§SI')) && (vars.get('§FS_LED_RGB_FRA') == vars.get('§SI'))) {
        vars.setCF(2);
    }
    //#7
    if (((vars.get('§FS_LED_RGB_SX') == vars.get('§SI')) || (vars.get('§FS_LED_RGB_FRA') == vars.get('§SI')) || (vars.get('§FS_LED_RGB_DX') == vars.get('§SI')))) && (vars.get('§FS_LED_RGB_FRB') == vars.get('§SI')))) {
        vars.setCF(3);
    }
    //#8
    if ((vars.get('§FS_LED_RGB_SX') == vars.get('§SI')) && (vars.get('§FS_LED_RGB_FRA') == vars.get('§SI')) && (vars.get('§FS_LED_RGB_DX') == vars.get('§SI')) && (vars.get('§FS_LED_RGB_FRB') != vars.get('§SI'))) {
        vars.setCF(4);
    }
    //#9
    if ((vars.get('§FS_LED_RGB_SX') == vars.get('§SI')) && (vars.get('§FS_LED_RGB_FRA') == vars.get('§SI')) && (vars.get('§FS_LED_RGB_DX') == vars.get('§SI')) && (vars.get('§FS_LED_RGB_FRB') == vars.get('§SI'))) {
        vars.setCF(5);
    }
    //#10
    if (vars.get('§FS_FAM2_TWIST') == vars.get('§SI')) {
        vars.setCF(0);
    }
    //#11
    if (vars.get('§TI_STRIP') == '01') {
    } else {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
