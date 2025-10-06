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

export const REG0002223: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0002223
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §TI_FIX_BRA = '02'
    // THEN:
    // *SET *CF = #1
    // *SET *CON-A = §VERN_1_COM
    // #3
    // COND:
    // §FS_TEKA_1 = §SI OR §FS_SP_1 = §SI
    // ELSE:
    // *SET *LG = ''
    // #4
    // COND:
    // §FS_SP_TECH = §SI
    // THEN:
    // *SET *CM = '270057'
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    //#2
    if (vars.get('§TI_FIX_BRA') == '02') {
        vars.setCF(1);
        vars.setCON_A(vars.get('§VERN_1_COM'));
    }
    //#3
    if (vars.get('§FS_TEKA_1') == vars.get('§SI') || vars.get('§FS_SP_1') == vars.get('§SI')) {
    } else {
        vars.setLG('');
    }
    //#4
    if (vars.get('§FS_SP_TECH') == vars.get('§SI')) {
        vars.setCM('270057');
    }
    // GENERATED

    return vars.output;
};
