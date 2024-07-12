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

export const REG0001326: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0001326
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #1
    // #2
    // COND:
    // §FS_DIM_250 = §SI OR §FS_DIM_300 = §SI OR §FS_MAR_30_13 = §SI OR §FS_MAR_30_50 = §SI OR §FS_MAR_35_13 = §SI
    // ELSE:
    // *SET *CF = #0
    // #3
    // COND:
    // §FS_MOLLA_COMP = §SI AND (§NR_BRACCI > #2 OR §LARG > #590)
    // ELSE:
    // *SET *CF = #0
    // #4
    // THEN:
    // *SET *CON-A = 'P055'
    // #5
    // COND:
    // §VERN_1_COM = '0070' OR §VERN_1_COM = '0079' OR §VERN_1_COM = '0072' OR §VERN_1_COM = '0073' OR §VR_ABB = '07' OR            §VR_ABB = '08' OR §VR_ABB = '04' OR §VR_ABB = '05'
    // THEN:
    // *SET *CON-A = 'P072'
    // """
    // RESPONSE:
    //#1
    vars.setCF(1);
    
    //#2
    if (vars.get('§FS_DIM_250') == vars.get('§SI') || vars.get('§FS_DIM_300') == vars.get('§SI') || vars.get('§FS_MAR_30_13') == vars.get('§SI') || vars.get('§FS_MAR_30_50') == vars.get('§SI') || vars.get('§FS_MAR_35_13') == vars.get('§SI')) {
        // do nothing
    } else {
        vars.setCF(0);
    }
    
    //#3
    if (vars.get('§FS_MOLLA_COMP') == vars.get('§SI') && (vars.get('§NR_BRACCI') > 2 || vars.get('§LARG') > 590)) {
        // do nothing
    } else {
        vars.setCF(0);
    }
    
    //#4
    vars.setCON_A('P055');
    
    //#5
    if (vars.get('§VERN_1_COM') == '0070' || vars.get('§VERN_1_COM') == '0079' || vars.get('§VERN_1_COM') == '0072' || vars.get('§VERN_1_COM') == '0073' || vars.get('§VR_ABB') == '07' || vars.get('§VR_ABB') == '08' || vars.get('§VR_ABB') == '04' || vars.get('§VR_ABB') == '05') {
        vars.setCON_A('P072');
    }
    // GENERATED

    return vars.output;
};
