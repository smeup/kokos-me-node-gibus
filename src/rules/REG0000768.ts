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

export const REG0000768: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0000768
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §FS_SP_0_GC = §SI
    // THEN:
    // *SET *CF = #1
    // #3
    // COND:
    // §FS_TEKA_GC = §SI
    // THEN:
    // *SET *CF = #1
    // #4
    // COND:
    // §ALTE_TC > #350
    // THEN:
    // *SET *CF = #0
    // #5
    // THEN:
    // *SET §DUMMYN1 = [ §ALTE_TC  + §AUM_GUI_SX ]
    // #6
    // THEN:
    // *SET §DUMMYN2 = [ §ALTE_TC  + §AUM_GUI_DX ]
    // #7
    // COND:
    // §DUMMYN1 > #350 OR §DUMMYN2 > #350
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (vars.get('§FS_SP_0_GC') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#3
    if (vars.get('§FS_TEKA_GC') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#4
    if (vars.get('§ALTE_TC') > 350) {
        vars.setCF(0);
    }
    
    //#5
    vars.setDUMMYN1(vars.get('§ALTE_TC') + vars.get('§AUM_GUI_SX'));
    
    //#6
    vars.setDUMMYN2(vars.get('§ALTE_TC') + vars.get('§AUM_GUI_DX'));
    
    //#7
    if (vars.get('§DUMMYN1') > 350 || vars.get('§DUMMYN2') > 350) {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
