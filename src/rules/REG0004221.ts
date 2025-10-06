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

export const REG0004221: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0004221
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A='P072'
    // #2
    // COND:
    // §VERN_FRANGI='0053'
    // THEN:
    // *SET *CON-A='P053'
    // #3
    // COND:
    // §VERN_FRANGI='0055'
    // THEN:
    // *SET *CON-A='P055'
    // #4
    // COND:
    // ( §FRONTALE_ANT1 > #0 )
    // THEN:
    // *SET §DUMMYN1 =[ §FRONTALE_ANT1 + #3 ]
    // #5
    // COND:
    // ( §FRONTALE_ANT1 > #0 )
    // THEN:
    // *SET *CF = [§DUMMYN1/#100 ]
    // #6
    // COND:
    // ( §FRONTALE_ANT1 > #0 ) AND (§FRONTALE_ANT2 > #0 )
    // THEN:
    // *SET §DUMMYN1 =[ §FRONTALE_ANT1 +§FRONTALE_ANT2 + #6 ]
    // #7
    // COND:
    // ( §FRONTALE_ANT1 > #0 ) AND (§FRONTALE_ANT2 > #0 )
    // THEN:
    // *SET *CF= [§DUMMYN1 / #100 ]
    // #8
    // COND:
    // ( §FRONTALE_ANT1 > #0 ) AND (§FRONTALE_ANT2 > #0 ) AND (§FRONTALE_ANT3 > #0 )
    // THEN:
    // *SET §DUMMYN1= [§FRONTALE_ANT1 + §FRONTALE_ANT2 + §FRONTALE_ANT3 + #9 ]
    // #9
    // COND:
    // ( §FRONTALE_ANT1 > #0 ) AND (§FRONTALE_ANT2 > #0 ) AND (§FRONTALE_ANT3 > #0 )
    // THEN:
    // *SET *CF= [ §DUMMYN1/#100 ]
    // """
    // RESPONSE:
    //#1
    vars.setCON_A('P072');
    
    //#2
    if (vars.get('§VERN_FRANGI') == '0053') {
        vars.setCON_A('P053');
    }
    
    //#3
    if (vars.get('§VERN_FRANGI') == '0055') {
        vars.setCON_A('P055');
    }
    
    //#4
    if (vars.get('§FRONTALE_ANT1') > 0) {
        vars.setDUMMYN1(vars.get('§FRONTALE_ANT1') + 3);
    }
    
    //#5
    if (vars.get('§FRONTALE_ANT1') > 0) {
        vars.setCF(vars.get('§DUMMYN1') / 100);
    }
    
    //#6
    if (vars.get('§FRONTALE_ANT1') > 0 && vars.get('§FRONTALE_ANT2') > 0) {
        vars.setDUMMYN1(vars.get('§FRONTALE_ANT1') + vars.get('§FRONTALE_ANT2') + 6);
    }
    
    //#7
    if (vars.get('§FRONTALE_ANT1') > 0 && vars.get('§FRONTALE_ANT2') > 0) {
        vars.setCF(vars.get('§DUMMYN1') / 100);
    }
    
    //#8
    if (vars.get('§FRONTALE_ANT1') > 0 && vars.get('§FRONTALE_ANT2') > 0 && vars.get('§FRONTALE_ANT3') > 0) {
        vars.setDUMMYN1(vars.get('§FRONTALE_ANT1') + vars.get('§FRONTALE_ANT2') + vars.get('§FRONTALE_ANT3') + 9);
    }
    
    //#9
    if (vars.get('§FRONTALE_ANT1') > 0 && vars.get('§FRONTALE_ANT2') > 0 && vars.get('§FRONTALE_ANT3') > 0) {
        vars.setCF(vars.get('§DUMMYN1') / 100);
    }
    // GENERATED

    return vars.output;
};
