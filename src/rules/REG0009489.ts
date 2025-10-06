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

export const REG0009489: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0009489
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET *CON-A = 'P072'
    // #2
    // COND:
    // §FS_TXT = §SI
    // THEN:
    // *SET *CF = #1
    // *SET *CON-B = [§LARG - #9,7]
    // #3
    // COND:
    // *CON-B > #700
    // THEN:
    // *SET *CF = #2
    // *SET §DUMMYN1 = *CON-B
    // #4
    // COND:
    // *CON-B > #700
    // THEN:
    // *SET *CF = #2
    // *SET *CON-B = [ §DUMMYN1 / #2 ]
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setCON_A('P072');
    
    //#2
    if (vars.get('§FS_TXT') == vars.get('§SI')) {
        vars.setCF(1);
        vars.setCON_B(vars.get('§LARG') - 9.7);
    }
    
    //#3
    if (vars.getCON_B() > 700) {
        vars.setCF(2);
        vars.setDUMMYN1(vars.getCON_B());
    }
    
    //#4
    if (vars.getCON_B() > 700) {
        vars.setCF(2);
        vars.setCON_B(vars.getDUMMYN1() / 2);
    }
    // GENERATED

    return vars.output;
};
