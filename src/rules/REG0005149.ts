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

export const REG0005149: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0005149
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF=#0
    // #2
    // COND:
    // §PC_LU_SX_MOD1 >#0
    // THEN:
    // *SET *CON-A = §VERN_1_COM
    // *SET *CON-B = §PC_LU_SX_MOD1
    // *SET *CF=#1
    // #3
    // COND:
    // §FS_SUP_LAT_SX=§SI
    // THEN:
    // *SET *CON-A = §VERN_1_COM
    // *SET *CON-B = [§PC_LU_SX_MOD1 / #2 - #5,6]
    // *SET *CF=#2
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    //#2
    if (vars.get('§PC_LU_SX_MOD1') > 0) {
        vars.setCON_A(vars.get('§VERN_1_COM'));
        vars.setCON_B(vars.get('§PC_LU_SX_MOD1'));
        vars.setCF(1);
    }
    //#3
    if (vars.get('§FS_SUP_LAT_SX') == vars.get('§SI')) {
        vars.setCON_A(vars.get('§VERN_1_COM'));
        vars.setCON_B(vars.get('§PC_LU_SX_MOD1') / 2 - 5.6);
        vars.setCF(2);
    }
    // GENERATED

    return vars.output;
};
