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

export const REG0010171: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0010171
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // THEN:
    // *SET §DUMMYN1 = #2
    // #3
    // COND:
    // §FS_FAM2_LUCE = §SI
    // THEN:
    // *SET §DUMMYN1 = #1
    // #4
    // COND:
    // §N_DIV_FRA  > #1
    // THEN:
    // *SET *CF = [(§N_DIV_FRA - #1) * §DUMMYN1]
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    vars.setDUMMYN1(2);
    
    //#3
    if (vars.get('§FS_FAM2_LUCE') == vars.get('§SI')) {
        vars.setDUMMYN1(1);
    }
    
    //#4
    if (vars.get('§N_DIV_FRA') > 1) {
        vars.setCF((vars.get('§N_DIV_FRA') - 1) * vars.get('§DUMMYN1'));
    }
    
    // GENERATED

    return vars.output;
};
