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

export const REG0008168: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0008168
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_FAM2_FLY=§SI
    // THEN:
    // *SET *CON-A=§VERN_1_COM
    // *SET *CON-B= [ §SPOR_FLY - #34,5 ]
    // *SET *CF= [ §N_MODULI + #1 ]
    // ELSE:
    // *SET *LG=''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_FAM2_FLY') == vars.get('§SI')) {
        vars.setCON_A(vars.get('§VERN_1_COM'));
        vars.setCON_B(vars.get('§SPOR_FLY') - 34.5);
        vars.setCF(vars.get('§N_MODULI') + 1);
    } else {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
