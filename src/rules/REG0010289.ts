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

export const REG0010289: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0010289
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET §DUMMYB1 = ''
    // #2
    // COND:
    // §FS_SP_0_GC = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #3
    // COND:
    // §FS_TEKA_GC = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #4
    // THEN:
    // *SET *NT = 'DARE CAVO PER TENDA ALTA XXX'
    // #5
    // COND:
    // §PD_NT_LU_GC <> 'NO'
    // THEN:
    // *SET *NT = §PD_NT_LU_GC
    // #6
    // THEN:
    // *SET §DUMMYN1 = [ §ALTE_TC + §AUM_GUI_SX ]
    // #7
    // THEN:
    // *SET §DUMMYN2 = [ §ALTE_TC + §AUM_GUI_DX ]
    // #8
    // COND:
    // §DUMMYB1 = §SI
    // THEN:
    // *SET *CF = [§DUMMYN1  / #100 + #0,03 ]
    // #9
    // COND:
    // §DUMMYB1 = §SI AND §DUMMYN2 > §DUMMYN1
    // THEN:
    // *SET *CF = [§DUMMYN2  / #100 + #0,03 ]
    // #10
    // COND:
    // §DUMMYN1 <= #350 AND §DUMMYN2 <= #350
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setDUMMYB1('');
    
    //#2
    if (vars.get('§FS_SP_0_GC') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    
    //#3
    if (vars.get('§FS_TEKA_GC') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    
    //#4
    vars.setNT('DARE CAVO PER TENDA ALTA XXX');
    
    //#5
    if (vars.get('§PD_NT_LU_GC') != 'NO') {
        vars.setNT(vars.get('§PD_NT_LU_GC'));
    }
    
    //#6
    vars.setDUMMYN1(vars.get('§ALTE_TC') + vars.get('§AUM_GUI_SX'));
    
    //#7
    vars.setDUMMYN2(vars.get('§ALTE_TC') + vars.get('§AUM_GUI_DX'));
    
    //#8
    if (vars.get('§DUMMYB1') == vars.get('§SI')) {
        vars.setCF(vars.get('§DUMMYN1') / 100 + 0.03);
    }
    
    //#9
    if (vars.get('§DUMMYB1') == vars.get('§SI') && vars.get('§DUMMYN2') > vars.get('§DUMMYN1')) {
        vars.setCF(vars.get('§DUMMYN2') / 100 + 0.03);
    }
    
    //#10
    if (vars.get('§DUMMYN1') <= 350 && vars.get('§DUMMYN2') <= 350) {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
