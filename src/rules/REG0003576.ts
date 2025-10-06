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

export const REG0003576: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0003576
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF=#0
    // #2
    // COND:
    // (§FS_FAM2_100=§SI ) OR ( §FS_FAM2_JEANS=§SI) OR (§FS_FAM2_ELITE = §SI)
    // THEN:
    // *SET *CON-A=§VERN_1_COM
    // *SET *CON-B=§L_GUIDA
    // *SET *CF= [§N_MODULI + #1]
    // #3
    // COND:
    // §L_GUI_TG1 > #0
    // THEN:
    // *SET *CON-B = §L_GUI_TG1
    // #4
    // COND:
    // §L_GUI_TG1 > #0
    // THEN:
    // *SET §DUMMYN1 = [*CF * #2]
    // #5
    // COND:
    // §L_GUI_TG1 > #0
    // THEN:
    // *SET *CF = §DUMMYN1
    // """
    // RESPONSE:
    
    //#1
    vars.setCF(0);
    //#2
    if ((vars.get('§FS_FAM2_100') == vars.get('§SI')) || (vars.get('§FS_FAM2_JEANS') == vars.get('§SI')) || (vars.get('§FS_FAM2_ELITE') == vars.get('§SI'))) {
        vars.setCON_A(vars.get('§VERN_1_COM'));
        vars.setCON_B(vars.get('§L_GUIDA'));
        vars.setCF(vars.get('§N_MODULI') + 1);
    }
    //#3
    if (vars.get('§L_GUI_TG1') > 0) {
        vars.setCON_B(vars.get('§L_GUI_TG1'));
    }
    //#4
    if (vars.get('§L_GUI_TG1') > 0) {
        vars.setDUMMYN1(vars.getCF() * 2);
    }
    //#5
    if (vars.get('§L_GUI_TG1') > 0) {
        vars.setCF(vars.get('§DUMMYN1'));
    }
    // GENERATED

    return vars.output;
};
