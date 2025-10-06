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

export const REG0003594: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0003594
    // REQUEST:
    // """
    // #1
    // COND:
    // (( §FIX_MED_100='03' ) OR ( §FIX_MED_100_2='03' ))
    // ELSE:
    // *SET *LG=''
    // #2
    // COND:
    // §FIX_MED_100='03'
    // THEN:
    // *SET *CF=§NR_SUP_MED_100
    // #3
    // COND:
    // §FIX_MED_100_2='03'
    // THEN:
    // *SET *CF=§NR_SUP_MED_1002
    // #4
    // COND:
    // ((§FIX_MED_100='03') AND (§FIX_MED_100_2='03'))
    // THEN:
    // *SET *CF=[ §NR_SUP_MED_100 + §NR_SUP_MED_1002 ]
    // """
    // RESPONSE:
    //#1
    if ((vars.get('§FIX_MED_100') == '03') || (vars.get('§FIX_MED_100_2') == '03')) {
    } else {
        vars.setLG('');
    }
    
    //#2
    if (vars.get('§FIX_MED_100') == '03') {
        vars.setCF(vars.get('§NR_SUP_MED_100'));
    }
    
    //#3
    if (vars.get('§FIX_MED_100_2') == '03') {
        vars.setCF(vars.get('§NR_SUP_MED_1002'));
    }
    
    //#4
    if ((vars.get('§FIX_MED_100') == '03') && (vars.get('§FIX_MED_100_2') == '03')) {
        vars.setCF(vars.get('§NR_SUP_MED_100') + vars.get('§NR_SUP_MED_1002'));
    }
    
    // GENERATED

    return vars.output;
};
