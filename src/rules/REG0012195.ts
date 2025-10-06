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

export const REG0012195: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0012195
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET *CON-A = §VERN_1_COM
    // #2
    // COND:
    // §FS_FAM2_ZENIT = §SI AND §VER_STA_T01 = '2021'
    // THEN:
    // *SET *CF = #1
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setCON_A(vars.get('§VERN_1_COM'));
    
    //#2
    if (vars.get('§FS_FAM2_ZENIT') == vars.get('§SI') && vars.get('§VER_STA_T01') == '2021') {
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
