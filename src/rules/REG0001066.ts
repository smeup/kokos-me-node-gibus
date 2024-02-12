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

export const REG0001066: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0001066
    // REQUEST:
    // """
    // #1
    // COND:
    // §AUM_GUI_SX = §AUM_GUI_DX
    // THEN:
    // *SET *CON-A = §VERN_GUIDE
    // *SET *CON-B = [§L_GUIDA_ZIP + §AUM_GUI_SX]
    // *SET *CF = #2
    // ELSE:
    // *SET *LG = ''
    // #2
    // COND:
    // §FS_CHI_VAR = §SI
    // THEN:
    // *SET *CON-A = 'P065'
    // #3
    // COND:
    // §FS_CLI_ZIP_TWI = §SI AND §FS_GUI_CLI_ZIP <> §SI
    // THEN:
    // *SET *CON-B = [§ALTE_TC - #24,8 + §AUM_GUI_SX]
    // #4
    // COND:
    // §FS_CLI_TWI_BG = §SI AND §FS_GUI_CLI_ZIP <> §SI
    // THEN:
    // *SET *CON-B = [§ALTE_TC - #24,8 + §AUM_GUI_SX]
    // #5
    // COND:
    // §FS_CHI_VAR = §SI OR §FS_CLI_ZIP_TWI = §SI OR §FS_CLI_TWI_BG = §SI
    // THEN:
    // *SET *CON-A = 'P065'
    // #6
    // COND:
    // §FS_GU_56 = §SI AND §FS_FAM2_CLI_ZIP = §SI
    // THEN:
    // *SET *CON-A = 'P065'
    // #7
    // COND:
    // *CF = #2 AND (§TI_GU_T01 = '02' OR §TI_GU_T01 = '03')
    // THEN:
    // *SET *CF = #1
    // """
    // RESPONSE:
    //#1
    if (vars.get('§AUM_GUI_SX') == vars.get('§AUM_GUI_DX')) {
        vars.setCON_A(vars.get('§VERN_GUIDE'));
        vars.setCON_B(vars.get('§L_GUIDA_ZIP') + vars.get('§AUM_GUI_SX'));
        vars.setCF(2);
    } else {
        vars.setLG('');
    }
    //#2
    if (vars.get('§FS_CHI_VAR') == vars.get('§SI')) {
        vars.setCON_A('P065');
    }
    //#3
    if (vars.get('§FS_CLI_ZIP_TWI') == vars.get('§SI') && vars.get('§FS_GUI_CLI_ZIP') != vars.get('§SI')) {
        vars.setCON_B(vars.get('§ALTE_TC') - 24.8 + vars.get('§AUM_GUI_SX'));
    }
    //#4
    if (vars.get('§FS_CLI_TWI_BG') == vars.get('§SI') && vars.get('§FS_GUI_CLI_ZIP') != vars.get('§SI')) {
        vars.setCON_B(vars.get('§ALTE_TC') - 24.8 + vars.get('§AUM_GUI_SX'));
    }
    //#5
    if (vars.get('§FS_CHI_VAR') == vars.get('§SI') || vars.get('§FS_CLI_ZIP_TWI') == vars.get('§SI') || vars.get('§FS_CLI_TWI_BG') == vars.get('§SI')) {
        vars.setCON_A('P065');
    }
    //#6
    if (vars.get('§FS_GU_56') == vars.get('§SI') && vars.get('§FS_FAM2_CLI_ZIP') == vars.get('§SI')) {
        vars.setCON_A('P065');
    }
    //#7
    if (vars.get('§CF') == 2 && (vars.get('§TI_GU_T01') == '02' || vars.get('§TI_GU_T01') == '03')) {
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
