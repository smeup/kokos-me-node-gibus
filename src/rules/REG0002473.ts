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

export const REG0002473: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0002473
    // REQUEST:
    // """
    // #1
    // COND:
    // §L_FRO_2 > #0
    // THEN:
    // *SET *CON-A = §VERN_1_COM
    // *SET *CON-B = §L_FRO_2
    // ELSE:
    // *SET *LG = ''
    // #2
    // THEN:
    // *SET *CF = #0
    // #3
    // COND:
    // §FS_DUE_2G_ZIP = §SI OR §FS_DUE_0G_ZIP = §SI OR §FS_DUE_5_ZIP = §SI
    // THEN:
    // *SET *CF = #1
    // #4
    // COND:
    // §FS_DUE_1_ZIP = §SI
    // THEN:
    // *SET *CF = #1
    // #5
    // COND:
    // §FS_TEL_RUL = §SI AND §FS_TEL_RUL_FRO <> §SI
    // THEN:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§L_FRO_2') > 0) {
        vars.setCON_A(vars.get('§VERN_1_COM'));
        vars.setCON_B(vars.get('§L_FRO_2'));
    } else {
        vars.setLG('');
    }
    
    //#2
    vars.setCF(0);
    
    //#3
    if (vars.get('§FS_DUE_2G_ZIP') == vars.get('§SI') || vars.get('§FS_DUE_0G_ZIP') == vars.get('§SI') || vars.get('§FS_DUE_5_ZIP') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#4
    if (vars.get('§FS_DUE_1_ZIP') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#5
    if (vars.get('§FS_TEL_RUL') == vars.get('§SI') && vars.get('§FS_TEL_RUL_FRO') != vars.get('§SI')) {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
