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

export const REG0007331: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0007331
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // ( §FS_FAM2_QUADRA = §SI ) AND ( §VERN_1_COM<>'0055' ) AND ( §VERN_1_COM<>'0073' )
    // THEN:
    // *SET *CF = [ §N_MODULI - #1 ]
    // *SET *CON-A=§VERN_1_COM
    // #3
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if ((vars.get('§FS_FAM2_QUADRA') == vars.get('§SI')) && (vars.get('§VERN_1_COM') != '0055') && (vars.get('§VERN_1_COM') != '0073')) {
        vars.setCF(vars.get('§N_MODULI') - 1);
        vars.setCON_A(vars.get('§VERN_1_COM'));
    }
    
    //#3
    vars.setCF(0);
    // GENERATED

    return vars.output;
};
