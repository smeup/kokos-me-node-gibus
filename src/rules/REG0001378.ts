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

export const REG0001378: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0001378
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_ATT_PARETE <> §SI
    // THEN:
    // *SET *LG = ''
    // #2
    // COND:
    // §FS_ATT_SOFFITTO = §SI
    // THEN:
    // *SET *CON-B = #17
    // ELSE:
    // *SET *CON-B = #16,5
    // #3
    // THEN:
    // *SET *CF = #0
    // *SET *CON-A = §VERN_1_COM
    // #4
    // COND:
    // §FS_FAM2_VIVA = §SI
    // THEN:
    // *SET *CF = #1
    // #5
    // COND:
    // §FS_FAM2_QUADRA = §SI
    // THEN:
    // *SET *CF = #1
    // #6
    // COND:
    // §FS_FAM2_LUCE = §SI
    // THEN:
    // *SET *CF = #1
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_ATT_PARETE') !== vars.get('§SI')) {
        vars.setLG('');
    }
    
    //#2
    if (vars.get('§FS_ATT_SOFFITTO') === vars.get('§SI')) {
        vars.setCON_B(17);
    } else {
        vars.setCON_B(16.5);
    }
    
    //#3
    vars.setCF(0);
    vars.setCON_A(vars.get('§VERN_1_COM'));
    
    //#4
    if (vars.get('§FS_FAM2_VIVA') === vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#5
    if (vars.get('§FS_FAM2_QUADRA') === vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#6
    if (vars.get('§FS_FAM2_LUCE') === vars.get('§SI')) {
        vars.setCF(1);
    }
    
    // GENERATED

    return vars.output;
};
