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

export const REG0009452: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0009452
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET §DUMMYB1 = ''
    // *SET §DUMMYB2 = ''
    // *SET §DUMMYN1 = #0
    // #2
    // THEN:
    // *SET *CON-A = 'P072'
    // #3
    // COND:
    // §FS_NODO = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // *SET §DUMMYN1 = #10,3
    // #4
    // COND:
    // §FS_SEGNO = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // *SET §DUMMYN1 = #3,8
    // #5
    // COND:
    // §FS_LED_FRO = §SI OR §FS_LED_BRA = §SI
    // THEN:
    // *SET §DUMMYB2 = §SI
    // #6
    // COND:
    // §DUMMYB1 = §SI AND §DUMMYB2 = §SI
    // THEN:
    // *SET *CF = #1
    // *SET *CON-B = [§LARG - §DUMMYN1]
    // #7
    // THEN:
    // *SET §DUMMYB1 = ''
    // *SET §DUMMYB2 = ''
    // #8
    // COND:
    // §FS_TXT = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // *SET §DUMMYN1 = #10
    // #9
    // COND:
    // §FS_LED_FRO = §SI OR §FS_LED_BRA = §SI
    // THEN:
    // *SET §DUMMYB2 = §SI
    // #10
    // COND:
    // §FS_OPT_VOL = §SI
    // THEN:
    // *SET §DUMMYB2 = §SI
    // #11
    // COND:
    // §DUMMYB1 = §SI AND §DUMMYB2 = §SI
    // THEN:
    // *SET *CF = #1
    // *SET *CON-B = [§LARG - §DUMMYN1]
    // #12
    // COND:
    // §VR_ABB = '01'
    // THEN:
    // *SET *CON-A = 'P055'
    // #13
    // COND:
    // §VR_ABB = '02'
    // THEN:
    // *SET *CON-A = 'P055'
    // #14
    // COND:
    // §VR_ABB = '03'
    // THEN:
    // *SET *CON-A = 'P055'
    // #15
    // COND:
    // §VERN_1_COM = '0121' OR §VERN_1_COM = '0621' OR §VERN_1_COM = '0127'
    // THEN:
    // *SET *CON-A = 'P072'
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setDUMMYB1("");
    vars.setDUMMYB2("");
    vars.setDUMMYN1(0);
    
    //#2
    vars.setCON_A("P072");
    
    //#3
    if (vars.get('§FS_NODO') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
        vars.setDUMMYN1(10.3);
    }
    
    //#4
    if (vars.get('§FS_SEGNO') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
        vars.setDUMMYN1(3.8);
    }
    
    //#5
    if (vars.get('§FS_LED_FRO') == vars.get('§SI') || vars.get('§FS_LED_BRA') == vars.get('§SI')) {
        vars.setDUMMYB2(vars.get('§SI'));
    }
    
    //#6
    if (vars.get('§DUMMYB1') == vars.get('§SI') && vars.get('§DUMMYB2') == vars.get('§SI')) {
        vars.setCF(1);
        vars.setCON_B(vars.get('§LARG') - vars.get('§DUMMYN1'));
    }
    
    //#7
    vars.setDUMMYB1("");
    vars.setDUMMYB2("");
    
    //#8
    if (vars.get('§FS_TXT') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
        vars.setDUMMYN1(10);
    }
    
    //#9
    if (vars.get('§FS_LED_FRO') == vars.get('§SI') || vars.get('§FS_LED_BRA') == vars.get('§SI')) {
        vars.setDUMMYB2(vars.get('§SI'));
    }
    
    //#10
    if (vars.get('§FS_OPT_VOL') == vars.get('§SI')) {
        vars.setDUMMYB2(vars.get('§SI'));
    }
    
    //#11
    if (vars.get('§DUMMYB1') == vars.get('§SI') && vars.get('§DUMMYB2') == vars.get('§SI')) {
        vars.setCF(1);
        vars.setCON_B(vars.get('§LARG') - vars.get('§DUMMYN1'));
    }
    
    //#12
    if (vars.get('§VR_ABB') == '01') {
        vars.setCON_A("P055");
    }
    
    //#13
    if (vars.get('§VR_ABB') == '02') {
        vars.setCON_A("P055");
    }
    
    //#14
    if (vars.get('§VR_ABB') == '03') {
        vars.setCON_A("P055");
    }
    
    //#15
    if (vars.get('§VERN_1_COM') == '0121' || vars.get('§VERN_1_COM') == '0621' || vars.get('§VERN_1_COM') == '0127') {
        vars.setCON_A("P072");
    }
    // GENERATED

    return vars.output;
};
