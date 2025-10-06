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

export const REG0001345: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0001345
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET *CON-A = '0080'
    // #2
    // COND:
    // §FS_DIM_5 = §SI OR §FS_DIM_6 = §SI OR §FS_TEKA_5 = §SI
    // THEN:
    // *SET *CF = [§NR_ZAVOR_AGG + §NR_ZAVOR_FRONTA]
    // #3
    // COND:
    // §FS_SP_0 = §SI
    // THEN:
    // *SET *CF = [§NR_ZAVOR_AGG + §NR_ZAVOR_FRONTA]
    // #4
    // COND:
    // §FS_DIM_250 = §SI AND §FS_TENDA_CADUTA = §SI
    // THEN:
    // *SET *CF = [§NR_ZAVOR_AGG + §NR_ZAVOR_FRONTA]
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setCON_A('0080');
    
    //#2
    if (vars.get('§FS_DIM_5') == vars.get('§SI') || vars.get('§FS_DIM_6') == vars.get('§SI') || vars.get('§FS_TEKA_5') == vars.get('§SI')) {
        vars.setCF(vars.get('§NR_ZAVOR_AGG') + vars.get('§NR_ZAVOR_FRONTA'));
    }
    
    //#3
    if (vars.get('§FS_SP_0') == vars.get('§SI')) {
        vars.setCF(vars.get('§NR_ZAVOR_AGG') + vars.get('§NR_ZAVOR_FRONTA'));
    }
    
    //#4
    if (vars.get('§FS_DIM_250') == vars.get('§SI') && vars.get('§FS_TENDA_CADUTA') == vars.get('§SI')) {
        vars.setCF(vars.get('§NR_ZAVOR_AGG') + vars.get('§NR_ZAVOR_FRONTA'));
    }
    
    // GENERATED

    return vars.output;
};
