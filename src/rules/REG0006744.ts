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

export const REG0006744: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0006744
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET §DUMMYN1 = [ §LARG - #30 ]
    // #2
    // THEN:
    // *SET *CON-A= §VERN_1_COM
    // *SET *CON-B = §DUMMYN1
    // *SET *CF = #2
    // #3
    // COND:
    // §FS_FAM2_ZENIT<>§SI
    // THEN:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    vars.setDUMMYN1(vars.get('§LARG') - 30);
    
    //#2
    vars.setCON_A(vars.get('§VERN_1_COM'));
    vars.setCON_B(vars.get('§DUMMYN1'));
    vars.setCF(2);
    
    //#3
    if (vars.get('§FS_FAM2_ZENIT') != vars.get('§SI')) {
        vars.setLG('');
    }
    
    // GENERATED

    return vars.output;
};
