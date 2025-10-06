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

export const REG0007114: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0007114
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_BASE=§SI
    // THEN:
    // *SET *CON-A = §VERN_1_COM
    // *SET *CON-B = [ §SPOR - #13 ]
    // *SET *CF = [ §NR_RAGGI * #2 ]
    // ELSE:
    // *SET *LG=''
    // #2
    // COND:
    // ( §VERN_1_COM='0055' ) AND ( ( §SPOR=#90 ) OR ( §SPOR=#100 ) OR ( §SPOR=#110 ) OR ( §SPOR=#120 ) )
    // THEN:
    // *SET *CF=#0
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_BASE') == vars.get('§SI')) {
        vars.setCON_A(vars.get('§VERN_1_COM'));
        vars.setCON_B(vars.get('§SPOR') - 13);
        vars.setCF(vars.get('§NR_RAGGI') * 2);
    } else {
        vars.setLG('');
    }
    
    //#2
    if (vars.get('§VERN_1_COM') == '0055' && (vars.get('§SPOR') == 90 || vars.get('§SPOR') == 100 || vars.get('§SPOR') == 110 || vars.get('§SPOR') == 120)) {
        vars.setCF(0);
    }
    
    // GENERATED

    return vars.output;
};
