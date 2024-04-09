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

export const REG0010052: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0010052
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §N_DIV_FRA = #1 AND §N_MODULI > #1
    // THEN:
    // *SET *CF = [§N_MODULI - #1]
    // #3
    // #4
    // COND:
    // §N_DIV_FRA = #1 AND §N_MODULI > #1
    // THEN:
    // *SET §DUMMYN1 = [*CF * §NR_FRANGI]
    // #5
    // COND:
    // §N_DIV_FRA = #1 AND §N_MODULI > #1
    // THEN:
    // *SET *CF = §DUMMYN1
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (vars.get('§N_DIV_FRA') == 1 && vars.get('§N_MODULI') > 1) {
        vars.setCF(vars.get('§N_MODULI') - 1);
    }
    
    //#3
    
    //#4
    if (vars.get('§N_DIV_FRA') == 1 && vars.get('§N_MODULI') > 1) {
        vars.setDUMMYN1(vars.getCF() * vars.get('§NR_FRANGI'));
    }
    
    //#5
    if (vars.get('§N_DIV_FRA') == 1 && vars.get('§N_MODULI') > 1) {
        vars.setCF(vars.get('§DUMMYN1'));
    }
    
    // GENERATED

    return vars.output;
};
