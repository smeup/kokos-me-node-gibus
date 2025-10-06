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

export const REG0004573: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0004573
    // REQUEST:
    // """
    // #1
    // COND:
    // ( §SPESS_VETRO_MM='12' ) AND ( §VE_TIPO_VETRO='E' )
    // THEN:
    // *SET *CF= [ §N_ANTE ]
    // ELSE:
    // *SET *LG=''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§SPESS_VETRO_MM') == '12' && vars.get('§VE_TIPO_VETRO') == 'E') {
        vars.setCF(vars.get('§N_ANTE'));
    } else {
        vars.setLG('');
    }
    
    // GENERATED

    return vars.output;
};
