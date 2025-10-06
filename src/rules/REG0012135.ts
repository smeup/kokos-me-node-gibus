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

export const REG0012135: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0012135
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §VER_STA_T01 = '2021'
    // THEN:
    // *SET *CF = #1
    // #3
    // COND:
    // §FS_ACC_POS2 = §SI
    // THEN:
    // *SET *CF = #0
    // #4
    // COND:
    // §LA_COM = 'POS'
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    //#2
    if (vars.get('§VER_STA_T01') == '2021') {
        vars.setCF(1);
    }
    //#3
    if (vars.get('§FS_ACC_POS2') == vars.get('§SI')) {
        vars.setCF(0);
    }
    //#4
    if (vars.get('§LA_COM') == 'POS') {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
