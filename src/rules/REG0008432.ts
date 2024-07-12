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

export const REG0008432: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0008432
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A = §VERN_BRACCI
    // *SET *CON-B = §SPOR_TS
    // *SET *CF = #0
    // #2
    // COND:
    // §FS_TXT = §SI AND §FS_OPT_VOL = §SI AND §FS_LED_FRO = §SI
    // THEN:
    // *SET *LG = ''
    // #3
    // COND:
    // §VER_BRA_T01 = '2021'
    // THEN:
    // *SET *LG = ''
    // #4
    // THEN:
    // *SET §DUMMYB1 = ''
    // *SET §DUMMYB2 = ''
    // #5
    // COND:
    // §FS_TXT = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #6
    // COND:
    // §FS_NODO = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #7
    // COND:
    // §FS_SEGNO = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #8
    // COND:
    // §FS_SPA_75 = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #9
    // COND:
    // *CON-A = '0055' OR *CON-A = '0053' OR *CON-A = '0069' OR *CON-A = '0073' OR *CON-A = '0076'
    // THEN:
    // *SET §DUMMYB2 = §SI
    // #10
    // COND:
    // *CON-A = '0073' AND ( §SPOR = #200 OR §SPOR = #250 OR §SPOR = #300 OR §SPOR = #350  OR §SPOR = #400 )
    // THEN:
    // *SET §DUMMYB2 = ''
    // #11
    // COND:
    // *CON-A = '0053' AND ( §SPOR = #250 OR §SPOR = #300 OR §SPOR = #350 OR §SPOR = #400)
    // THEN:
    // *SET §DUMMYB2 = ''
    // #12
    // COND:
    // *CON-A = '0076' AND ( §SPOR = #350 OR §SPOR = #300 OR §SPOR = #400 OR §SPOR = #250 OR §SPOR = #200)
    // THEN:
    // *SET §DUMMYB2 = ''
    // #13
    // COND:
    // *CON-A = '0069' AND (  §SPOR = #200 OR §SPOR = #250 OR §SPOR = #300 OR §SPOR = #350 OR §SPOR = #400 )
    // THEN:
    // *SET §DUMMYB2 = ''
    // #14
    // COND:
    // *CON-A = '0055'
    // THEN:
    // *SET §DUMMYB2 = ''
    // #15
    // COND:
    // §DUMMYB1 = §SI AND §DUMMYB2 = §SI
    // THEN:
    // *SET *CF = #1
    // #16
    // COND:
    // §FS_SPA_75 = §SI
    // THEN:
    // *SET *CF = #0
    // #17
    // COND:
    // §FS_DIDUE = §SI
    // THEN:
    // *SET *CF = #0
    // #18
    // COND:
    // §FS_TXT = §SI
    // THEN:
    // *SET *CF = #0
    // #19
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    vars.setCON_A(vars.get('§VERN_BRACCI'));
    vars.setCON_B(vars.get('§SPOR_TS'));
    vars.setCF(0);
    
    //#2
    if (vars.get('§FS_TXT') == vars.get('§SI') && vars.get('§FS_OPT_VOL') == vars.get('§SI') && vars.get('§FS_LED_FRO') == vars.get('§SI')) {
        vars.setLG('');
    }
    
    //#3
    if (vars.get('§VER_BRA_T01') == '2021') {
        vars.setLG('');
    }
    
    //#4
    vars.setDUMMYB1('');
    vars.setDUMMYB2('');
    
    //#5
    if (vars.get('§FS_TXT') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    
    //#6
    if (vars.get('§FS_NODO') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    
    //#7
    if (vars.get('§FS_SEGNO') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    
    //#8
    if (vars.get('§FS_SPA_75') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    
    //#9
    if (vars.getCON_A() == '0055' || vars.getCON_A() == '0053' || vars.getCON_A() == '0069' || vars.getCON_A() == '0073' || vars.getCON_A() == '0076') {
        vars.setDUMMYB2(vars.get('§SI'));
    }
    
    //#10
    if (vars.getCON_A() == '0073' && (vars.get('§SPOR') == 200 || vars.get('§SPOR') == 250 || vars.get('§SPOR') == 300 || vars.get('§SPOR') == 350 || vars.get('§SPOR') == 400)) {
        vars.setDUMMYB2('');
    }
    
    //#11
    if (vars.getCON_A() == '0053' && (vars.get('§SPOR') == 250 || vars.get('§SPOR') == 300 || vars.get('§SPOR') == 350 || vars.get('§SPOR') == 400)) {
        vars.setDUMMYB2('');
    }
    
    //#12
    if (vars.getCON_A() == '0076' && (vars.get('§SPOR') == 350 || vars.get('§SPOR') == 300 || vars.get('§SPOR') == 400 || vars.get('§SPOR') == 250 || vars.get('§SPOR') == 200)) {
        vars.setDUMMYB2('');
    }
    
    //#13
    if (vars.getCON_A() == '0069' && (vars.get('§SPOR') == 200 || vars.get('§SPOR') == 250 || vars.get('§SPOR') == 300 || vars.get('§SPOR') == 350 || vars.get('§SPOR') == 400)) {
        vars.setDUMMYB2('');
    }
    
    //#14
    if (vars.getCON_A() == '0055') {
        vars.setDUMMYB2('');
    }
    
    //#15
    if (vars.get('§DUMMYB1') == vars.get('§SI') && vars.get('§DUMMYB2') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#16
    if (vars.get('§FS_SPA_75') == vars.get('§SI')) {
        vars.setCF(0);
    }
    
    //#17
    if (vars.get('§FS_DIDUE') == vars.get('§SI')) {
        vars.setCF(0);
    }
    
    //#18
    if (vars.get('§FS_TXT') == vars.get('§SI')) {
        vars.setCF(0);
    }
    
    //#19
    vars.setCF(0);
    // GENERATED

    return vars.output;
};
