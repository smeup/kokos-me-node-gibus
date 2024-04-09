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

export const REG0011473: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0011473
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §FS_SP_0_GCT = §SI
    // THEN:
    // *SET *CF = [§ALTE_TC / #100]
    // #3
    // COND:
    // §FS_TOLO_GC = §SI
    // THEN:
    // *SET *CF = [§ALTE_TC / #100]
    // #4
    // COND:
    // §ALTE_TC <= #360
    // THEN:
    // *SET *CF = #0
    // #5
    // THEN:
    // *SET *NT = 'CAVO PER TENDA ALTA XXX'
    // #6
    // COND:
    // §PD_NT_LU_GC <> §NO
    // THEN:
    // *SET *NT = §PD_NT_LU_GC
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (vars.get('§FS_SP_0_GCT') == vars.get('§SI')) {
        vars.setCF(vars.get('§ALTE_TC') / 100);
    }
    
    //#3
    if (vars.get('§FS_TOLO_GC') == vars.get('§SI')) {
        vars.setCF(vars.get('§ALTE_TC') / 100);
    }
    
    //#4
    if (vars.get('§ALTE_TC') <= 360) {
        vars.setCF(0);
    }
    
    //#5
    vars.setNT('CAVO PER TENDA ALTA XXX');
    
    //#6
    if (vars.get('§PD_NT_LU_GC') != vars.get('§NO')) {
        vars.setNT(vars.get('§PD_NT_LU_GC'));
    }
    // GENERATED

    return vars.output;
};
