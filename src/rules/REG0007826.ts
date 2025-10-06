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

export const REG0007826: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0007826
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_ROLLO = §SI
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §FS_IMPERO = §SI
    // THEN:
    // *SET *CF = #0
    // #3
    // COND:
    // §FS_FORGIATO = §SI
    // THEN:
    // *SET *CF = #0
    // #4
    // COND:
    // §FS_TEL_RUL_FRO = §SI
    // THEN:
    // *SET *CF = #0
    // #5
    // COND:
    // §FS_TEL_RUL = §SI
    // THEN:
    // *SET *CF = #0
    // #6
    // COND:
    // §FS_TEL_TWI = §SI
    // THEN:
    // *SET *CF = #0
    // #7
    // COND:
    // §FS_TEN_BIL = §SI
    // THEN:
    // *SET *CF = #0
    // #8
    // THEN:
    // *SET *NT = §NOT_MOT_CLI
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_ROLLO') == vars.get('§SI')) {
        vars.setCF(0);
    }
    
    //#2
    if (vars.get('§FS_IMPERO') == vars.get('§SI')) {
        vars.setCF(0);
    }
    
    //#3
    if (vars.get('§FS_FORGIATO') == vars.get('§SI')) {
        vars.setCF(0);
    }
    
    //#4
    if (vars.get('§FS_TEL_RUL_FRO') == vars.get('§SI')) {
        vars.setCF(0);
    }
    
    //#5
    if (vars.get('§FS_TEL_RUL') == vars.get('§SI')) {
        vars.setCF(0);
    }
    
    //#6
    if (vars.get('§FS_TEL_TWI') == vars.get('§SI')) {
        vars.setCF(0);
    }
    
    //#7
    if (vars.get('§FS_TEN_BIL') == vars.get('§SI')) {
        vars.setCF(0);
    }
    
    //#8
    vars.setNT(vars.get('§NOT_MOT_CLI'));
    // GENERATED

    return vars.output;
};
