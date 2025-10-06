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

export const REG0012244: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0012244
    // REQUEST:
    // """
    // #1
    // #2
    // THEN:
    // *SET *CF = #0
    // #3
    // THEN:
    // *SET §DUMMYN1 = [ §ALTE_TC + §AUM_GUI_SX ]
    // *SET §DUMMYN2 = [ §ALTE_TC + §AUM_GUI_DX ]
    // #4
    // COND:
    // §DUMMYN1 > #350
    // THEN:
    // *SET *CF = #1
    // #5
    // COND:
    // §DUMMYN2 > #350
    // THEN:
    // *SET *CF = #1
    // #6
    // COND:
    // §FS_FREE = §SI
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    vars.setCF(0);
    
    //#3
    vars.setDUMMYN1(vars.get('§ALTE_TC') + vars.get('§AUM_GUI_SX'));
    vars.setDUMMYN2(vars.get('§ALTE_TC') + vars.get('§AUM_GUI_DX'));
    
    //#4
    if (vars.get('§DUMMYN1') > 350) {
        vars.setCF(1);
    }
    
    //#5
    if (vars.get('§DUMMYN2') > 350) {
        vars.setCF(1);
    }
    
    //#6
    if (vars.get('§FS_FREE') == vars.get('§SI')) {
        vars.setCF(0);
    }
    
    // GENERATED

    return vars.output;
};
