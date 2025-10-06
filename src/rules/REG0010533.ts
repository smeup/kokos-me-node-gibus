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

export const REG0010533: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0010533
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_APERTURA_CEN = §SI
    // THEN:
    // *SET §DUMMYN1 = #4
    // ELSE:
    // *SET §DUMMYN1 = #2
    // #2
    // THEN:
    // *SET *CF = [§N_ANTE * #2 - §DUMMYN1]
    // *SET *CON-A = §VERN_1_COM
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_APERTURA_CEN') == vars.get('§SI')) {
        vars.setDUMMYN1(4);
    } else {
        vars.setDUMMYN1(2);
    }
    
    //#2
    vars.setCF(vars.get('§N_ANTE') * 2 - vars.get('§DUMMYN1'));
    vars.setCON_A(vars.get('§VERN_1_COM'));
    // GENERATED

    return vars.output;
};
