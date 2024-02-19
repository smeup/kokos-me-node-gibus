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

export const REG0004761: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0004761
    // REQUEST:
    // """
    // #1
    // COND:
    // ((§FIX_MED_100='04') OR (§FIX_MED_100_2='04'))
    // ELSE:
    // *SET *LG=''
    // #2
    // COND:
    // (§FIX_MED_100='04')
    // THEN:
    // *SET *CF=[ §NR_SUP_MED_100 ]
    // #3
    // COND:
    // §FIX_MED_100_2='04'
    // THEN:
    // *SET *CF = [ §NR_SUP_MED_1002 ]
    // #4
    // COND:
    // ( §FIX_MED_100='04' ) AND (§FIX_MED_100_2='04' )
    // THEN:
    // *SET *CF=[ §NR_SUP_MED_100 + §NR_SUP_MED_1002 ]
    // """
    // RESPONSE:
    //#1
    if ((vars.get('§FIX_MED_100') == '04') || (vars.get('§FIX_MED_100_2') == '04')) {
    } else {
        vars.setLG('');
    }
    
    //#2
    if (vars.get('§FIX_MED_100') == '04') {
        vars.setCF(vars.get('§NR_SUP_MED_100'));
    }
    
    //#3
    if (vars.get('§FIX_MED_100_2') == '04') {
        vars.setCF(vars.get('§NR_SUP_MED_1002'));
    }
    
    //#4
    if ((vars.get('§FIX_MED_100') == '04') && (vars.get('§FIX_MED_100_2') == '04')) {
        vars.setCF(vars.get('§NR_SUP_MED_100') + vars.get('§NR_SUP_MED_1002'));
    }
    
    // GENERATED

    return vars.output;
};
