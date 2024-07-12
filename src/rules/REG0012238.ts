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

export const REG0012238: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0012238
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET §DUMMYN1 = [ §X_CHI_RET * #4 ]
    // #2
    // COND:
    // §FS_FAM2_ZENIT = §SI
    // THEN:
    // *SET *CF = §DUMMYN1
    // #3
    // COND:
    // §FS_FAM2_AZIMUT = §SI
    // THEN:
    // *SET *CF = §DUMMYN1
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setDUMMYN1(vars.get('§X_CHI_RET') * 4);
    
    //#2
    if (vars.get('§FS_FAM2_ZENIT') == vars.get('§SI')) {
        vars.setCF(vars.get('§DUMMYN1'));
    }
    
    //#3
    if (vars.get('§FS_FAM2_AZIMUT') == vars.get('§SI')) {
        vars.setCF(vars.get('§DUMMYN1'));
    }
    // GENERATED

    return vars.output;
};
