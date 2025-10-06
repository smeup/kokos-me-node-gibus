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

export const REG0001626: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0001626
    // REQUEST:
    // """
    // #1
    // COND:
    // §GRO_LED_IN_S > #0
    // THEN:
    // *SET *CON-A = '0000'
    // *SET *CON-B = §GRO_LED_IN_S
    // ELSE:
    // *SET *LG = ''
    // #2
    // COND:
    // §FS_FAM2_VARIA = §SI
    // THEN:
    // *SET *CON-B = [§GRO_LED_IN_S - #7]
    // """
    // RESPONSE:
    //#1
    if (vars.get('§GRO_LED_IN_S') > 0) {
        vars.setCON_A('0000');
        vars.setCON_B(vars.get('§GRO_LED_IN_S'));
    } else {
        vars.setLG('');
    }
    
    //#2
    if (vars.get('§FS_FAM2_VARIA') == vars.get('§SI')) {
        vars.setCON_B(vars.get('§GRO_LED_IN_S') - 7);
    }
    // GENERATED

    return vars.output;
};
