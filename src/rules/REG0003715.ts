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

export const REG0003715: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0003715
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF=#0
    // #2
    // COND:
    // ( §FRONTALE_POS1 > #0 ) AND (§FRONTALE_POS2 = #0 )
    // THEN:
    // *SET *CON-A=§VR_PLA_TEL
    // *SET §DUMMYN1=[ §FRONTALE_POS1 ]
    // #3
    // COND:
    // ( §FRONTALE_POS1 > #0 ) AND (§FRONTALE_POS2 = #0 )
    // THEN:
    // *SET *CON-A=§VR_PLA_TEL
    // *SET *CF= [ §DUMMYN1/ #100 ]
    // #4
    // COND:
    // ( §FRONTALE_POS1 > #0 ) AND (§FRONTALE_POS2 > #0 )
    // THEN:
    // *SET *CON-A=§VR_PLA_TEL
    // *SET §DUMMYN1 = [ §FRONTALE_POS ]
    // #5
    // COND:
    // ( §FRONTALE_POS1 > #0 ) AND (§FRONTALE_POS2 > #0 )
    // THEN:
    // *SET *CON-A=§VR_PLA_TEL
    // *SET *CF= [ §DUMMYN1/#100 ]
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if ((vars.get('§FRONTALE_POS1') > 0) && (vars.get('§FRONTALE_POS2') == 0)) {
        vars.setCON_A(vars.get('§VR_PLA_TEL'));
        vars.setDUMMYN1(vars.get('§FRONTALE_POS1'));
    }
    
    //#3
    if ((vars.get('§FRONTALE_POS1') > 0) && (vars.get('§FRONTALE_POS2') == 0)) {
        vars.setCON_A(vars.get('§VR_PLA_TEL'));
        vars.setCF(vars.get('§DUMMYN1') / 100);
    }
    
    //#4
    if ((vars.get('§FRONTALE_POS1') > 0) && (vars.get('§FRONTALE_POS2') > 0)) {
        vars.setCON_A(vars.get('§VR_PLA_TEL'));
        vars.setDUMMYN1(vars.get('§FRONTALE_POS'));
    }
    
    //#5
    if ((vars.get('§FRONTALE_POS1') > 0) && (vars.get('§FRONTALE_POS2') > 0)) {
        vars.setCON_A(vars.get('§VR_PLA_TEL'));
        vars.setCF(vars.get('§DUMMYN1') / 100);
    }
    
    // GENERATED

    return vars.output;
};
