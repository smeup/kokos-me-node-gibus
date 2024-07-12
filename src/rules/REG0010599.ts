/**
 * This rule represents a template implementation of a rule.
 * It takes an input value and performs some operations on it using the Variables class.
 * The result is returned as the output value.
 * 
 * @param iv The input value for the rule.
 * @returns The output value after applying the rule.
 */
import { Rule } from "../types/general.js";
import { Variables } from "../converter/variables.js";

export const REG0010599: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0010599
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET §DUMMYB1 = ''
    // #2
    // COND:
    // §SPESS_VETRO_MM = '12' AND §VE_TIPO_VETRO = '1' AND §Q_PANN_LAT > #0
    // THEN:
    // *SET *CF = §Q_PANN_LAT
    // *SET *CON-A = 'VT00'
    // *SET *CON-B = [ §VE_LARG_PANNELL / #10 ]
    // *SET §DUMMYB1 = §SI
    // #3
    // COND:
    // §SPESS_VETRO_MM = '12' AND §VE_TIPO_VETRO = 'S' AND §Q_PANN_LAT > #0
    // THEN:
    // *SET *CF = §Q_PANN_LAT
    // *SET *CON-A = 'VT01'
    // *SET *CON-B = [ §VE_LARG_PANNELL / #10 ]
    // *SET §DUMMYB1 = §SI
    // #4
    // COND:
    // §SPESS_VETRO_MM = '12' AND §VE_TIPO_VETRO = 'E' AND §Q_PANN_LAT > #0
    // THEN:
    // *SET *CF = §Q_PANN_LAT
    // *SET *CON-A = 'VT02'
    // *SET *CON-B = [ §VE_LARG_PANNELL / #10 ]
    // *SET §DUMMYB1 = §SI
    // #5
    // COND:
    // §SPESS_VETRO_MM = '12' AND §VE_TIPO_VETRO = 'A' AND §Q_PANN_LAT > #0
    // THEN:
    // *SET §DUMMYB1 = §SI
    // *SET *CON-A = 'VT03'
    // *SET *CON-B = [ §VE_LARG_PANNELL / #10 ]
    // *SET *CF = §Q_PANN_LAT
    // #6
    // COND:
    // §DUMMYB1 = ''
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    vars.setDUMMYB1('');
    
    //#2
    if (vars.get('§SPESS_VETRO_MM') == '12' && vars.get('§VE_TIPO_VETRO') == '1' && vars.get('§Q_PANN_LAT') > 0) {
        vars.setCF(vars.get('§Q_PANN_LAT'));
        vars.setCON_A('VT00');
        vars.setCON_B(vars.get('§VE_LARG_PANNELL') / 10);
        vars.setDUMMYB1(vars.get('§SI'));
    }
    
    //#3
    if (vars.get('§SPESS_VETRO_MM') == '12' && vars.get('§VE_TIPO_VETRO') == 'S' && vars.get('§Q_PANN_LAT') > 0) {
        vars.setCF(vars.get('§Q_PANN_LAT'));
        vars.setCON_A('VT01');
        vars.setCON_B(vars.get('§VE_LARG_PANNELL') / 10);
        vars.setDUMMYB1(vars.get('§SI'));
    }
    
    //#4
    if (vars.get('§SPESS_VETRO_MM') == '12' && vars.get('§VE_TIPO_VETRO') == 'E' && vars.get('§Q_PANN_LAT') > 0) {
        vars.setCF(vars.get('§Q_PANN_LAT'));
        vars.setCON_A('VT02');
        vars.setCON_B(vars.get('§VE_LARG_PANNELL') / 10);
        vars.setDUMMYB1(vars.get('§SI'));
    }
    
    //#5
    if (vars.get('§SPESS_VETRO_MM') == '12' && vars.get('§VE_TIPO_VETRO') == 'A' && vars.get('§Q_PANN_LAT') > 0) {
        vars.setDUMMYB1(vars.get('§SI'));
        vars.setCON_A('VT03');
        vars.setCON_B(vars.get('§VE_LARG_PANNELL') / 10);
        vars.setCF(vars.get('§Q_PANN_LAT'));
    }
    
    //#6
    if (vars.get('§DUMMYB1') == '') {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
