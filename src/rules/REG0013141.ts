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

export const REG0013141: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0013141
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET §DUMMYN1 = #0
    // *SET §DUMMYN2 = #0
    // *SET *CF = #0
    // #2
    // COND:
    // ( §FS_SPO_T01 = §SI OR §FS_LAR_T01 = §SI )
    // THEN:
    // *SET §DUMMYN1 = #6
    // #3
    // COND:
    // §NR_FRANGI > #34
    // THEN:
    // *SET §DUMMYN2 = #6
    // #4
    // THEN:
    // *SET *CF = [ §DUMMYN1 + §DUMMYN2 ]
    // """
    // RESPONSE:
    //#1
    vars.setDUMMYN1(0);
    vars.setDUMMYN2(0);
    vars.setCF(0);
    
    //#2
    if (vars.get('§FS_SPO_T01') == vars.get('§SI') || vars.get('§FS_LAR_T01') == vars.get('§SI')) {
        vars.setDUMMYN1(6);
    }
    
    //#3
    if (vars.get('§NR_FRANGI') > 34) {
        vars.setDUMMYN2(6);
    }
    
    //#4
    vars.setCF(vars.get('§DUMMYN1') + vars.get('§DUMMYN2'));
    // GENERATED

    return vars.output;
};
