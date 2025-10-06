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

export const REG0003983: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0003983
    // REQUEST:
    // """
    // #1
    // COND:
    // ( §FS_TIPO_LED='03' ) AND ( §NR_CAV_DER_B > #0 )
    // THEN:
    // *SET *CF = §NR_CAV_DER_B
    // ELSE:
    // *SET *LG=''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_TIPO_LED') == '03' && vars.get('§NR_CAV_DER_B') > 0) {
        vars.setCF(vars.get('§NR_CAV_DER_B'));
    } else {
        vars.setLG('');
    }
    
    // GENERATED

    return vars.output;
};
