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

export const REG0011749: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0011749
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET §DUMMYB1 = ''
    // *SET §DUMMYB2 = ''
    // *SET *CON-A = §VERN_BRACCI
    // #2
    // COND:
    // §FS_DIM_250 = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #3
    // COND:
    // §FS_COMBI_250 = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #4
    // THEN:
    // *SET §DUMMYB2 = §SI
    // #5
    // COND:
    // *CON-A = '0293' OR *CON-A = '0073' OR *CON-A = '0076'
    // THEN:
    // *SET §DUMMYB2 = ''
    // #6
    // COND:
    // *CON-A = '0053' OR *CON-A = '0055'  OR *CON-A = '0065' OR *CON-A = '0069' OR *CON-A = '0070'
    // THEN:
    // *SET §DUMMYB2 = ''
    // #7
    // COND:
    // *CON-A = '0070' AND ( *CON-B = #300)
    // THEN:
    // *SET §DUMMYB2 = §SI
    // #8
    // COND:
    // *CON-A = '0076' AND ( *CON-B = #250 OR *CON-B = #300)
    // THEN:
    // *SET §DUMMYB2 = §SI
    // #9
    // COND:
    // *CON-A = '0055' AND ( *CON-B = #200 OR *CON-B = #225 OR *CON-B = #250  OR *CON-B = #300)
    // THEN:
    // *SET §DUMMYB2 = §SI
    // #10
    // COND:
    // §DUMMYB1 = §SI AND §DUMMYB2 = §SI
    // THEN:
    // *SET *CF = #1
    // #11
    // COND:
    // §FS_SPA_60 = §SI
    // THEN:
    // *SET *CF = #1
    // #12
    // COND:
    // §FS_COMBI_60 = §SI
    // THEN:
    // *SET *CF = #1
    // #13
    // COND:
    // §FS_DUCK = §SI
    // THEN:
    // *SET *CF = #1
    // #14
    // COND:
    // §FS_SCRIGNO_250 = §SI
    // THEN:
    // *SET *CF = #1
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setDUMMYB1('');
    vars.setDUMMYB2('');
    vars.setCON_A(vars.get('§VERN_BRACCI'));
    
    //#2
    if (vars.get('§FS_DIM_250') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    
    //#3
    if (vars.get('§FS_COMBI_250') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    
    //#4
    vars.setDUMMYB2(vars.get('§SI'));
    
    //#5
    if (vars.getCON_A() == '0293' || vars.getCON_A() == '0073' || vars.getCON_A() == '0076') {
        vars.setDUMMYB2('');
    }
    
    //#6
    if (vars.getCON_A() == '0053' || vars.getCON_A() == '0055' || vars.getCON_A() == '0065' || vars.getCON_A() == '0069' || vars.getCON_A() == '0070') {
        vars.setDUMMYB2('');
    }
    
    //#7
    if (vars.getCON_A() == '0070' && vars.getCON_B() == 300) {
        vars.setDUMMYB2(vars.get('§SI'));
    }
    
    //#8
    if (vars.getCON_A() == '0076' && (vars.getCON_B() == 250 || vars.getCON_B() == 300)) {
        vars.setDUMMYB2(vars.get('§SI'));
    }
    
    //#9
    if (vars.getCON_A() == '0055' && (vars.getCON_B() == 200 || vars.getCON_B() == 225 || vars.getCON_B() == 250 || vars.getCON_B() == 300)) {
        vars.setDUMMYB2(vars.get('§SI'));
    }
    
    //#10
    if (vars.get('§DUMMYB1') == vars.get('§SI') && vars.get('§DUMMYB2') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#11
    if (vars.get('§FS_SPA_60') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#12
    if (vars.get('§FS_COMBI_60') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#13
    if (vars.get('§FS_DUCK') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#14
    if (vars.get('§FS_SCRIGNO_250') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    // GENERATED

    return vars.output;
};
