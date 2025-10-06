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

export const REG0002468: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0002468
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_DUE_2G_ZIP = §SI OR §FS_DUE_0G_ZIP = §SI OR §FS_DUE_5_ZIP = §SI
    // THEN:
    // *SET *CON-A = §VERN_1_COM
    // *SET *CON-B = §L_GUIDA_ZIP
    // *SET *CF = #2
    // ELSE:
    // *SET *LG = ''
    // #2
    // COND:
    // §FIX_GUIDE = '04' AND §FS_DUE_2G_ZIP = §SI
    // THEN:
    // *SET *CON-B = [ §L_GUIDA_ZIP + #3,1]
    // #3
    // COND:
    // §FIX_GUIDE = '01' AND (§FS_DUE_0G_ZIP = §SI  OR §FS_DUE_5_ZIP = §SI)
    // THEN:
    // *SET *CON-B = [§L_GUIDA_ZIP + #5,7]
    // #4
    // COND:
    // §FIX_GUIDE = '04' AND (§FS_DUE_0G_ZIP = §SI  OR §FS_DUE_5_ZIP = §SI)
    // THEN:
    // *SET *CON-B = [§L_GUIDA_ZIP + #8,8]
    // #5
    // COND:
    // §FS_TEL_RUL = §SI AND §FS_TEL_RUL_FRO <> §SI
    // THEN:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_DUE_2G_ZIP') == vars.get('§SI') || vars.get('§FS_DUE_0G_ZIP') == vars.get('§SI') || vars.get('§FS_DUE_5_ZIP') == vars.get('§SI')) {
        vars.setCON_A(vars.get('§VERN_1_COM'));
        vars.setCON_B(vars.get('§L_GUIDA_ZIP'));
        vars.setCF(2);
    } else {
        vars.setLG('');
    }
    
    //#2
    if (vars.get('§FIX_GUIDE') == '04' && vars.get('§FS_DUE_2G_ZIP') == vars.get('§SI')) {
        vars.setCON_B(vars.get('§L_GUIDA_ZIP') + 3.1);
    }
    
    //#3
    if (vars.get('§FIX_GUIDE') == '01' && (vars.get('§FS_DUE_0G_ZIP') == vars.get('§SI') || vars.get('§FS_DUE_5_ZIP') == vars.get('§SI'))) {
        vars.setCON_B(vars.get('§L_GUIDA_ZIP') + 5.7);
    }
    
    //#4
    if (vars.get('§FIX_GUIDE') == '04' && (vars.get('§FS_DUE_0G_ZIP') == vars.get('§SI') || vars.get('§FS_DUE_5_ZIP') == vars.get('§SI'))) {
        vars.setCON_B(vars.get('§L_GUIDA_ZIP') + 8.8);
    }
    
    //#5
    if (vars.get('§FS_TEL_RUL') == vars.get('§SI') && vars.get('§FS_TEL_RUL_FRO') != vars.get('§SI')) {
        vars.setLG('');
    }
    
    // GENERATED

    return vars.output;
};
