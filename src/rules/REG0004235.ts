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

export const REG0004235: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0004235
    // REQUEST:
    // """
    // #1
    // COND:
    // ( §NR_GAM_SCA >#0  ) AND ( §NR_GAM_SCA >=§NR_SCA_PLUV_TEL )
    // THEN:
    // *SET *CF= [ §NR_GAM_SCA - §NR_SCA_PLUV_TEL ]
    // ELSE:
    // *SET *LG=''
    // #2
    // COND:
    // §NR_GAM_SCA >=§NR_SCA_PLUV_TEL
    // THEN:
    // *SET *CF= [ §NR_GAM_SCA - §NR_SCA_PLUV_TEL ]
    // ELSE:
    // *SET *LG=''
    // """
    // RESPONSE:
    //#1
    if ((vars.get('§NR_GAM_SCA') > 0) && (vars.get('§NR_GAM_SCA') >= vars.get('§NR_SCA_PLUV_TEL'))) {
        vars.setCF(vars.get('§NR_GAM_SCA') - vars.get('§NR_SCA_PLUV_TEL'));
    } else {
        vars.setLG('');
    }
    
    //#2
    if (vars.get('§NR_GAM_SCA') >= vars.get('§NR_SCA_PLUV_TEL')) {
        vars.setCF(vars.get('§NR_GAM_SCA') - vars.get('§NR_SCA_PLUV_TEL'));
    } else {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
