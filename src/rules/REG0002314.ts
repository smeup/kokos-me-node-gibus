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

export const REG0002314: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0002314
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_ZIP = §SI
    // THEN:
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
    // §FS_SEGNO = §SI
    // THEN:
    // *SET *CF = #1
    // #5
    // COND:
    // §FS_DIDUE = §SI
    // THEN:
    // *SET *CF = #1
    // #6
    // COND:
    // §FS_FORGIATO = §SI
    // THEN:
    // *SET *CF = #1
    // #7
    // COND:
    // §FS_NODO = §SI
    // THEN:
    // *SET *CF = #1
    // #8
    // COND:
    // §FS_DIM_5 = §SI
    // THEN:
    // *SET *CF = #1
    // #9
    // COND:
    // §FS_DIM_0G = §SI
    // THEN:
    // *SET *CF = #1
    // #10
    // COND:
    // §FS_FAM2_TOLO = §SI OR §FS_SP_0_GCT = §SI
    // THEN:
    // *SET *CF = #1
    // #11
    // COND:
    // §FS_FAM2_CLI_CAB = §SI
    // THEN:
    // *SET *CF = #1
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_ZIP') == vars.get('§SI')) {
        vars.setLG('');
    }
    
    //#2
    vars.setCF(0);
    
    //#3
    if (vars.get('§FS_FAM2_TOLO') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#4
    if (vars.get('§FS_SEGNO') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#5
    if (vars.get('§FS_DIDUE') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#6
    if (vars.get('§FS_FORGIATO') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#7
    if (vars.get('§FS_NODO') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#8
    if (vars.get('§FS_DIM_5') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#9
    if (vars.get('§FS_DIM_0G') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#10
    if (vars.get('§FS_FAM2_TOLO') == vars.get('§SI') || vars.get('§FS_SP_0_GCT') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#11
    if (vars.get('§FS_FAM2_CLI_CAB') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    // GENERATED

    return vars.output;
};
