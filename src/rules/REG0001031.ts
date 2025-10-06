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

export const REG0001031: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0001031
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A = §VERN_BRACCI
    // *SET *CF = #0
    // #2
    // COND:
    // (§FS_BI_FORO = §SI ) AND (§FS_DIM_250 = §SI)
    // THEN:
    // *SET *CF = #1
    // #3
    // COND:
    // (§FS_BI_FORO = §SI ) AND (§FS_COMBI_250 = §SI)
    // THEN:
    // *SET *CF = #1
    // """
    // RESPONSE:
    //#1
    vars.setCON_A(vars.get('§VERN_BRACCI'));
    vars.setCF(0);
    
    //#2
    if ((vars.get('§FS_BI_FORO') == vars.get('§SI')) && (vars.get('§FS_DIM_250') == vars.get('§SI'))) {
        vars.setCF(1);
    }
    
    //#3
    if ((vars.get('§FS_BI_FORO') == vars.get('§SI')) && (vars.get('§FS_COMBI_250') == vars.get('§SI'))) {
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
