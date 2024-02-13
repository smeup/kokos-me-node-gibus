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

export const REG0009168: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0009168
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET §DUMMYN1 = #0
    // #2
    // COND:
    // §COD_MOTORE <> ''
    // THEN:
    // *SET *CM = §COD_MOTORE
    // *SET §DUMMYN1 = #1
    // #3
    // COND:
    // §TIPO_MOT_HID = '237'
    // THEN:
    // *SET *CM = '210333'
    // *SET §DUMMYN1 = #1
    // #4
    // THEN:
    // *SET *CF = §DUMMYN1
    // #5
    // COND:
    // §FS_FAM2_TWIST = §SI
    // THEN:
    // *SET *CF = [ §DUMMYN1 * #2 ]
    // #6
    // COND:
    // §FS_FAM2_VARIA = §SI
    // THEN:
    // *SET *CF = [ §DUMMYN1 * #2 ]
    // #7
    // COND:
    // §FS_FAM2_JOY = §SI AND §FS_DOP_MOT = §SI
    // THEN:
    // *SET *CF = [ §DUMMYN1 * #2 ]
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setDUMMYN1(0);
    //#2
    if (vars.get('§COD_MOTORE') != '') {
        vars.setCM(vars.get('§COD_MOTORE'));
        vars.setDUMMYN1(1);
    }
    //#3
    if (vars.get('§TIPO_MOT_HID') == '237') {
        vars.setCM('210333');
        vars.setDUMMYN1(1);
    }
    //#4
    vars.setCF(vars.get('§DUMMYN1'));
    //#5
    if (vars.get('§FS_FAM2_TWIST') == vars.get('§SI')) {
        vars.setCF(vars.get('§DUMMYN1') * 2);
    }
    //#6
    if (vars.get('§FS_FAM2_VARIA') == vars.get('§SI')) {
        vars.setCF(vars.get('§DUMMYN1') * 2);
    }
    //#7
    if (vars.get('§FS_FAM2_JOY') == vars.get('§SI') && vars.get('§FS_DOP_MOT') == vars.get('§SI')) {
        vars.setCF(vars.get('§DUMMYN1') * 2);
    }
    // GENERATED

    return vars.output;
};
