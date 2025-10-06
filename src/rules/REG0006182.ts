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

export const REG0006182: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0006182
    // REQUEST:
    // """
    // #1
    // COND:
    // §L_RULLO_TG > #0
    // THEN:
    // *SET *CON-A = '0000'
    // *SET *CON-B = §L_RULLO_TG
    // *SET *CF = §NR_PZ_RULLO
    // ELSE:
    // *SET *LG = ''
    // #2
    // COND:
    // §FS_TEL_RUL = §SI AND §FS_TEL_TS <> §SI
    // THEN:
    // *SET *LG = ''
    // #3
    // COND:
    // §FS_RUL_58_SCR = §SI
    // THEN:
    // *SET *CON-A = '0051'
    // #4
    // COND:
    // §FS_VOLANT = §SI OR §FS_VOL_SPA = §SI
    // THEN:
    // *SET *CF = #1
    // #5
    // COND:
    // §FS_ROLLO = §SI
    // THEN:
    // *SET *CON-A = '0103'
    // #6
    // COND:
    // §FS_CLI_ZIP_TWI = §SI AND §FS_TEL1_TWI = §NO
    // THEN:
    // *SET *LG = ''
    // #7
    // COND:
    // §FS_CLI_TWI_BG = §SI AND §FS_TEL1_TWI = §NO
    // THEN:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§L_RULLO_TG') > 0) {
        vars.setCON_A('0000');
        vars.setCON_B(vars.get('§L_RULLO_TG'));
        vars.setCF(vars.get('§NR_PZ_RULLO'));
    } else {
        vars.setLG('');
    }
    
    //#2
    if (vars.get('§FS_TEL_RUL') == vars.get('§SI') && vars.get('§FS_TEL_TS') != vars.get('§SI')) {
        vars.setLG('');
    }
    
    //#3
    if (vars.get('§FS_RUL_58_SCR') == vars.get('§SI')) {
        vars.setCON_A('0051');
    }
    
    //#4
    if (vars.get('§FS_VOLANT') == vars.get('§SI') || vars.get('§FS_VOL_SPA') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#5
    if (vars.get('§FS_ROLLO') == vars.get('§SI')) {
        vars.setCON_A('0103');
    }
    
    //#6
    if (vars.get('§FS_CLI_ZIP_TWI') == vars.get('§SI') && vars.get('§FS_TEL1_TWI') == vars.get('§NO')) {
        vars.setLG('');
    }
    
    //#7
    if (vars.get('§FS_CLI_TWI_BG') == vars.get('§SI') && vars.get('§FS_TEL1_TWI') == vars.get('§NO')) {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
