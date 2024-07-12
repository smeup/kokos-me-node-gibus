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

export const REG0011435: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0011435
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // THEN:
    // *SET §DUMMYN1 = [§POS_PRI_LED + #0]
    // #3
    // THEN:
    // *SET §DUMMYB1 = ''
    // *SET §DUMMYB2 = ''
    // #4
    // COND:
    // §FS_LED_LAT_SX = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #5
    // COND:
    // §TI_SCA_LAT_T01 = '02' OR §TI_SCA_LAT_T01 = '03' OR §TI_SCA_LAT_T01 = '04' OR §TI_SCA_LAT_T01 = '05'
    // THEN:
    // *SET §DUMMYB2 = §SI
    // #6
    // COND:
    // §DUMMYB1 = §SI AND §DUMMYB2 = §SI
    // THEN:
    // *SET *CF = §DUMMYN1
    // #7
    // THEN:
    // *SET §DUMMYB1 = ''
    // *SET §DUMMYB2 = ''
    // #8
    // COND:
    // §FS_LED_LAT_DX = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #9
    // COND:
    // §TI_SCA_LAT_T01 = '01' OR §TI_SCA_LAT_T01 = '03' OR §TI_SCA_LAT_T01 = '04' OR §TI_SCA_LAT_T01 = '05'
    // THEN:
    // *SET §DUMMYB2 = §SI
    // #10
    // COND:
    // §DUMMYB1 = §SI AND §DUMMYB2 = §SI
    // THEN:
    // *SET *CF = §DUMMYN1
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    //#2
    vars.setDUMMYN1(vars.get('§POS_PRI_LED') + 0);
    //#3
    vars.setDUMMYB1('');
    vars.setDUMMYB2('');
    //#4
    if (vars.get('§FS_LED_LAT_SX') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    //#5
    if (vars.get('§TI_SCA_LAT_T01') == '02' || vars.get('§TI_SCA_LAT_T01') == '03' || vars.get('§TI_SCA_LAT_T01') == '04' || vars.get('§TI_SCA_LAT_T01') == '05') {
        vars.setDUMMYB2(vars.get('§SI'));
    }
    //#6
    if (vars.get('§DUMMYB1') == vars.get('§SI') && vars.get('§DUMMYB2') == vars.get('§SI')) {
        vars.setCF(vars.get('§DUMMYN1'));
    }
    //#7
    vars.setDUMMYB1('');
    vars.setDUMMYB2('');
    //#8
    if (vars.get('§FS_LED_LAT_DX') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    //#9
    if (vars.get('§TI_SCA_LAT_T01') == '01' || vars.get('§TI_SCA_LAT_T01') == '03' || vars.get('§TI_SCA_LAT_T01') == '04' || vars.get('§TI_SCA_LAT_T01') == '05') {
        vars.setDUMMYB2(vars.get('§SI'));
    }
    //#10
    if (vars.get('§DUMMYB1') == vars.get('§SI') && vars.get('§DUMMYB2') == vars.get('§SI')) {
        vars.setCF(vars.get('§DUMMYN1'));
    }
    // GENERATED

    return vars.output;
};
