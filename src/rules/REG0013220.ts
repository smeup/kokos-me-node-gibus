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

export const REG0013220: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0013220
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET §DUMMYN1 = #0
    // *SET §DUMMYN2 = #0
    // #2
    // COND:
    // §FS_COM_MOTORE = §SI
    // THEN:
    // *SET §DUMMYN1 = [ §DUMMYN2 + #1 ]
    // #3
    // COND:
    // §FS_COM_MOTORE = §SI
    // THEN:
    // *SET §DUMMYN2 = §DUMMYN1
    // #4
    // COND:
    // §FS_AUD_BIO = §SI
    // THEN:
    // *SET §DUMMYN1 = [ §DUMMYN2 + #1 ]
    // #5
    // COND:
    // §FS_AUD_BIO = §SI
    // THEN:
    // *SET §DUMMYN2 = §DUMMYN1
    // #6
    // COND:
    // §FS_ANT_GEL_ROOM = §SI
    // THEN:
    // *SET §DUMMYN1 = [ §DUMMYN2 + #1 ]
    // #7
    // COND:
    // §FS_ANT_GEL_ROOM = §SI
    // THEN:
    // *SET §DUMMYN2 = §DUMMYN1
    // #8
    // COND:
    // §FS_CEN_GES_TC = §SI
    // THEN:
    // *SET §DUMMYN1 = [ §DUMMYN2 + #1 ]
    // #9
    // COND:
    // §FS_CEN_GES_TC = §SI
    // THEN:
    // *SET §DUMMYN2 = §DUMMYN1
    // #10
    // COND:
    // §FS_ALIM_LED = §SI
    // THEN:
    // *SET §DUMMYN1 = [ §DUMMYN2 + #1 ]
    // #11
    // COND:
    // §FS_ALIM_LED = §SI
    // THEN:
    // *SET §DUMMYN2 = §DUMMYN1
    // #12
    // COND:
    // §FS_ALIM_LED_PER = §SI
    // THEN:
    // *SET §DUMMYN1 = [ §DUMMYN2 + #1 ]
    // #13
    // COND:
    // §FS_ALIM_LED_PER = §SI
    // THEN:
    // *SET §DUMMYN2 = §DUMMYN1
    // #14
    // COND:
    // §FS_ALIM_LED_RGB = §SI
    // THEN:
    // *SET §DUMMYN1 = [ §DUMMYN2 + #1 ]
    // #15
    // COND:
    // §FS_ALIM_LED_RGB = §SI
    // THEN:
    // *SET §DUMMYN2 = §DUMMYN1
    // #16
    // COND:
    // §FS_ALIM_T01 = §SI
    // THEN:
    // *SET §DUMMYN1 = [ §DUMMYN2 + #1 ]
    // #17
    // COND:
    // §FS_ALIM_T01 = §SI
    // THEN:
    // *SET §DUMMYN2 = §DUMMYN1
    // #18
    // COND:
    // §DUMMYN1 >= #1
    // THEN:
    // *SET *CF = #1
    // #19
    // COND:
    // §DUMMYN1 >= #3
    // THEN:
    // *SET *CF = #2
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setDUMMYN1(0);
    vars.setDUMMYN2(0);
    //#2
    if (vars.get('§FS_COM_MOTORE') == vars.get('§SI')) {
        vars.setDUMMYN1(vars.get('§DUMMYN2') + 1);
    }
    //#3
    if (vars.get('§FS_COM_MOTORE') == vars.get('§SI')) {
        vars.setDUMMYN2(vars.get('§DUMMYN1'));
    }
    //#4
    if (vars.get('§FS_AUD_BIO') == vars.get('§SI')) {
        vars.setDUMMYN1(vars.get('§DUMMYN2') + 1);
    }
    //#5
    if (vars.get('§FS_AUD_BIO') == vars.get('§SI')) {
        vars.setDUMMYN2(vars.get('§DUMMYN1'));
    }
    //#6
    if (vars.get('§FS_ANT_GEL_ROOM') == vars.get('§SI')) {
        vars.setDUMMYN1(vars.get('§DUMMYN2') + 1);
    }
    //#7
    if (vars.get('§FS_ANT_GEL_ROOM') == vars.get('§SI')) {
        vars.setDUMMYN2(vars.get('§DUMMYN1'));
    }
    //#8
    if (vars.get('§FS_CEN_GES_TC') == vars.get('§SI')) {
        vars.setDUMMYN1(vars.get('§DUMMYN2') + 1);
    }
    //#9
    if (vars.get('§FS_CEN_GES_TC') == vars.get('§SI')) {
        vars.setDUMMYN2(vars.get('§DUMMYN1'));
    }
    //#10
    if (vars.get('§FS_ALIM_LED') == vars.get('§SI')) {
        vars.setDUMMYN1(vars.get('§DUMMYN2') + 1);
    }
    //#11
    if (vars.get('§FS_ALIM_LED') == vars.get('§SI')) {
        vars.setDUMMYN2(vars.get('§DUMMYN1'));
    }
    //#12
    if (vars.get('§FS_ALIM_LED_PER') == vars.get('§SI')) {
        vars.setDUMMYN1(vars.get('§DUMMYN2') + 1);
    }
    //#13
    if (vars.get('§FS_ALIM_LED_PER') == vars.get('§SI')) {
        vars.setDUMMYN2(vars.get('§DUMMYN1'));
    }
    //#14
    if (vars.get('§FS_ALIM_LED_RGB') == vars.get('§SI')) {
        vars.setDUMMYN1(vars.get('§DUMMYN2') + 1);
    }
    //#15
    if (vars.get('§FS_ALIM_LED_RGB') == vars.get('§SI')) {
        vars.setDUMMYN2(vars.get('§DUMMYN1'));
    }
    //#16
    if (vars.get('§FS_ALIM_T01') == vars.get('§SI')) {
        vars.setDUMMYN1(vars.get('§DUMMYN2') + 1);
    }
    //#17
    if (vars.get('§FS_ALIM_T01') == vars.get('§SI')) {
        vars.setDUMMYN2(vars.get('§DUMMYN1'));
    }
    //#18
    if (vars.get('§DUMMYN1') >= 1) {
        vars.setCF(1);
    }
    //#19
    if (vars.get('§DUMMYN1') >= 3) {
        vars.setCF(2);
    }
    // GENERATED

    return vars.output;
};
