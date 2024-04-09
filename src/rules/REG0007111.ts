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

export const REG0007111: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0007111
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_BASE=§SI
    // THEN:
    // *SET *CON-A = §VERN_1_COM
    // *SET *CON-B= [ §LARG - #13 ]
    // ELSE:
    // *SET *LG=''
    // #2
    // COND:
    // §FS_ULT_ARC_RINF<>§SI
    // THEN:
    // *SET *CF=§NR_RAGGI
    // ELSE:
    // *SET *CF= [ §NR_RAGGI - #1 ]
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_BASE') == vars.get('§SI')) {
        vars.setCON_A(vars.get('§VERN_1_COM'));
        vars.setCON_B(vars.get('§LARG') - 13);
    } else {
        vars.setLG('');
    }
    
    //#2
    if (vars.get('§FS_ULT_ARC_RINF') != vars.get('§SI')) {
        vars.setCF(vars.get('§NR_RAGGI'));
    } else {
        vars.setCF(vars.get('§NR_RAGGI') - 1);
    }
    // GENERATED

    return vars.output;
};
