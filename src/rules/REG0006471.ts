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

export const REG0006471: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0006471
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET §DUMMYN1 = #0
    // #2
    // COND:
    // §FS_FAM2_AZIMUT = §SI
    // THEN:
    // *SET §DUMMYN1 = [ §SPOR - #36 ]
    // #3
    // COND:
    // §FS_FAM2_ZENIT = §SI
    // THEN:
    // *SET §DUMMYN1 = [ §SPOR - #23,6 ]
    // #4
    // THEN:
    // *SET *CF= [ §DUMMYN1/#100 ]
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setDUMMYN1(0);
    
    //#2
    if (vars.get('§FS_FAM2_AZIMUT') == vars.get('§SI')) {
        vars.setDUMMYN1(vars.get('§SPOR') - 36);
    }
    
    //#3
    if (vars.get('§FS_FAM2_ZENIT') == vars.get('§SI')) {
        vars.setDUMMYN1(vars.get('§SPOR') - 23.6);
    }
    
    //#4
    vars.setCF(vars.get('§DUMMYN1') / 100);
    // GENERATED

    return vars.output;
};
