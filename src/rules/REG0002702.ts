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

export const REG0002702: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0002702
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #1
    // #2
    // COND:
    // §FS_SCRIGNO_250 = §SI OR §FS_SCRIGNO_300 = §SI OR §FS_DUCK = §SI OR §FS_SCR_DUC = §SI
    // THEN:
    // *SET *CF = #0
    // #3
    // COND:
    // §FS_MOT_SUNEA = §SI AND §FS_MOTORE_CSI = §SI
    // ELSE:
    // *SET *LG = ''
    // #4
    // COND:
    // §FS_DIDUE = §SI OR §FS_SEGNO = §SI OR §FS_NODO = §SI
    // THEN:
    // *SET *CF = #0
    // #5
    // COND:
    // §FS_SEG_DID = §SI
    // THEN:
    // *SET *CF = #0
    // #6
    // COND:
    // §FS_TXT = §SI
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    vars.setCF(1);
    
    //#2
    if (vars.get('§FS_SCRIGNO_250') == vars.get('§SI') || vars.get('§FS_SCRIGNO_300') == vars.get('§SI') || vars.get('§FS_DUCK') == vars.get('§SI') || vars.get('§FS_SCR_DUC') == vars.get('§SI')) {
        vars.setCF(0);
    }
    
    //#3
    if (vars.get('§FS_MOT_SUNEA') == vars.get('§SI') && vars.get('§FS_MOTORE_CSI') == vars.get('§SI')) {
    } else {
        vars.setLG('');
    }
    
    //#4
    if (vars.get('§FS_DIDUE') == vars.get('§SI') || vars.get('§FS_SEGNO') == vars.get('§SI') || vars.get('§FS_NODO') == vars.get('§SI')) {
        vars.setCF(0);
    }
    
    //#5
    if (vars.get('§FS_SEG_DID') == vars.get('§SI')) {
        vars.setCF(0);
    }
    
    //#6
    if (vars.get('§FS_TXT') == vars.get('§SI')) {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
