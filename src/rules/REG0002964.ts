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

export const REG0002964: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0002964
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_RUL_85_LIS = §SI
    // ELSE:
    // *SET *LG = ''
    // #2
    // THEN:
    // *SET *CF = #0
    // #3
    // COND:
    // §FS_FAM2_TOLO = §SI
    // THEN:
    // *SET *CF = #1
    // #4
    // COND:
    // §FS_DIDUE = §SI
    // THEN:
    // *SET *CF = #1
    // #5
    // COND:
    // §FS_SEGNO = §SI
    // THEN:
    // *SET *CF = #1
    // #6
    // COND:
    // §FS_TXT = §SI
    // THEN:
    // *SET *CF = #1
    // #7
    // COND:
    // §FS_NODO = §SI
    // THEN:
    // *SET *CF = #1
    // #8
    // THEN:
    // *SET §DUMMYB1 = ''
    // #9
    // COND:
    // §FS_NODO = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #10
    // COND:
    // §FS_TXT = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #11
    // COND:
    // §FS_SEGNO = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #12
    // THEN:
    // *SET §DUMMYB2 = ''
    // #13
    // COND:
    // §FS_LED_CAS = §SI
    // THEN:
    // *SET §DUMMYB2 = §SI
    // #14
    // COND:
    // §FS_LED_FRO = §SI
    // THEN:
    // *SET §DUMMYB2 = §SI
    // #15
    // COND:
    // §FS_LED_BRA = §SI
    // THEN:
    // *SET §DUMMYB2 = §SI
    // #16
    // COND:
    // §DUMMYB1 = §SI AND §DUMMYB2 = §SI
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_RUL_85_LIS') == vars.get('§SI')) {
    } else {
        vars.setLG('');
    }
    
    //#2
    vars.setCF(0);
    
    //#3
    if (vars.get('§FS_FAM2_TOLO') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#4
    if (vars.get('§FS_DIDUE') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#5
    if (vars.get('§FS_SEGNO') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#6
    if (vars.get('§FS_TXT') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#7
    if (vars.get('§FS_NODO') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#8
    vars.setDUMMYB1('');
    
    //#9
    if (vars.get('§FS_NODO') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    
    //#10
    if (vars.get('§FS_TXT') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    
    //#11
    if (vars.get('§FS_SEGNO') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    
    //#12
    vars.setDUMMYB2('');
    
    //#13
    if (vars.get('§FS_LED_CAS') == vars.get('§SI')) {
        vars.setDUMMYB2(vars.get('§SI'));
    }
    
    //#14
    if (vars.get('§FS_LED_FRO') == vars.get('§SI')) {
        vars.setDUMMYB2(vars.get('§SI'));
    }
    
    //#15
    if (vars.get('§FS_LED_BRA') == vars.get('§SI')) {
        vars.setDUMMYB2(vars.get('§SI'));
    }
    
    //#16
    if (vars.get('§DUMMYB1') == vars.get('§SI') && vars.get('§DUMMYB2') == vars.get('§SI')) {
        vars.setCF(0);
    }
    
    // GENERATED

    return vars.output;
};
