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

export const REG0001052: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0001052
    // REQUEST:
    // """
    // #1
    // COND:
    // (§FS_FAM2_TOLO = §SI) AND (§FP_MANTOVANA = §SI)
    // THEN:
    // *SET *CON-A = §VERN_PLAST
    // *SET *CON-B = [§LARG - #11,3]
    // ELSE:
    // *SET *LG = ''
    // #2
    // COND:
    // §FS_TOLO_GA = §SI
    // THEN:
    // *SET *CON-B = [§LARG - #8,2]
    // #3
    // COND:
    // §FS_TOLO_CL = §SI
    // THEN:
    // *SET *CON-B = [§LARG - #10,5]
    // #4
    // COND:
    // §FS_TOLO_GC = §SI
    // THEN:
    // *SET *CON-B = [§LARG - #11,5]
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_FAM2_TOLO') == vars.get('§SI') && vars.get('§FP_MANTOVANA') == vars.get('§SI')) {
        vars.setCON_A(vars.get('§VERN_PLAST'));
        vars.setCON_B(vars.get('§LARG') - 11.3);
    } else {
        vars.setLG('');
    }
    
    //#2
    if (vars.get('§FS_TOLO_GA') == vars.get('§SI')) {
        vars.setCON_B(vars.get('§LARG') - 8.2);
    }
    
    //#3
    if (vars.get('§FS_TOLO_CL') == vars.get('§SI')) {
        vars.setCON_B(vars.get('§LARG') - 10.5);
    }
    
    //#4
    if (vars.get('§FS_TOLO_GC') == vars.get('§SI')) {
        vars.setCON_B(vars.get('§LARG') - 11.5);
    }
    
    // GENERATED

    return vars.output;
};
