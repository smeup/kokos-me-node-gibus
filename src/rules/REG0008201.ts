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

export const REG0008201: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0008201
    // REQUEST:
    // """
    // #1
    // COND:
    // ( §N_MODULI = #2 ) AND ( §FS_FAM2_ISOLA=§SI )
    // THEN:
    // *SET *CON-A=§VERN_1_COM
    // *SET *CON-B= [ §LARG_M2 - #8 ]
    // ELSE:
    // *SET *LG=''
    // """
    // RESPONSE:
    //#1
    if ((vars.get('§N_MODULI') == 2) && (vars.get('§FS_FAM2_ISOLA') == vars.get('§SI'))) {
        vars.setCON_A(vars.get('§VERN_1_COM'));
        vars.setCON_B(vars.get('§LARG_M2') - 8);
    } else {
        vars.setLG('');
    }
    
    // GENERATED

    return vars.output;
};
