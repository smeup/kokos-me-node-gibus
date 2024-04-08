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

export const IMP0000013: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: IMP0000013
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A = *COL
    // *SET *CON-B = *LUNG
    // *SET *CF = #0
    // #2
    // COND:
    // (§FS_DIM_250 = §SI) OR (§FS_DIM_300 = §SI) OR (§FS_MAR_30_13 = §SI) OR (§FS_MAR_30_50  = §SI) OR (§FS_MAR_35_13 = §SI)
    // THEN:
    // *SET *CF = #1
    // #3
    // COND:
    // (§FS_COMBI_250 = §SI)
    // THEN:
    // *SET *CF = #1
    // #4
    // COND:
    // §FS_TENDA_CADUTA = §SI
    // THEN:
    // *SET *CM = '010073'
    // """
    // RESPONSE:
    //#1
    vars.setCON_A(vars.getCOL());
    vars.setCON_B(vars.getLUNG());
    vars.setCF(0);
    
    //#2
    if (vars.get('§FS_DIM_250') == vars.get('§SI') || vars.get('§FS_DIM_300') == vars.get('§SI') || vars.get('§FS_MAR_30_13') == vars.get('§SI') || vars.get('§FS_MAR_30_50') == vars.get('§SI') || vars.get('§FS_MAR_35_13') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#3
    if (vars.get('§FS_COMBI_250') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#4
    if (vars.get('§FS_TENDA_CADUTA') == vars.get('§SI')) {
        vars.setCM('010073');
    }
    // GENERATED

    return vars.output;
};
