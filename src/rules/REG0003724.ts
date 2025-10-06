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

export const REG0003724: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0003724
    // REQUEST:
    // """
    // #1
    // COND:
    // §P_INT1_IN_L > #0
    // THEN:
    // *SET *CF=[§P_INT1_IN_L /#100 ]
    // *SET *CON-A='P072'
    // ELSE:
    // *SET  *LG=''
    // #2
    // COND:
    // §VERN_1_COM='0055' OR §VR_ABB = '01'
    // THEN:
    // *SET *CON-A='P055'
    // #3
    // COND:
    // §VERN_1_COM='0053' OR §VR_ABB = '02'
    // THEN:
    // *SET *CON-A='P053'
    // """
    // RESPONSE:
    //#1
    if (vars.get('§P_INT1_IN_L') > 0) {
        vars.setCF(vars.get('§P_INT1_IN_L') / 100);
        vars.setCON_A('P072');
    } else {
        vars.setLG('');
    }
    
    //#2
    if (vars.get('§VERN_1_COM') == '0055' || vars.get('§VR_ABB') == '01') {
        vars.setCON_A('P055');
    }
    
    //#3
    if (vars.get('§VERN_1_COM') == '0053' || vars.get('§VR_ABB') == '02') {
        vars.setCON_A('P053');
    }
    // GENERATED

    return vars.output;
};
