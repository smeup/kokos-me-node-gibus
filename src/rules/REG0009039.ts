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

export const REG0009039: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0009039
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET §DUMMYB1 = ''
    // *SET §DUMMYB2 = ''
    // *SET §DUMMYB3 = ''
    // #2
    // COND:
    // §VR_LAM_ABB <> ''
    // THEN:
    // *SET *CON-A = §VR_LAM_ABB
    // ELSE:
    // *SET *CON-A = §VERN_1_COM
    // #3
    // COND:
    // §FS_FAM2_ZENIT = §SI
    // THEN:
    // *SET *CF = #1
    // *SET *CON-B = [ §LARG - #22,7 ]
    // #4
    // COND:
    // §VR_ABB_T01 <> ''
    // THEN:
    // *SET *CON-A = §VR_ABB_T01
    // #5
    // COND:
    // §VERN_1_COM = '0133'
    // THEN:
    // *SET *CON-A = '0230'
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setDUMMYB1('');
    vars.setDUMMYB2('');
    vars.setDUMMYB3('');
    
    //#2
    if (vars.get('§VR_LAM_ABB') != '') {
        vars.setCON_A(vars.get('§VR_LAM_ABB'));
    } else {
        vars.setCON_A(vars.get('§VERN_1_COM'));
    }
    
    //#3
    if (vars.get('§FS_FAM2_ZENIT') == vars.get('§SI')) {
        vars.setCF(1);
        vars.setCON_B(vars.get('§LARG') - 22.7);
    }
    
    //#4
    if (vars.get('§VR_ABB_T01') != '') {
        vars.setCON_A(vars.get('§VR_ABB_T01'));
    }
    
    //#5
    if (vars.get('§VERN_1_COM') == '0133') {
        vars.setCON_A('0230');
    }
    // GENERATED

    return vars.output;
};
