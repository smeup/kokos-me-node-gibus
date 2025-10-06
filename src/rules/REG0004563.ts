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

export const REG0004563: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0004563
    // REQUEST:
    // """
    // #1
    // COND:
    // §VE_RIPORTO_INF > #0
    // THEN:
    // *SET *CON-A='0000'
    // *SET *CON-B=§VE_RIPORTO_INF
    // *SET *CF=[ §VE_QRIPORT_INF ]
    // ELSE:
    // *SET *LG=''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§VE_RIPORTO_INF') > 0) {
        vars.setCON_A('0000');
        vars.setCON_B(vars.get('§VE_RIPORTO_INF'));
        vars.setCF(vars.get('§VE_QRIPORT_INF'));
    } else {
        vars.setLG('');
    }
    
    // GENERATED

    return vars.output;
};
