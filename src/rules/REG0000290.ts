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

export const REG0000290: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0000290
    // REQUEST:
    // """
    // #1
    // COND:
    // §L_CAS_MOB_TG > #0
    // THEN:
    // *SET *CON-A = §VERN_CASSONETTO
    // *SET *CON-B = §L_CAS_MOB_TG
    // ELSE:
    // *SET *LG = ''
    // #2
    // COND:
    // §FS_DIDUE = §SI AND §FS_TS_MET = §SI
    // THEN:
    // *SET *CON-B = [ §L_CAS_MOB_TG / #2]
    // *SET *CF = #2
    // """
    // RESPONSE:
    //#1
    if (vars.get('§L_CAS_MOB_TG') > 0) {
        vars.setCON_A(vars.get('§VERN_CASSONETTO'));
        vars.setCON_B(vars.get('§L_CAS_MOB_TG'));
    } else {
        vars.setLG('');
    }
    
    //#2
    if (vars.get('§FS_DIDUE') == vars.get('§SI') && vars.get('§FS_TS_MET') == vars.get('§SI')) {
        vars.setCON_B(vars.get('§L_CAS_MOB_TG') / 2);
        vars.setCF(2);
    }
    
    // GENERATED

    return vars.output;
};
