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

export const REG0007771: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0007771
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_FAM2_AZIMUT = §SI
    // ELSE:
    // *SET *LG=''
    // #2
    // THEN:
    // *SET §DUMMYN1 = #0
    // #3
    // THEN:
    // *SET §DUMMYN1 = [ §LARG - #34,4 ]
    // #4
    // THEN:
    // *SET *CON-A=§VERN_1_COM
    // *SET *CON-B=§DUMMYN1
    // *SET *CF=#1
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_FAM2_AZIMUT') == vars.get('§SI')) {
    } else {
        vars.setLG('');
    }
    
    //#2
    vars.setDUMMYN1(0);
    
    //#3
    vars.setDUMMYN1(vars.get('§LARG') - 34.4);
    
    //#4
    vars.setCON_A(vars.get('§VERN_1_COM'));
    vars.setCON_B(vars.get('§DUMMYN1'));
    vars.setCF(1);
    // GENERATED

    return vars.output;
};
