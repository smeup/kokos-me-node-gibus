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

export const REG0010519: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0010519
    // REQUEST:
    // """
    // #1
    // COND:
    // §Q_PANN_LAT > #0 AND §L_PANN_LAT > #0
    // THEN:
    // *SET *CF = [(§L_PANN_LAT - #1,6) * §Q_PANN_LAT / #100]
    // ELSE:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§Q_PANN_LAT') > 0 && vars.get('§L_PANN_LAT') > 0) {
        vars.setCF((vars.get('§L_PANN_LAT') - 1.6) * vars.get('§Q_PANN_LAT') / 100);
    } else {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
