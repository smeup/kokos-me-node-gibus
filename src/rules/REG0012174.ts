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

export const REG0012174: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0012174
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET §DUMMYB1 = ''
    // *SET §DUMMYB2 = ''
    // #2
    // COND:
    // §FS_SPA_60 = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #3
    // COND:
    // §FS_SPA_75 = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #4
    // COND:
    // §FS_COMBI_60 = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #5
    // COND:
    // §TIPO_SENS_VENTO = '250027'
    // THEN:
    // *SET §DUMMYB2 = §SI
    // #6
    // COND:
    // §TIPO_SENS_VENTO = '250028'
    // THEN:
    // *SET §DUMMYB2 = §SI
    // #7
    // COND:
    // §TIPO_SENS_VENTO = '250043'
    // THEN:
    // *SET §DUMMYB2 = §SI
    // #8
    // COND:
    // §FS_PRE_T01 = §SI
    // THEN:
    // *SET §DUMMYB2 = §SI
    // #9
    // COND:
    // §DUMMYB1 = §SI AND §DUMMYB2 = §SI
    // THEN:
    // *SET *CF = #1
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setDUMMYB1('');
    vars.setDUMMYB2('');
    
    //#2
    if (vars.get('§FS_SPA_60') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    
    //#3
    if (vars.get('§FS_SPA_75') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    
    //#4
    if (vars.get('§FS_COMBI_60') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    
    //#5
    if (vars.get('§TIPO_SENS_VENTO') == '250027') {
        vars.setDUMMYB2(vars.get('§SI'));
    }
    
    //#6
    if (vars.get('§TIPO_SENS_VENTO') == '250028') {
        vars.setDUMMYB2(vars.get('§SI'));
    }
    
    //#7
    if (vars.get('§TIPO_SENS_VENTO') == '250043') {
        vars.setDUMMYB2(vars.get('§SI'));
    }
    
    //#8
    if (vars.get('§FS_PRE_T01') == vars.get('§SI')) {
        vars.setDUMMYB2(vars.get('§SI'));
    }
    
    //#9
    if (vars.get('§DUMMYB1') == vars.get('§SI') && vars.get('§DUMMYB2') == vars.get('§SI')) {
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
