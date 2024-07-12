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

export const REG0001038: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0001038
    // REQUEST:
    // """
    // #1
    // COND:
    // (§FS_DIM_300 = §SI) AND (§SPOR_TS <= #300 )
    // THEN:
    // *SET *CON-A = §VERN_BRACCI
    // ELSE:
    // *SET *LG = ''
    // #2
    // COND:
    // §VERN_BRACCI = '0053' OR §VERN_BRACCI = '0065' OR §VERN_BRACCI = '0069' OR §VERN_BRACCI = '0073'
    // ELSE:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_DIM_300') == vars.get('§SI') && vars.get('§SPOR_TS') <= 300) {
        vars.setCON_A(vars.get('§VERN_BRACCI'));
    } else {
        vars.setLG('');
    }
    
    //#2
    if (vars.get('§VERN_BRACCI') == '0053' || vars.get('§VERN_BRACCI') == '0065' || vars.get('§VERN_BRACCI') == '0069' || vars.get('§VERN_BRACCI') == '0073') {
    } else {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
