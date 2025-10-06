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

export const REG0002048: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0002048
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET §DUMMYN1 = #0
    // #2
    // COND:
    // §FS_SEGNO = §SI
    // THEN:
    // *SET §DUMMYN1 = [§N_SALVATELO / #2]
    // #3
    // COND:
    // §FS_DIDUE = §SI
    // THEN:
    // *SET §DUMMYN1 = [ §NR_SUP_CAS + #2 ]
    // #4
    // COND:
    // §DUMMYN1 > #0
    // THEN:
    // *SET *CF = [§DUMMYN1 + #1]
    // #5
    // COND:
    // §FS_SEGNO = §SI AND §PD_LAR_120_UP > #0
    // THEN:
    // *SET *CF = §PD_LAR_120_UP
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setDUMMYN1(0);
    
    //#2
    if (vars.get('§FS_SEGNO') == vars.get('§SI')) {
        vars.setDUMMYN1(vars.get('§N_SALVATELO') / 2);
    }
    
    //#3
    if (vars.get('§FS_DIDUE') == vars.get('§SI')) {
        vars.setDUMMYN1(vars.get('§NR_SUP_CAS') + 2);
    }
    
    //#4
    if (vars.get('§DUMMYN1') > 0) {
        vars.setCF(vars.get('§DUMMYN1') + 1);
    }
    
    //#5
    if (vars.get('§FS_SEGNO') == vars.get('§SI') && vars.get('§PD_LAR_120_UP') > 0) {
        vars.setCF(vars.get('§PD_LAR_120_UP'));
    }
    // GENERATED

    return vars.output;
};
