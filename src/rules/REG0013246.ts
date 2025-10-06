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

export const REG0013246: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0013246
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET §DUMMYN1 = §LARG
    // #2
    // COND:
    // §MATER_TESSUTO = '0126' OR §MATER_TESSUTO = '0125' OR  §MATER_TESSUTO = '107' OR  §MATER_TESSUTO = '0125' OR                 §MATER_TESSUTO = '0119' OR §MATER_TESSUTO = '0039' OR  §MATER_TESSUTO = '0017'
    // THEN:
    // *SET *CF = [ §DUMMYN1 / #100 ]
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setDUMMYN1(vars.get('§LARG'));
    
    //#2
    if (vars.get('§MATER_TESSUTO') == '0126' || vars.get('§MATER_TESSUTO') == '0125' || vars.get('§MATER_TESSUTO') == '107' || vars.get('§MATER_TESSUTO') == '0125' || vars.get('§MATER_TESSUTO') == '0119' || vars.get('§MATER_TESSUTO') == '0039' || vars.get('§MATER_TESSUTO') == '0017') {
        vars.setCF(vars.get('§DUMMYN1') / 100);
    }
    
    // GENERATED

    return vars.output;
};
