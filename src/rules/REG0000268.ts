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

export const REG0000268: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0000268
    // REQUEST:
    // """
    // #1
    // COND:
    // (§FS_DIM_250 = §SI OR §FS_SCRIGNO_250 = §SI OR §FS_COMBI_250 = §SI ) AND §FS_BRA_CIN <> §SI
    // THEN:
    // *SET *CON-A = §VERN_BRACCI
    // *SET *CON-B = §SPOR_TS
    // ELSE:
    // *SET *LG = ''
    // #2
    // COND:
    // §FS_SCRIGNO_250 = §SI
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    if ((vars.get('§FS_DIM_250') == vars.get('§SI') || vars.get('§FS_SCRIGNO_250') == vars.get('§SI') || vars.get('§FS_COMBI_250') == vars.get('§SI')) && vars.get('§FS_BRA_CIN') != vars.get('§SI')) {
        vars.setCON_A(vars.get('§VERN_BRACCI'));
        vars.setCON_B(vars.get('§SPOR_TS'));
    } else {
        vars.setLG('');
    }
    
    //#2
    if (vars.get('§FS_SCRIGNO_250') == vars.get('§SI')) {
        vars.setCF(0);
    }
    
    // GENERATED

    return vars.output;
};
