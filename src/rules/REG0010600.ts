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

export const REG0010600: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0010600
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET §DUMMYB1 = ''
    // #2
    // COND:
    // §SPESS_VETRO_MM = '10' AND §VE_TIPO_VETRO = '1' AND §Q_PANN_CENTR > #0
    // THEN:
    // *SET *CF = §Q_PANN_CENTR
    // *SET *CON-A = 'VT00'
    // *SET *CON-B = [ §VE_LARG_PANNEL2 / #10 ]
    // *SET §DUMMYB1 = §SI
    // #3
    // COND:
    // §SPESS_VETRO_MM = '10' AND §VE_TIPO_VETRO = 'S' AND §Q_PANN_CENTR > #0
    // THEN:
    // *SET *CF = §Q_PANN_CENTR
    // *SET *CON-A = 'VT01'
    // *SET *CON-B = [ §VE_LARG_PANNEL2 / #10 ]
    // *SET §DUMMYB1 = §SI
    // #4
    // COND:
    // §SPESS_VETRO_MM = '10' AND §VE_TIPO_VETRO = 'E' AND §Q_PANN_CENTR > #0
    // THEN:
    // *SET *CF = §Q_PANN_CENTR
    // *SET *CON-A = 'VT02'
    // *SET *CON-B = [ §VE_LARG_PANNEL2 / #10 ]
    // *SET §DUMMYB1 = §SI
    // #5
    // COND:
    // §SPESS_VETRO_MM = '10' AND §VE_TIPO_VETRO = 'A' AND §Q_PANN_CENTR > #0
    // THEN:
    // *SET *CF = §Q_PANN_CENTR
    // *SET *CON-A = 'VT03'
    // *SET *CON-B = [ §VE_LARG_PANNEL2 / #10 ]
    // *SET §DUMMYB1 = §SI
    // #6
    // COND:
    // §DUMMYB1 = ''
    // THEN:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    vars.setDUMMYB1('');
    
    //#2
    if (vars.get('§SPESS_VETRO_MM') == '10' && vars.get('§VE_TIPO_VETRO') == '1' && vars.get('§Q_PANN_CENTR') > 0) {
        vars.setCF(vars.get('§Q_PANN_CENTR'));
        vars.setCON_A('VT00');
        vars.setCON_B(vars.get('§VE_LARG_PANNEL2') / 10);
        vars.setDUMMYB1(vars.get('§SI'));
    }
    
    //#3
    if (vars.get('§SPESS_VETRO_MM') == '10' && vars.get('§VE_TIPO_VETRO') == 'S' && vars.get('§Q_PANN_CENTR') > 0) {
        vars.setCF(vars.get('§Q_PANN_CENTR'));
        vars.setCON_A('VT01');
        vars.setCON_B(vars.get('§VE_LARG_PANNEL2') / 10);
        vars.setDUMMYB1(vars.get('§SI'));
    }
    
    //#4
    if (vars.get('§SPESS_VETRO_MM') == '10' && vars.get('§VE_TIPO_VETRO') == 'E' && vars.get('§Q_PANN_CENTR') > 0) {
        vars.setCF(vars.get('§Q_PANN_CENTR'));
        vars.setCON_A('VT02');
        vars.setCON_B(vars.get('§VE_LARG_PANNEL2') / 10);
        vars.setDUMMYB1(vars.get('§SI'));
    }
    
    //#5
    if (vars.get('§SPESS_VETRO_MM') == '10' && vars.get('§VE_TIPO_VETRO') == 'A' && vars.get('§Q_PANN_CENTR') > 0) {
        vars.setCF(vars.get('§Q_PANN_CENTR'));
        vars.setCON_A('VT03');
        vars.setCON_B(vars.get('§VE_LARG_PANNEL2') / 10);
        vars.setDUMMYB1(vars.get('§SI'));
    }
    
    //#6
    if (vars.get('§DUMMYB1') == '') {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
