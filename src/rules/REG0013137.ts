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

export const REG0013137: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0013137
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §FS_MOT_NICE = §SI
    // THEN:
    // *SET *CF = #2
    // #3
    // COND:
    // §FS_MOT_SOMFY = §SI
    // THEN:
    // *SET *CF = #1
    // #4
    // COND:
    // §ALTE_TC > #150
    // THEN:
    // *SET §DUMMYN1 = [ *CF * #2 ]
    // #5
    // COND:
    // §ALTE_TC > #150
    // THEN:
    // *SET *CF = §DUMMYN1
    // #6
    // COND:
    // §FS_KIT_FOT_T01 = §SI
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (vars.get('§FS_MOT_NICE') == vars.get('§SI')) {
        vars.setCF(2);
    }
    
    //#3
    if (vars.get('§FS_MOT_SOMFY') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#4
    if (vars.get('§ALTE_TC') > 150) {
        vars.setDUMMYN1(vars.getCF() * 2);
    }
    
    //#5
    if (vars.get('§ALTE_TC') > 150) {
        vars.setCF(vars.get('§DUMMYN1'));
    }
    
    //#6
    if (vars.get('§FS_KIT_FOT_T01') == vars.get('§SI')) {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
